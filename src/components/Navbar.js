import "../styles/Navbar.css"
import { Link } from "react-router-dom";
import homeImage from "../assets/image/Home.png";
import messageImage from "../assets/image/Messenger.png";
import postImage from "../assets/image/NewPosts.png";
import findPeople from "../assets/image/FindPeople.png";
import profileImage from "../assets/image/profile.png";
import likeImage from "../assets/image/Menu-Button-Item.png";

function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">
            <img className="homeLogo" src={homeImage} alt="homeImage" />
          </Link>
        </li>
        <li>
          <img className="messageLogo" src={messageImage} alt="messageImage" />
        </li>
        <li>
          <img className="postLogo" src={postImage} alt="newpostImage" />
        </li>
        <li>
          <img className="findLogo" src={findPeople} alt="findPeople" />
        </li>
        <li>
          <img className="likeLogo" src={likeImage} alt="likeImage" />
        </li>
        <li>
          <Link to="/profile">
            <img
              className="profileLogo"
              src={profileImage}
              alt="profileImage"
            />
          </Link>
        </li>
        <li>
          <img className="mobilemessageLogo" src={messageImage} alt="messageImage" />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;