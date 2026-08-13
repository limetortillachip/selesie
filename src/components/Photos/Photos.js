import Photo from "../Photo/Photo";
import styles from "./Photos.module.sass";

function Photos({ photos }) {
  return (
    <article className={styles.photos}>
      {photos.map((photo, i) => {
        return <Photo photo={photo} key={i} />;
      })}
    </article>
  );
}

export default Photos;
