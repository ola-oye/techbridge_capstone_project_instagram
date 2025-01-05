import RightSide from "../components/rightSide";
import Postcard from "../components/Postcard";
import Stories from "../components/stories";
import Bottom from "../components/bottomNav";
import "../styles/post.css";

function Post() {
  return (
    <div>
    <main className="main">
      <div className="wrapper">
        <div className="hidden">
        <Stories />
        </div>
        <Postcard />
      </div>
      <div className="hidden">
      <RightSide />
      </div>
    </main>
    <Bottom/>
    </div>
  );
}
export default Post;
