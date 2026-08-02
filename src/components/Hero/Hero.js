import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <p>
        Hi! This page contains thoughts, my photography, and coding projects.
      </p>
    </article>
  );
}
