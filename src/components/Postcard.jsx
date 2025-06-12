import React, { useState, useEffect } from "react";
import "../styles/Postcard.css";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import CommentIcon from "../assets/Comment-icon.png";
import LikeIcon from "../assets/Like-Icon.png";
import ShareIcon from "../assets/Share-icon.png";
import SendIcon from "../assets/Save-icon.png";
import postMenuIcon from "../assets/post-menu-icon-desktop.png";
import ProfileImg from "../assets/Profile-Pic-main.png";
import emoji from "../assets/emoji-icon.png";
import PostCarousel from "./PostCarousel";
import data from "../assets/data.json";

const media = data.postMedia;

const Postcard = () => {
  // State management
  // const [userInfo, setUserInfo] = useState({});
  const [followers, setFollowers] = useState([]); // Store followers' data
  const [postData, setPostData] = useState([]); // Store post data from followers
  const [hasMore, setHasMore] = useState(true); // For infinite scrolling
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [currentIndex, setCurrentIndex] = useState(1); // Current follower index

  // Fetch user data and followers
  useEffect(() => {
    const fetchUserAndFollowers = async () => {
      try {
        setIsLoading(true);

        // Step 1: Fetch user data
        const userResponse = await axios.get(
          "https://instagram-scraper-api2.p.rapidapi.com/v1/info",
          {
            params: { username_or_id_or_url: "davido" },
            headers: {
              "x-rapidapi-key":
                "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
              "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
            },
          }
        );

        const username = userResponse.data.data.username;

        // Step 2: Use the username to fetch followers
        const followersResponse = await axios.get(
          "https://instagram-scraper-api2.p.rapidapi.com/v1/following",
          {
            params: { username_or_id_or_url: username },
            headers: {
              "x-rapidapi-key":
                "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
              "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
            },
          }
        );

        const fetchedFollowers = followersResponse.data.data.items || [];
        setFollowers(fetchedFollowers);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user or followers data:", error);
        setIsLoading(false);
      }
    };

    fetchUserAndFollowers();
  }, []);

  // Fetch posts for a given follower username
  const fetchPostsForFollower = async (followerUsername) => {
    try {
      const postResponse = await axios.get(
        "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
        {
          params: { username_or_id_or_url: followerUsername },
          headers: {
            "x-rapidapi-key":
              "a11a6fd73fmsh89ffd3b00c3f925p1cdc1djsn45e97cf5fb24",
            "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
          },
        }
      );

      const posts = postResponse.data.data.items || [];
      if (posts.length > 0) {
        // Only select the first post for rendering
        console.log(posts[0]);
        return posts[0];
      }
    } catch (error) {
      console.error("Error fetching post data for follower:", error);
    }
    return null;
  };

  // Infinite scrolling: Load more posts
  const fetchMoreData = async () => {
    if (currentIndex >= followers.length) {
      setHasMore(false); // Stop fetching when we run out of followers
      return;
    }

    const follower = followers[currentIndex];
    if (follower) {
      const newPost = await fetchPostsForFollower(follower.username);
      if (newPost) {
        setPostData((prevPosts) => [...prevPosts, newPost]); // Add new post
      }
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Rendering component
  return (
    <InfiniteScroll
      dataLength={postData.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading more posts...</p>}
    >
      {console.log("Post data:", postData)}
      {postData.length > 0 ? (
        <div>
          {isLoading && <p>Loading...</p>}
        
          {postData.map((post, index) => (
            <div key={post.id || index} className="Postcard">
              <div className="post-header">
                <div className="user-info">
                  <div className="profile-icon">
                    <img
                      src={ProfileImg}
                      alt="Profile pic"
                      className="profileImg"
                    />
                  </div>

                  <p className="username">mediamodifier</p>
                </div>
                <div>
                  <img src={postMenuIcon} alt="Menu" className="postMenuIcon" />
                </div>
              </div>

              <div className="post-content">
                <PostCarousel media={post.carousel_media || []} />

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
                    <strong>{post?.like_count || 0} others</strong>
                  </p>
                  <p className="caption">{post?.caption?.text || ""}</p>

                  <p className="view-comments light-color">
                    View all {post?.comment_count || 0} comments
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
            </div>
          ))}
        </div>
      ) : (
        <div className="Postcard">
          <div className="post-header">
            <div className="user-info">
              <div className="profile-icon">
                <img
                  src={ProfileImg}
                  alt="Profile pic"
                  className="profileImg"
                />
              </div>

              <p className="username">mediamodifier</p>
            </div>
            <div>
              <img src={postMenuIcon} alt="Menu" className="postMenuIcon" />
            </div>
          </div>
          <div className="post-content">
            <PostCarousel media={media} />
            {/* <img src={postImg} alt="Post content" className="post-image" /> */}

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
                <strong>905,235 others</strong>
              </p>
              <p className="caption">
                #mediamodifier #mockup #design #blackfriday #blackfridaysale
                #sale #cybermonday<span className="light-color">...more</span>
              </p>

              <p className="view-comments light-color">View all 103 comments</p>
              <p className="post-time light-color">HOUR AGO</p>
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
        </div>
      )}
    </InfiniteScroll>
  );
};

export default Postcard;
