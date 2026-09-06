import { Outlet } from "react-router-dom";
import styles from "./Layout.module.sass";
import Nav from "../Nav/Nav";
import { CopyrightIcon, MoonIcon } from "@phosphor-icons/react";

function Layout() {
  return (
    <div className={styles.page}>
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

      <main className={styles.content}>
        <Outlet />
      </main>

      <div className={styles.foo}>
        <footer>
          <div className={styles.fooIcon}>
            <CopyrightIcon size={10} weight="bold" />
          </div>
          <div>
            <a
              href="https://github.com/limetortillachip/selesie"
              alt="github link"
            >
              selesie
            </a>
            &nbsp;2026.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
