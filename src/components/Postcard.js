import React from "react";
import "../styles/Postcard.css";
import CommentIcon from "../assets/Comment-icon.png";
import LikeIcon from "../assets/Like-Icon.png";
import ShareIcon from "../assets/Share-icon.png";
import SendIcon from "../assets/Save-icon.png";
import postImg from "../assets/post-img.png";
import postMenuIcon from "../assets/post-menu-icon-desktop.png";
import ProfileImg from "../assets/Profile-Pic-main.png";
import emoji from "../assets/emoji-icon.png";

const Postcard = () => {
  return (
    <div className="Postcard">
      <div className="post-header">
        <div className="user-info">
          <div className="profile-icon">
            <img src={ProfileImg} alt="Profile pic" className="profileImg" />
          </div>

          <p className="username">mediamodifier</p>
        </div>
        <div>
          <img src={postMenuIcon} alt="Menu" className="postMenuIcon" />
        </div>
      </div>

      <div className="post-content">
        <img src={postImg} alt="Post content" className="post-image" />

        <div className="post-relation">
          <div className="post-icon-bar">
            <div className="bargroup">
              <div className="icon">
                <img src={LikeIcon} alt="Like Icon" />
              </div>
              <div className="icon">
                <img src={CommentIcon} alt="Comment Icon" />
              </div>
              <div className="icon">
                <img src={ShareIcon} alt="Share Icon" />
              </div>
            </div>
            <div className="icon">
              <img src={SendIcon} alt="Send Icon" />
            </div>
          </div>

          <p className="likes">
            Liked by <strong>you</strong> and <strong>905,235 others</strong>
          </p>
          <p className="caption">
            #mediamodifier #mockup #design #blackfriday #blackfridaysale #sale
            #cybermonday<span className="light-color">...more</span>
          </p>

          <p className="view-comments light-color">View all 103 comments</p>
          <p className="post-time light-color">HOUR AGO</p>
        </div>
      </div>

      <div className="publish-section">
        <div>
          <img src={emoji} alt="Emojis" className="emojiIcon" />
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button className="publish-button">Publish</button>
      </div>
    </div>

  );
};

export default Postcard;
