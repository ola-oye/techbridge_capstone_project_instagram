import RightSide from "../components/rightSide";
import Postcard from "../components/Postcard";
import Stories from "../components/stories";
import Bottom from "../components/bottomNav";
import "../styles/post.css";
import data from "../assets/data.json";

const stories = data.stories;
const userDetails = data.userDetails;

function Post() {
  return (
<<<<<<< HEAD
    <main className="main">
      <div className="wrapper">
        <Stories />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
      </div>

      <RightSide />
    </main>
=======
    <div>
      <main className="main">
        <div className="wrapper">
          <Stories stories={stories} user={userDetails} />
          <Postcard />
        </div>
        <div className="hidden">
          <RightSide />
        </div>
      </main>
      <Bottom />
    </div>
>>>>>>> group2-post-page
  );
}
export default Post;
