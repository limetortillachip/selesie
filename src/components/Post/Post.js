import { compiler } from "markdown-to-jsx";
import styles from "./Post.module.sass";

function Post({ post }) {
  return (
    <article className={styles.post}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h3>{post.title}</h3>
        </div>
        <div className={styles.date}>
          <span>{post.date}</span>
        </div>
        <div className={styles.par}>
          {post.body.map((text) => {
            const jsxText = compiler(text);
            return <p>{jsxText}</p>;
          })}
        </div>
      </div>
    </article>
  );
}

export default Post;
