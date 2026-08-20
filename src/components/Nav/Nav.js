import { Link } from "react-router-dom";
import styles from "./Nav.module.sass";
import {
  CameraIcon,
  NewspaperClippingIcon,
  ShootingStarIcon,
  StarAndCrescentIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";

export default function Nav() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navLink}>
          <span className={styles.icon}>
            <StarAndCrescentIcon size={16} weight="fill" />
          </span>
          <span id={styles.link}>
            <Link to="/">Home</Link>
          </span>
        </div>
        <div className={styles.navLink}>
          <span className={styles.icon}>
            <CameraIcon size={16} weight="fill" />
          </span>
          <span id={styles.link}>
            <Link to="/photography">Photography</Link>
          </span>
        </div>
        <div className={styles.navLink}>
          <span className={styles.icon}>
            <NewspaperClippingIcon size={16} weight="fill" />
          </span>
          <span id={styles.link}>
            <Link to="/blog">Blog</Link>
          </span>
        </div>
        <div className={styles.navLink}>
          <span className={styles.icon}>
            <ShootingStarIcon size={16} weight="fill" />
          </span>
          <span id={styles.link}>
            <Link to="/credits">Credits</Link>
          </span>
        </div>
      </nav>
    </>
  );
}
