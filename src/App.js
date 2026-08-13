import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Credits from "./pages/Credits";
import Blog from "./pages/Blog";
import Photography from "./pages/Photography";
import styles from "./App.module.sass";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photography" element={<Photography />} />
          <Route path="blog" element={<Blog />} />
          <Route path="credits" element={<Credits />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
