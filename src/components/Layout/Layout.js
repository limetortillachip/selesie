import { Outlet } from "react-router-dom";
import styles from "./Layout.module.sass";
import Nav from "../Nav/Nav";
import { MoonIcon } from "@phosphor-icons/react";

function Layout() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <header>
          <div data-top="navbar">
            <Nav />
          </div>
        </header>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>
            <h1>selesie</h1>
          </span>
          <span id={styles.icon}>
            <MoonIcon size={16} weight="fill" />
          </span>
        </div>
        <Outlet />
      </div>
      <div className={styles.foo}>
        <footer>
          &copy;&nbsp;
          <a
            href="https://github.com/limetortillachip/selesie"
            alt="github link"
          >
            selesie
          </a>
          &nbsp;2026.
        </footer>
      </div>
    </div>
  );
}

export default Layout;
