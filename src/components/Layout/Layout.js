import { Outlet } from "react-router-dom";
import styles from "./Layout.module.sass";
import Nav from "../Nav/Nav";

function Layout() {
  return (
    <article className={styles.page}>
      <header>
        <div class={styles.title}>
          <h1>selesie</h1>
        </div>
        <div class={styles.navbar}>
          <Nav />
        </div>
      </header>
      <div class={styles.content}>
        <Outlet />
      </div>
      <footer>limetortillachip &copy; 2026.</footer>
    </article>
  );
}

export default Layout;
