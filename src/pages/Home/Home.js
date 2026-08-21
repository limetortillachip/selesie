import Card from "../../components/Card/Card.js";
import config from "../../data/page-details.json";
import styles from "./Home.module.sass";

function Home({ posts }) {
  const devCard = {
    type: "dev",
    title: "Hi! Welcome to myspace.",
    desc: "This page is a labor of love: fullstack front-end web development project featuring my photography, thoughts, and other coding projects.",
    photo: "https://i.imgur.com/T2gJ0ch.png",
  };

  let projectsCard = {
    type: "projects",
    links: config.projects,
  };
  //console.log(projectsCard);
  let randomPicNum = Math.floor(Math.random() * posts.photos.length);
  let randomPostNum = Math.floor(Math.random() * posts.text.length);

  return (
    <article className={styles.homepage}>
      <div data-homepage="cards">
        <div data-homepage="card">
          <Card card={devCard} />
        </div>
        <div data-homepage="card">
          <Card card={projectsCard} />
          <Card card={posts.text[randomPostNum]} />
        </div>
        <div data-homepage="card">
          <Card card={posts.photos[randomPicNum]} />
        </div>
      </div>
    </article>
  );
}
export default Home;
