import { getPosts } from "../../data/posts.ts";
import Card from "../Card/Card.js";
import styles from "./Cards.module.sass";

function Cards() {
  const post = getPosts(0);
  console.log(post);

  const postCard = post;

  const photoCard = {
    type: "photo",
    photos: ["../../assets/DSC00057.png"],
    body: [""],
  };

  return (
    <article className={styles.cards}>
      <h2>cards</h2>
      <div className={styles.items}>
        <Card card={postCard} />
        <Card card={photoCard} />
      </div>
    </article>
  );
}

export default Cards;
