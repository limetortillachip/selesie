import Post from "../../components/Post/Post";
import styles from "./Blog.module.sass";

function Blog({ post }) {
  return (
    <article className={styles.posts}>
      {post.map((entry, i) => {
        let num = 0;
        //console.log(entry);
        return <Post post={entry} key={entry.id} />;
      })}
    </article>
  );
}

export default Blog;
