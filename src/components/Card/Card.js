import { compiler } from "markdown-to-jsx/react";
import Post from "../Post/Post";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";

function PostCard({ card }) {
  const postCard = {
    title: card.title,
    body: card.body[0],
  };
  return (
    <div>
      <h4>{postCard.title}</h4>
      <p>{compiler(postCard.body)}</p>
      <div>
        <span>
          <Link to="/blog">Read More</Link>
        </span>
      </div>
    </div>
  );
}

function PhotoCard(card) {
  return (
    <div>
      <h4>Photo</h4>
    </div>
  );
}

export default function Card({ card }) {
  return (
    <div className={styles.card}>
      {card.type === "post" ? (
        <PostCard card={card} />
      ) : card.type === "photo" ? (
        <PhotoCard card={card} />
      ) : null}
    </div>
  );
}
