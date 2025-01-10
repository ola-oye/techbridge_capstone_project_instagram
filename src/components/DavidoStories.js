import React, { useState, useEffect } from 'react';
import Stories from 'react-insta-stories';

const DavidoStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://instagram-scraper-api2.p.rapidapi.com/v1/stories?username_or_id_or_url=davido', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'd4d67126d3msh09452141eebf3b2p1f8459jsn40f2001532ba',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const fetchedStories = data.data.items.map((item) => ({
          url: item.image_versions2.candidates[0].url,
          type: 'image',
          header: {
            heading: 'Davido',
            subheading: new Date(item.taken_at * 1000).toLocaleString(),
            profileImage: data.data.user.profile_pic_url,
          },
        }));

        setStories(fetchedStories);
      } catch (err) {
        setError('Failed to load stories');
        console.error('Error fetching stories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Stories stories={stories} />
    </div>
  );
};

export default DavidoStories;






