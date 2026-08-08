import { getPosts } from "../../data/posts.ts";
import Post from "../Post/Post.js";
import styles from "./Posts.module.sass";

function Posts() {
  const postList = getPosts(1);
  console.log(postList);
  return (
    <article className={styles.posts}>
      {postList.map((entry, i) => {
        let num = 0;
        //console.log(entry);
        return <Post post={entry} key={entry.id} />;
      })}
    </article>
  );
}

export default Posts;
