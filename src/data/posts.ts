export const textList = [
  {
    title: "summers are so dim nowadays.",
    date: "August 2, 2026",
    body: [
      "Nam lectus erat, luctus sit amet nulla ac, viverra fringilla urna. Sed eu odio tellus. Maecenas placerat justo mi, in imperdiet erat vulputate vitae. Nam tempus suscipit mauris vel malesuada. Vivamus efficitur feugiat nulla, sed semper nisi sodales eu. Duis augue dolor, mattis vitae finibus in, cursus quis erat. **Pellentesque porta tortor metus, eu sagittis lectus imperdiet et.**",
      "Suspendisse potenti. Sed posuere et leo ut ornare. Mauris dui enim, sodales in hendrerit eget, sodales sed nisi. Curabitur pulvinar metus arcu, vel dapibus odio tristique ut. In mi urna, ullamcorper at volutpat id, molestie ut nisl. Sed elit ipsum, *egestas id fringilla ut*, convallis et leo.",
    ],
  },
  {
    title: "c'est la vie!",
    date: "July 18, 2026 10:22:00",
    body: [
      "Praesent condimentum dolor sit amet bibendum sodales.",
      "My favorite website is [Google!](https://google.com 'Google')",
    ],
  },
];

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

  textList.forEach((post, i) => {
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
