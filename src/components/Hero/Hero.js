import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <div>
        Welcome to my page with my thoughts, photography, and coding projects.
      </div>
    </article>
  );
}
