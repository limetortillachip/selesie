import { compiler } from "markdown-to-jsx/react";
import config from "../../data/page-details.json";
import styles from "./Credits.module.sass";

export default function Credits() {
  return (
    <article className={styles.credits}>
      <h2>Credits</h2>
      <div>
        {config.credits.map((item) => {
          const jsxText = compiler(item);
          return jsxText;
        })}
      </div>
    </article>
  );
}
