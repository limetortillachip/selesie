import { getPosts } from "../../data/posts.ts";
import Card from "../Card/Card.js";
import styles from "./Cards.module.sass";

function Cards() {
  const post = getPosts(0);

  const postCard = post;
  postCard.type = "post";

  return (
    <article className={styles.cards}>
      <h2>cards</h2>
      <div className={styles.items}>
        <Card card={postCard} />
      </div>
    </article>
  );
}

export default Cards;
