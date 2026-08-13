import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <div>
        <h2>
          Hi! My name is Shanon. Welcome to my page with my thoughts,
          photography, and coding projects.
        </h2>
      </div>
    </article>
  );
}
