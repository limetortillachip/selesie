import { compiler } from "markdown-to-jsx/react";
import Post from "../Post/Post";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";
import { QuotesIcon } from "@phosphor-icons/react";

function PostCard({ card }) {
  const postCard = {
    title: card.title,
    body: card.body[0],
  };
  return (
    <>
      <div data-card="title">
        <span id="icon">
          <QuotesIcon size={32} weight="fill" />
        </span>
        <span>
          <h4>{postCard.title}</h4>
        </span>
      </div>
      <div data-card="body">
        <p>{compiler(postCard.body)}</p>
      </div>
    </>
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
