import Card from "../../components/Card/Card.js";
import Hero from "../../components/Hero/Hero.js";
import config from "../../data/page-details.json";
import { getPosts } from "../../data/posts.ts";
import styles from "./Home.module.sass";

function Home() {
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
      <Hero />
      <article className={styles.cards}>
        <div className={styles.items}>
          <div className={styles.left}>
            <Card card={postCard[postRandomNum]} />
            <Card card={projectsCard} />
          </div>
          <div className={styles.right}>
            <Card card={photoCard[photoRamdomNum]} />
          </div>
        </div>
      </article>
    </article>
  );
}
export default Home;
