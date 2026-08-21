import config from "./page-details.json";
import { getPhotos } from "./photos-api";
import { postList } from "./postList";

let photos = await getPhotos();

console.log(photos);

interface PostConfig {
  id: number;
  date: Date;
  readonly type: string;
}

interface TextPost extends PostConfig {
  title: string;
  body: string[];
  photos?: string[];
}

interface PhotoPost extends PostConfig {
  caption?: string;
  url: string;
}

function createTextPost(config: TextPost): {
  id: number;
  type: string;
  title: string;
  date: Date;
  body: string[];
  photos?: string[];
} {
  return {
    id: config.id + 1,
    type: config.type,
    title: config.title || "my post title.",
    date: config.date,
    body: config.body,
    photos: config.photos,
  };
}

function createPhotoPost(config: PhotoPost): {
  id: number;
  type: string;
  date: Date;
  url: string;
} {
  return {
    id: config.id + 1,
    type: config.type,
    date: config.date,
    url: config.url,
  };
}

export const getPosts = () => {
  const posts = {
    photos: [],
    text: [],
  };
  postList.forEach((post, i: number) => {
    let textObj = createTextPost({
      id: i,
      type: "text",
      title: post.title,
      date: new Date(post.date),
      body: post.body,
    });
    posts.text.push(textObj);
  });

  photos.forEach((photo, i: number) => {
    const url = "https://images-pull.b-cdn.net/";
    let photoObj = createPhotoPost({
      id: i,
      type: "photo",
      date: new Date("08/21/2026"),
      url: `${url}${photo.objectName}`,
    });
    posts.photos.push(photoObj);
  });

  return posts;
  /*
      config.sample_photos.forEach((photo, i: number) => {
        let photoObj = createPhotoPost({
          id: i,
          type: "photo",
          date: new Date("08/07/2026"),
          url: photo,
        });
        photoPostsList.push(photoObj);
      });*/
};
