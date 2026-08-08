import { compiler } from "markdown-to-jsx/react";
import Post from "../Post/Post";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";
import { ImagesSquareIcon, QuotesIcon } from "@phosphor-icons/react";

function PostCard({ card }) {
  return (
    <article data-card="text">
      <div data-card="title">
        <span id="icon">
          <QuotesIcon size={32} weight="fill" />
        </span>
        <span>
          <h4>{card.title}</h4>
        </span>
      </div>
      <div data-card="body">
        <p>{compiler(card.body[0])}</p>
      </div>
    </article>
  );
}

function PhotoCard({ card }) {
  const photoCard = {
    photo: card.photos[0],
    caption: "Consectetur adipiscing elit quisque faucibus ex sapien vitae.",
  };

  return (
    <article data-card="photo">
      <div data-card="title">
        <span id="icon">
          <ImagesSquareIcon size={32} weight="fill" />
        </span>
        <span data-card="caption">{photoCard.caption}</span>
      </div>
      <div data-card="image">
        <img src="https://plus.unsplash.com/premium_photo-1692282102639-233ec9f24468?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </article>
  );
}

export default function Card({ card }) {
  return (
    <div className={styles.card}>
      {card.type === "text" ? (
        <PostCard card={card} />
      ) : card.type === "photo" ? (
        <PhotoCard card={card} />
      ) : null}
    </div>
  );
}
