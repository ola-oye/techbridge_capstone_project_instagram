import "../styles/stories.css";
import React, { useRef, useState, useEffect } from "react";

const Stories = ({ stories, user }) => {
  const carouselRef = useRef(null); // Reference to the stories container
  const [showLeftButton, setShowLeftButton] = useState(false); // Visibility for left button
  const [showRightButton, setShowRightButton] = useState(true); // Visibility for right button

  // Handle scrolling to update button visibility
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftButton(scrollLeft > 0); // Show left button if not at start
      setShowRightButton(scrollLeft + clientWidth < scrollWidth); // Show right button if not at end
    }
  };

  // Scroll Left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  // Attach the scroll event listener and initialize button states
  useEffect(() => {
    const carouselElement = carouselRef.current;
    handleScroll(); // Initialize button visibility
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [stories]);

  return (
    <div className="story-carousel">
      {/* Left Button */}
      {showLeftButton && (
        <button className="scroll-button left" onClick={scrollLeft}>
          {'\u25C0'}
        </button>
      )}
      {/* Stories Container */}
      <div className="stories" ref={carouselRef}>
        <div key={user.username} className="story Positioning">
          <div className="profile">
            <img
              src={user.profilePicture}
              alt={`${user.username}'s profile`}
              className={user.hasStory ? "has-story" : ""}
            />

            <div>
              <img src="/images/Ellipse 3.png" alt="" className="ellipse" />
              <img src="/images/Vector.png" alt="" className="plussign" />
            </div>
          </div>
          <p className="username">{user.username}</p>
        </div>

        {stories.map((story) => (
          <div key={story.id} className="story">
            <div className="profile">
              <img
                src={story.profilePicture}
                alt={`${story.username}'s profile`}
                className={story.hasStory ? "has-story" : ""}
              />
            </div>
            <p className="username">{story.username}</p>
          </div>
        ))}
      </div>
      {/* Right Button */}
      {showRightButton && (
        <button className="scroll-button right" onClick={scrollRight}>
          {'\u25B6'}
        </button>
      )}
    </div>
  );
};

export default Stories;
