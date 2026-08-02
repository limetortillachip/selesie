import { Outlet } from "react-router-dom";
import styles from "./Layout.module.sass";
import Nav from "../Nav/Nav";

function Layout() {
  return (
    <article className={styles.page}>
      <div className={styles.top}>
        <div className={styles.navbar}>
          <Nav />
        </div>
        <header>
          <div className={styles.title}>
            <h1>selesie</h1>
          </div>
        </header>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.foo}>
        <footer>limetortillachip &copy; 2026.</footer>
      </div>
    </article>
  );
}

export default Layout;
