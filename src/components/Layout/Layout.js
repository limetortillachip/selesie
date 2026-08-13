import { Outlet } from "react-router-dom";
import styles from "./Layout.module.sass";
import Nav from "../Nav/Nav";
import { MoonIcon } from "@phosphor-icons/react";

function Layout() {
  return (
    <article className={styles.page}>
      <div className={styles.top}>
        <header>
          <div className={styles.title}>
            <span>
              <h1>selesie</h1>
            </span>
            <span id={styles.icon}>
              <MoonIcon size={16} weight="fill" />
            </span>
          </div>
          <div data-top="navbar">
            <Nav />
          </div>
        </header>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.foo}>
        <footer>selesie &copy; 2026.</footer>
      </div>
    </article>
  );
}

export default Layout;
