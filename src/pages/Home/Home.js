import Card from "../../components/Card/Card.js";
import config from "../../data/page-details.json";
import { getPosts } from "../../data/posts.ts";
import styles from "./Home.module.sass";

function Home() {
  const userCard = {
    type: "user",
    title: "Hi! My name is Shanon.",
    desc: "*Soy peruana*, living in Rockville, Maryland. This page is a labor of love: fullstack web development project featuring my photography, thoughts, and other coding projects.",
    photo: "https://i.imgur.com/c5yJEPa.png",
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
      <div className={styles.items} data-homepage="cards">
        <Card card={userCard} />
        <Card card={postCard[postRandomNum]} />
        <Card card={photoCard[photoRamdomNum]} />
        <Card card={projectsCard} />
      </div>
    </article>
  );
}
export default Home;
