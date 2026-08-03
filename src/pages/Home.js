import Hero from "../components/Hero/Hero";
import Post from "../components/Post/Post";
import Posts from "../components/Posts/Posts.tsx";

function Home() {
  const first = {
    title: "c'est la vie",
    body: "Sometimes, shit just goes wrong.",
  };
  return (
    <>
      <Hero />
      <Posts />
    </>
  );
}
export default Home;
