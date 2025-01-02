import RightSide from "../components/rightSide";
import Postcard from "../components/Postcard";
import Stories from "../components/stories";
import "../styles/post.css";

function Post() {
  return (
    <main className="main">
      <div className="wrapper">
        <Stories />
        <Postcard />
      </div>

      <RightSide />
    </main>
  );
}
export default Post;
