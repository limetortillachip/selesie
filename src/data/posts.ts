import { postList } from "./postList";

interface PostConfig {
  id: number;
  title: string;
  date: Date;
  readonly type: string;
}

interface TextPost extends PostConfig {
  body: string[];
  photos?: string[];
}

interface PhotoPost extends PostConfig {
  photos: string[];
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

export const getPosts = (num: number, type: string) => {
  const textPostsList: Array<{}> = [];
  //console.log(posts);

  postList.forEach((post: TextPost, i: number) => {
    let textObj = createTextPost({
      id: i,
      type: "text",
      title: post.title,
      date: new Date(post.date),
      body: post.body,
    });
    textPostsList.push(textObj);
  });

  //console.log(posts);

  const getRandomPost = () => {
    let num = 1;
    num = Math.floor(Math.random() * textPostsList.length + 1);
    //console.log(num);

    let randomPost = textPostsList.find((post) => post.id === num);

    return randomPost;
  };

  getRandomPost();

  return num > 0 ? textPostsList : getRandomPost();
};
