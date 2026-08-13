import { compiler } from "markdown-to-jsx";
import styles from "./Post.module.sass";

function Post({ post }) {
  const date = post.date.toDateString();
  const postDateMonth = date.split(" ").reverse().pop();
  const postDate = date
    .split(" ")
    .filter((date) => date != postDateMonth)
    .join(" ");

  //console.log(postDateMonth);
  return (
    <article className={styles.post} key={post.id}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h3>{post.title}</h3>
        </div>
        <div className={styles.date}>
          <span>
            {postDateMonth}, {postDate}.
          </span>
        </div>
        <div className={styles.par}>
          {post.body.map((text, i) => {
            const jsxText = compiler(text);
            return <p key={i}>{jsxText}</p>;
          })}
        </div>
      </div>
    </article>
  );
}

export default Post;
