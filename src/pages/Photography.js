import Photo from "../components/Photo/Photo.js";
import Photos from "../components/Photos/Photos.js";
import { getPosts } from "../data/posts.ts";

export default function Photography() {
  const photosList = getPosts("photos");
  return (
    <>
      <Photos photos={photosList} />
    </>
  );
}
