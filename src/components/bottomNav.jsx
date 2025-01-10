import "../styles/bottomNav.css"
import { Link } from "react-router-dom";
import homeImage from "../assets/image/Home.png";
import likeImage from "../assets/image/Menu-Button-Item.png";
import searchimage from "../assets/search.png";
import reelsimage from "../assets/Video.png";
import packageimage from "../assets/package.png";

function BottomNav() {
  return (
    <nav className="bottomnav">
      <ul>
        <li>
          <Link to="/">
            <img className="HomeLogo" src={homeImage} alt="homeImage" />
          </Link>
        </li>
        <li>
          <img className="searchLogo" src={searchimage} alt="searchImage" />
        </li>
        <li>
          <img className="reelsLogo" src={reelsimage} alt="reelsImage" />
        </li>
        <li>
          <img className="packageLogo" src={packageimage} alt="pakageimage" />
        </li>
        <li>
          <img className="likeLogo" src={likeImage} alt="likeImage" />
        </li>
      </ul>
    </nav>
  );
}
export default BottomNav;