import config from "./page-details.json";
import { postList } from "./postList";

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

export const getPosts = (type: string) => {
  /**
   * Switch for post functions
   */
  switch (type) {
    case "text":
      const textPostsList: Array<{}> = [];
      postList.forEach((post, i: number) => {
        let textObj = createTextPost({
          id: i,
          type: "text",
          title: post.title,
          date: new Date(post.date),
          body: post.body,
        });
        textPostsList.push(textObj);
      });
      return textPostsList;
    case "photos":
      const photoPostsList: Array<{}> = [];
      config.sample_photos.forEach((photo, i: number) => {
        let photoObj = createPhotoPost({
          id: i,
          type: "photo",
          date: new Date("08/07/2026"),
          url: photo,
        });
        photoPostsList.push(photoObj);
      });
      return photoPostsList;
    default:
      break;
  }
};
/** 
  type == "text"
    ? postList.forEach((post, i: number) => {
        let textObj = createTextPost({
          id: i,
          type: "text",
          title: post.title,
          date: new Date(post.date),
          body: post.body,
        });
        textPostsList.push(textObj);
      })
    : type == "photos"
      ? photos.forEach((photo, i: number) => {
          let photoObj = createPhotoPost({
            id: i,
            type: "photo",
            date: new Date("08/07/2026"),
            url: photo,
          });
          photoPostsList.push(photoObj);
        })
      : console.log("nothing to see here!");

  return type == "text" ? textPostsList : photoPostsList;
};
*/
