import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Credits from "./pages/Credits/Credits.js";
import Blog from "./pages/Blog/Blog.js";
import Photography from "./pages/Photography/Photography.js";
import styles from "./App.module.sass";
import { useEffect, useState } from "react";
import { getPosts } from "./data/posts.ts";

function App() {
  const posts = getPosts();

  console.log(posts);
  return (
    <div className={styles.App}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="about" />
          <Route path="credits" element={<Credits />} />

          <Route path="photography">
            <Route index element={<Photography photos={posts.photos} />} />
            <Route path=":pid" />
          </Route>
          <Route path="blog">
            <Route index element={<Blog post={posts.text} />} />
            <Route path=":bid" />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
