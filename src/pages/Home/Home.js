import Card from "../../components/Card/Card.js";
import config from "../../data/page-details.json";
import styles from "./Home.module.sass";

function Home({ posts }) {
  const devCard = {
    type: "dev",
    title: "Hi! Welcome to my space.",
    desc: "This page is a labor of love: fullstack front-end web development project featuring my photography, thoughts, and other coding projects.",
    photo: "https://i.imgur.com/6aKAg2B.png",
  };

  let projectsCard = {
    type: "projects",
    links: config.projects,
  };
  //console.log(projectsCard);
  let randomPicNum = Math.floor(Math.random() * posts.photos.length);
  let randomPostNum = Math.floor(Math.random() * posts.text.length);

  return (
    <article className={styles.homepage} data-page="home">
      <Card card={devCard} />

      <Card card={projectsCard} />

      <Card card={posts.text[randomPostNum]} />

      <Card card={posts.photos[randomPicNum]} />
    </article>
  );
}
export default Home;
