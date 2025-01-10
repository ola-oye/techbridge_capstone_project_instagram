import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { MdOutlineGridOn } from "react-icons/md";
import { LuFileVideo } from "react-icons/lu";
import './Grid.css'

const Grid = () => {
  const [allUrls, setAllUrls] = useState([]);
  const { data: userPost, postsError, postsLoading } = useFetch(
    'https://instagram-scraper-api2.p.rapidapi.com/v1/posts',
    { username_or_id_or_url: 'mediamodifier' }
  );

  useEffect(() => {
    if (userPost && userPost.items) {
      const urls = [];

      for (let i = 0; i < userPost.items.length; i++) {
        const item = userPost.items[i];

        if (item.video_versions) {
          urls.push({ type: 'video', url: item.video_versions[0].url });
        } else if (
          item.image_versions2 &&
          item.image_versions2.candidates &&
          item.image_versions2.candidates[0].url
        ) {
          urls.push({ type: 'image', url: item.image_versions2.candidates[0].url });
        }
      }

      setAllUrls(urls); // Update the state with the combined list
    }
  }, [userPost]);

  // Hardcoded images
  const myImages = [
    '/image-1.jpg',
    '/image-2.jpg',
    '/image-3.jpg',
    '/image-4.jpg',
    '/image-5.jpg',
    '/image-6.jpg',
    '/image-7.jpg',
  ];

  if (postsLoading) return <p>Loading...</p>;
  if (postsError) return <p style={{ color: 'red' }}>{postsError}</p>;
  if (!userPost || !userPost.items) return null;

  return (
    <div className="grid-container">
      {/* Render hardcoded images */}
      {myImages.map((item, index) => (
        <div key={`image-${index}`} className="grid-item">
          <img src={item} alt={`Static Media ${index}`} className="media-image grid-image" />
        </div>
      ))}

      {/* Render fetched URLs */}
      {allUrls.map((item, index) => (
        <div key={`media-${index}`} className="grid-item">
          {item.type === 'image' ? (
            <img src={item.url} alt={`Media ${index}`} className="media-image" />
          ) : (
            <video
              src={item.url}
              autoPlay
              muted
              className="media-video grid-video"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;
