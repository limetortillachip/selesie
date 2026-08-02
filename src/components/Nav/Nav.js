import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/about-me">About Me</Link>
        </div>
        <div className="nav-link">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="nav-link">
          <Link to="/credits">Credits</Link>
        </div>
      </nav>
    </>
  );
}
