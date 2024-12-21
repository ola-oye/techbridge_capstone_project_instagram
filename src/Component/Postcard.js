import React from 'react';  
import './Postcard.css'; 
import CommentIcon from '../assets/Comment-icon.png'; // Correct path  
import LikeIcon from '../assets/Like-Icon.png';       // Correct path  
import ShareIcon from '../assets/Share-icon.png';     // Correct path  
import SendIcon from '../assets/Save-icon.png';       // Correct path  


const Postcard = () => {  
  return (  
    <div className="Postcard">  
      <div className="post-header">  
        <div className="user-info">  
          <div className="profile-icon"></div>  
          <span className="username">mediamodifier</span>  
        </div>  
      </div>  
      <img  
        src="https://s3-alpha-sig.figma.com/img/8bca/8063/a4add4ce59e55a8b4838addb57b0807c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLd0DRp3gkiVSAQlin6N-jtEVjDXqyJkfV0LtN6AARlQ-ct7nuom4m7iZ7OFQdVPUgtjm7meZpS9bquxIwBsp5U0hl4sfs0oAz-XiXdZZgU-5Eqo5vSsrZPbq6n9CnObl38a7rzZFBFdJK4xg7p7XuMt7CMvhz7Jg7lZ~XQr~MQekawGchqy2RDu1xSzatBQr15rYprNrmgCfnjo2Nm3k8azRLQoA3NcsMQw4599h~0XXSodLceVbrHkYgrdjgwbLulvh6bxJ8pR86RQDflNG-Nd4E~oWbbHWVCYU7O1QVrBL8rJdOXL38SaEXNlZs~LOK56FJ6W4j70sveA16iRDg__" 
        alt="Post content"  
        className="post-image"  
      />  
    <div className="icon-bar">
      <div className="icon">  
      <img src={LikeIcon} alt="Like Icon" /> 
      </div>  
      <div className="icon">  
      <img src={CommentIcon} alt="Comment Icon" />  
      </div>  
      <div className="icon">  
      <img src={SendIcon} alt="Send Icon" />  
      </div>  
      <div className="iconl">  
      <img src={ShareIcon} alt="Share Icon" />  
      </div>  
    </div>  
      <div className="post-details">  
        <span className="likes">Liked by you and 905,235 others</span>  
        <div className="hashtags">  
          <span>#mediamodifier</span>  
          <span>#mockup</span>  
          <span>#design</span>  
          <span>#blackfriday</span>  
          <span>#blackfridaysale</span>  
          <span>#sale</span>  
          <span>#cybermonday</span>  
        </div>  
        <div className="comments-section">  
          <span className="view-comments">View all 103 comments</span>  <br></br>
          <span className="time-ago">1 hour ago</span>  
        </div>  
      </div>  
      <div className="publish-section">  
        <input type="text" placeholder="Add a comment..." className="comment-input" />  
        <button className="publish-button">Publish</button>  
      </div>  
    </div>  
  );  
};  

export default Postcard;