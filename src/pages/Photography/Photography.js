import Photo from "../../components/Photo/Photo.js";
import styles from "./Photography.module.sass";

export default function Photography({ photos }) {
  return (
    <article className={styles.photos}>
      {photos.map((photo, i) => {
        return <Photo photo={photo} key={i} />;
      })}
    </article>
  );
}
