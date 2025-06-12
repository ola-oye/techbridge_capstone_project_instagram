import React, { useEffect, useRef, useState } from "react";
import "../styles/PostCarousel.css";

const PostCarousel = ({ media }) => {
  // console.log("PostCarousel media:", media);
  const [slide, setSlide] = useState(0);
  // const videoRef = useRef(null);

  const nextSlide = () => {
    setSlide((prev) => (prev === media.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  // Handle video play/pause logic based on the current slide
  // useEffect(() => {
  //   const video = videoRef.current;

  //   // Play the video if the current slide is a video
  //   if (media.is_video && video) {
  //     video.play();
  //   }

  //   // Cleanup to pause the video when the slide changes
  //   return () => {
  //     if (video) {
  //       video.pause();
  //     }
  //   };
  // }, [slide, media]);

  // // Toggle video play/pause on click
  // const togglePlayPause = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     if (video.paused) {
  //       video.play();
  //     } else {
  //       video.pause();
  //     }
  //   }
  // };

  return (
    <div className="media-container">
      {/* Conditional rendering for Previous Button */}
      {slide > 0 && (
        <button className="arrow prev-button" onClick={prevSlide}>
          &#8592;
        </button>
      )}

      {/* Render Media */}
      {media.map((item, index) =>
        item.is_video ? (
          
          <iframe
            key={item.id}
            className={slide === index ? "media" : "media-hidden"}
            src={item.video_url}
            // ref={slide === index ? videoRef : null}
            // onClick={togglePlayPause}
          >
            <source  />
          </iframe>
        ) : (
          <img
            key={item.id}
            className={slide === index ? "media" : "media media-hidden"}
            src={item.thumbnail_url}
            alt="Post media"
          />
        )
      )}

      {/* Conditional rendering for Next Button */}
      {slide < media.length - 1 && (
        <button className="arrow next-button" onClick={nextSlide}>
          &#8594;
        </button>
      )}

      {/* Indicators */}
      <span className="indicators">
        {media.map((_, index) => (
          <button
            key={index}
            className={
              slide === index ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default PostCarousel;