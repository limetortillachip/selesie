import { postList } from "../../data/posts";
import styles from "./Posts.module.sass";
import Post from "../Post/Post";
import { QuotesIcon } from "@phosphor-icons/react";

function Posts() {
  interface Entry {
    id: number;
    title: string;
    date: string;
    body: string[];
  }

  function createPost(config: Entry): {
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

  return (
    <article className={styles.posts}>
      <div className={styles.title}>
        <div id={styles.icon}>
          <QuotesIcon size={20} weight="fill" />
        </div>
        <div className={styles.text}>posts</div>
      </div>
      {postList.map((item, i) => {
        let newPost = createPost({
          id: i,
          title: item.title,
          date: item.date,
          body: item.body,
        });

        return <Post post={newPost} key={i} />;
      })}
    </article>
  );
}

export default Posts;
