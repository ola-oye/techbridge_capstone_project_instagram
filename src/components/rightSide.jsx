import React, { useState } from "react";
import "../styles/rightSide.css";
import RightImage from "../assets/Profile-Pic.png";
import profile from "../assets/Profile-Pic (1).png";
import profile1 from "../assets/Profile-Pic (2).png";
import profile2 from "../assets/Profile-Pic (3).png";
import profile3 from "../assets/Profile-Pic (4).png";
import profile4 from "../assets/Profile-Pic (5).png";

const RightSide = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`suggestionBox ${theme === "dark" ? "dark-mode" : ""}`}>

      <div className="userBlock">
        <div className="userDetails">
          <div className="profileImageDiv">
            <img
              className="userProfileImage"
              src={RightImage}
              alt="rightImage"
            />
          </div>
          <div className="userNameBlock">
            <p className="userName">mediamodifier</p>
            <p className="userfullName">Mediamodifier•Building Brands</p>
          </div>
        </div>
        <div className="switchBtn">Switch</div>
      </div>

      <div className="suggestionTitle">
        <p className="suggestedForYou">Suggestions For You</p>
        <p className="seeAll">See All</p>
      </div>

      <div className="followBlock">

        <div className="suggestedItem">
          <div className="Profile">
            <div className="imageDivRightSide">
              <img
                className="imageRightSideProfile"
                src={profile}
                alt="follow"
              />
            </div>
            <div className="NameBlock">
              <div className="Name">lucas</div>
              <div className="followedBy">Followed by mark +2 more</div>
            </div>
          </div>
          <p className="switchBtn">Follow</p>
        </div>

        <div className="suggestedItem">
          <div className="Profile">
            <div className="imageDivRightSide">
              <img
                className="imageRightSideProfile"
                src={profile1}
                alt="follow"
              />
            </div>
            <div className="NameBlock">
              <div className="Name">laura</div>
              <div className="followedBy">Followed by brandon + 6 more</div>
            </div>
          </div>
          <p className="switchBtn">Follow</p>
        </div>

        <div className="suggestedItem">
          <div className="Profile">
            <div className="imageDivRightSide">
              <img
                className="imageRightSideProfile"
                src={profile2}
                alt="follow"
              />
            </div>
            <div className="NameBlock">
              <div className="Name">rikki</div>
              <div className="followedBy">Followed by mik + 1 more</div>
            </div>
          </div>
          <p className="switchBtn">Follow</p>
        </div>

        <div className="suggestedItem">
          <div className="Profile">
            <div className="imageDivRightSide">
              <img
                className="imageRightSideProfile"
                src={profile3}
                alt="follow"
              />
            </div>
            <div className="NameBlock">
              <div className="Name">elrani</div>
              <div className="followedBy">Followed by ednamanz +1 more</div>
            </div>
          </div>
          <p className="switchBtn">Follow</p>
        </div>

        <div className="suggestedItem">
          <div className="Profile">
            <div className="imageDivRightSide">
              <img
                className="imageRightSideProfile"
                src={profile4}
                alt="follow"
              />
            </div>
            <div className="NameBlock">
              <div className="Name">tomaska</div>
              <div className="followedBy">Followed by katarinasteling +2 m...</div>
            </div>
          </div>
          <p className="switchBtn">Follow</p>
        </div>
      </div>

      <div className="sugFooter">
        <p>About press API jobs privacy Terms Locations</p>
        <p>Top Accounts
          Hashtags Language</p>
          <div className="sugCopyRight">© 2021 INSTAGRAM FROM META</div>
        </div>
    </div>
  );
};
export default RightSide;
