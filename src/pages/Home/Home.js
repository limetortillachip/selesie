import Card from "../../components/Card/Card.js";
import config from "../../data/page-details.json";
import { getPosts } from "../../data/posts.ts";
import styles from "./Home.module.sass";

function Home() {
  const devCard = {
    type: "dev",
    title: "Hi! Welcome to myspace.",
    desc: "This page is a labor of love: fullstack web development project featuring my photography, thoughts, and other coding projects.",
    photo: "https://i.imgur.com/T2gJ0ch.png",
  };

  let projectsCard = {
    type: "projects",
    links: config.projects,
  };
  //console.log(projectsCard);

  const postCard = getPosts("text");
  let postRandomNum = Math.floor(Math.random() * postCard.length);

  const photoCard = getPosts("photos");
  let photoRamdomNum = Math.floor(Math.random() * photoCard.length);

  return (
    <article className={styles.homepage}>
      <div data-homepage="cards">
        <div data-homepage="card">
          <Card card={devCard} />
        </div>
        <div data-homepage="card">
          <Card card={projectsCard} />
          <Card card={postCard[postRandomNum]} />
        </div>
        <div data-homepage="card">
          <Card card={photoCard[photoRamdomNum]} />
        </div>
      </div>
    </article>
  );
}
export default Home;
