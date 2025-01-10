import { useState, useEffect } from "react";
import "../styles/Postcard.css";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import CommentIcon from "../assets/Comment-icon.png";
import LikeIcon from "../assets/Like-Icon.png";
import ShareIcon from "../assets/Share-icon.png";
import SendIcon from "../assets/Save-icon.png";
// import postImg from "../assets/post-img.png";
import postMenuIcon from "../assets/post-menu-icon-desktop.png";
import ProfileImg from "../assets/Profile-Pic-main.png";
import emoji from "../assets/emoji-icon.png";
// import data from "../assets/data.json";
import PostCarousel from "./PostCarousel";

// const media = data.postMedia;

const Postcard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userFollowers, setUserFollowers] = useState([]);
  const [postData, setPostData] = useState([]);
  const [initialUsername, setInitialUsername] = useState('');
  // const [finalUsername, setfinalUsername] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userAccountData = async () => {
      setIsLoading(true);

      const userInfoOptions = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/info",
        params: {
          username_or_id_or_url: "davido",
        },
        headers: {
          "x-rapidapi-key":
            "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(userInfoOptions);
        console.log(response.data.data);
        setUserInfo(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    userAccountData();
  }, []);

  useEffect(() => {
    const followersData = async () => {

      const followersOptions = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1/followers",
        params: {
          username_or_id_or_url: userInfo.username,
        },
        headers: {
          "x-rapidapi-key":
            "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(followersOptions);
        console.log(response.data.data.items);
        setUserFollowers(response.data.data.items);
        setInitialUsername(response.data.data.items[0].username)
      } catch (error) {
        console.error(error);
      }
    };

    followersData();
  }, []);

  useEffect(() => {
    const fetchInitialPostData = async () => {
      setIsLoading(true);

      const initialPostOptions = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
        params: {
          username_or_id_or_url: initialUsername,
        },
        headers: {
          "x-rapidapi-key":
            "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(initialPostOptions);
        console.log(response.data.data.items);
        console.log(response.data.data.items[0].is_video);
        console.log(response.data.data.items[0].id);
        console.log(response.data.data.items[0].comment_count);
        console.log(response.data.data.items[0].caption.text);
        console.log(response.data.data.items[0]);
        setPostData(response.data.data.items[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchInitialPostData();
  }, []);

  const fetchMoreData = async() => {
    setIsLoading(true);
    const PostOptions = {
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
      params: {
        username_or_id_or_url: userFollowers[index].username,
      },
      headers: {
        "x-rapidapi-key":
          "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    }
    try {
        const response = await axios.request(PostOptions);
        console.log(response.data.data.items)
        setPostData((prevItems) => [...prevItems, response.data.data.items[0]]);
        response.data.data.items[0] > 0 ? setHasMore(true) : setHasMore(false)
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
      setIndex((prevIndex) => prevIndex + 1);
    }

  return (
    <InfiniteScroll
      dataLength={Array.isArray(postData) ? postData.length : 0}
      next={fetchMoreData}
      hasMore={hasMore}
      className="Postcard"
    >
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
        <PostCarousel media={postData.carousel_media || []} />

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
            Liked by <strong>you</strong> and{" "}
            <strong>{postData?.like_count || 0} others</strong>
          </p>
          <p className="caption">{postData?.caption?.text || ""}</p>

          <p className="view-comments light-color">
            View all {postData?.comment_count || 0} comments
          </p>
          {/* <p className="post-time light-color">HOUR AGO</p> */}
        </div>
      </div>

      <div className="publish-section hidden">
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

      {isLoading && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Loading...</p>
        </div>
      )}
    </InfiniteScroll>
  );
};

export default Postcard;
