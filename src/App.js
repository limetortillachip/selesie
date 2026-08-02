import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Layout from "./components/Layout/Layout";
import Credits from "./pages/Credits";
import Blog from "./pages/Blog";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="blog" element={<Blog />} />
          <Route path="credits" element={<Credits />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
