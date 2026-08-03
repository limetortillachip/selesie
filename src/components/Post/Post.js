import { compiler } from "markdown-to-jsx";
import styles from "./Post.module.sass";

function Post({ post }) {
  const postDate = new Date();
  return (
    <article className={styles.post}>
      <div className={styles.title}>
        <h3>{post.title}</h3>
      </div>
      <div className={styles.par}>
        {post.body.map((text) => {
          const jsxText = compiler(text);
          return <p>{jsxText}</p>;
        })}
      </div>
      <div>
        <span>{post.date}</span>
      </div>
    </article>
  );
}

export default Post;
