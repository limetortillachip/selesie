export const postList = [
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

interface Post {
  id: number;
  title: string;
  date: string;
  body: string[];
}

function createPost(config: Post): {
  id: number;
  title: string;
  date: string;
  body: string[];
} {
  return {
    id: config.id + 1,
    title: config.title || "my post title.",
    date: new Date(config.date).toLocaleDateString(),
    body: config.body,
  };
}

export const getPosts = (num: number) => {
  const posts: Array<{}> = [];
  //console.log(posts);

  postList.forEach((post, i) => {
    let postObj = createPost({
      id: i,
      title: post.title,
      date: post.date,
      body: post.body,
    });
    posts.push(postObj);
  });

  //console.log(posts);

  const getRandomPost = () => {
    let num = 1;
    num = Math.floor(Math.random() * posts.length + 1);
    //console.log(num);

    let randomPost = posts.find((post) => post.id === num);

    return randomPost;
  };

  //getRandomPost();

  return num > 0 ? posts : getRandomPost();
};
