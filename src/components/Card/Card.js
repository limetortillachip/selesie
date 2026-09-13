import { compiler } from "markdown-to-jsx/react";
import styles from "./Card.module.sass";
import {
  CodeBlockIcon,
  ImageSquareIcon,
  NoteIcon,
  TerminalIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function DevCard({ card }) {
  return (
    <article className={styles.selx} data-card="dev">
      <div data-card="title">
        <div data-card="icon">
          <UserCircleIcon size={14} weight="fill" />
        </div>
        <span data-card="type">dev</span>
      </div>
      <article data-card="body">
        <div data-card="inner" id={styles.dev}>
          <div data-card="dev-icon">
            <div>
              <img src={card.photo} alt="dev pic is pixelated" />
            </div>
          </div>
          <div data-card="dev-intro">
            <div data-card="intro">
              <span data-card="intro-icon">
                <TerminalIcon size={14} weight="bold" />
              </span>
              <span data-card="intro-title">
                <h2>{card.title}</h2>
              </span>
            </div>
            <div data-card="desc">
              <p>{compiler(card.desc)}</p>
            </div>
          </div>
        </div>
      </article>
    </article>
  );
}

function PostCard({ card }) {
  return (
    <article className={styles.selx} data-card="post">
      <div data-card="title">
        <div data-card="icon">
          <NoteIcon size={14} weight="fill" />
        </div>
        <span data-card="type">post</span>
      </div>
      <article data-card="body">
        <div data-card="inner" id={styles.post}>
          <div data-card="post-title">
            <span>
              <h4>{card.title}</h4>
            </span>
          </div>
          <div data-card="post-body">
            <p>
              {compiler(card.body[0])}...
              <span>
                <Link to="/blog">Read More</Link>
              </span>
            </p>
          </div>
        </div>
      </article>
    </article>
  );
}

function PhotoCard({ card }) {
  return (
    <article className={styles.selx} data-card="photo">
      <div data-card="title">
        <div data-card="icon">
          <ImageSquareIcon size={14} weight="fill" />
        </div>
        <span data-card="type">photo</span>
      </div>
      <article data-card="body">
        <div data-card="inner" id={styles.photo}>
          <div data-card="img">
            <img src={card.url} />
          </div>
          <div data-card="img-caption">
            <p>
              Placerat in id cursus mi pretium tellus duis. Pretium tellus duis
              convallis tempus leo eu aenean.
            </p>
          </div>
        </div>
      </article>
    </article>
  );
}

function ProjectsCard({ card }) {
  let projectsList = card.links;

  const handleClick = (e) => {
    return console.log(e.target);
  };

  return (
    <article className={styles.selx} data-card="projects">
      <div data-card="title">
        <div data-card="icon">
          <CodeBlockIcon size={14} weight="fill" />
        </div>
        <div data-card="type">projects</div>
      </div>
      <article data-card="body">
        <div data-card="inner" id={styles.projs}>
          <div data-card="project-links">
            {card.links.map((proj, i) => {
              let projectLink = Object.entries(proj)[0];
              //console.log(projectLink);
              return (
                <div className="project" key={i}>
                  <span
                    data-card="project-title"
                    id="project-link"
                    onClick={handleClick}
                  >
                    <a href={projectLink[1]}>{projectLink[0]}</a>
                  </span>
                  <span data-card=""></span>
                </div>
              );
            })}
          </div>
        </div>
      </article>
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
  return <>{getCard(card)}</>;
}
