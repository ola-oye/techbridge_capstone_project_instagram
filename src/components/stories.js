import "../styles/stories.css";
import ProfilePic from "../assets/Profile-Pic.png";
import maniscus from "../assets/maniscus.png";
import katarina from "../assets/katarina.png";
import leoni_tu from "../assets/leoni_tu.png";
import brandon from "../assets/brandon.png";
import mik from "../assets/mik.png";
import addIcon from "../assets/add-story-icon.png";
import scrollIcon from "../assets/story-scroll-icon.png";

export default function Stories() {
    
  return (
    <div className="storyBox">
      <div>
        <div className="story1">
          <img className="storyImage1" src={ProfilePic} alt="profile" />
        </div>
        <p className="storyName">Your story</p>
      </div>

      <div>
        <div className="story">
          <img className="storyImage" src={leoni_tu} alt="profile" />
        </div>
        <p className="storyName">maniscus</p>
      </div>

      <div>
        <div className="story">
          <img className="storyImage" src={maniscus} alt="profile" />
        </div>
        <p className="storyName">leoni_tu</p>
      </div>

      <div>
        <div className="story">
          <img className="storyImage" src={katarina} alt="profile" />
        </div>
        <p className="storyName">katarina</p>
      </div>

      <div>
        <div className="story">
          <img className="storyImage" src={brandon} alt="profile" />
        </div>
        <p className="storyName">brandon</p>
      </div>

      <div>
        <div className="story">
          <img className="storyImage" src={mik} alt="profile" />
        </div>
        <p className="storyName">mik</p>
      </div>

      {/*<button className="addBtn">
        <img className="storyImage" src={addIcon} alt="profile" />
      </button>

      <button className="moreBtn">
        <img className="storyImage" src={scrollIcon} alt="profile" />
      </button>*/}
    </div>
  );
}
