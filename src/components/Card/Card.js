import { compiler } from "markdown-to-jsx/react";
import Post from "../Post/Post";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";
import {
  CodeBlockIcon,
  ImageSquareIcon,
  NoteIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";

function DevCard({ card }) {
  return (
    <article data-selx="card">
      <div data-card="inner">
        <div data-card="card-title">
          <div data-card="icon">
            <UserCircleIcon size={16} weight="bold" />
          </div>
          <span data-card="type">dev</span>
        </div>
        <div data-card="dev-card">
          <div data-card="dev-icon">
            <img src={card.photo} atl="dev pic is pixelated" />
          </div>
          <div data-card="dev-intro">
            <div>
              <span data-card="dev-title">
                <h4>{card.title}</h4>
              </span>
              <span data-card="dev-desc">
                <p>{compiler(card.desc)}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostCard({ card }) {
  return (
    <article data-selx="card">
      <div data-card="inner">
        <div data-card="card-title">
          <div data-card="icon">
            <NoteIcon size={16} weight="bold" />
          </div>
          <span data-card="type">post</span>
        </div>
        <div data-card="post-title">
          <span>
            <h4>{card.title}</h4>
          </span>
        </div>
        <div data-card="post-body">
          <p>
            {compiler(card.body[0])}...
            <span>
              <a href="/blog">Read More</a>
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

function PhotoCard({ card }) {
  return (
    <article data-selx="card">
      <div data-card="inner">
        <div data-card="card-title">
          <div data-card="icon">
            <ImageSquareIcon size={16} weight="bold" />
          </div>
          <span data-card="type">photo</span>
        </div>
        <div data-card="photo">
          <img src={card.url} />
        </div>
        <div data-card="photo-caption">
          <p>
            Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
            convallis tempus leo eu aenean.
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectsCard({ card }) {
  let projectsList = card.links;

  const handleClick = (e) => {
    return console.log(e.target);
  };

  return (
    <article data-selx="card">
      <div data-card="inner">
        <div data-card="card-title">
          <div data-card="icon">
            <CodeBlockIcon size={16} weight="bold" />
          </div>
          <span data-card="type">projects</span>
        </div>
        <div data-card="project-links">
          {card.links.map((proj, i) => {
            let projectLink = Object.entries(proj)[0];
            console.log(projectLink);
            return (
              <div className="project" key={i}>
                <span
                  data-card="project-title"
                  id="project-link"
                  onClick={handleClick}
                >
                  <a href={projectLink[1]} target="_blank">
                    {projectLink[0]}
                  </a>
                </span>
                <span data-card=""></span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

const getCard = (card) => {
  switch (card.type) {
    case "text":
      return <PostCard card={card} />;

    case "photo":
      return <PhotoCard card={card} />;

    case "projects":
      return <ProjectsCard card={card} />;

    case "dev":
      return <DevCard card={card} />;
  }
};

export default function Card({ card }) {
  return <div className={styles.card}>{getCard(card)}</div>;
}
