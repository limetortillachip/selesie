import styles from "./Photo.module.sass";

function Photo({ photo }) {
  return (
    <div className={styles.photo}>
      <img src={photo.url} />
    </div>
  );
}

export default Photo;
