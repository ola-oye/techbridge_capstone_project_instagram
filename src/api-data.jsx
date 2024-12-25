import React from 'react';
import useFetch from './useFetch';

const UserInfo = () => {
  const { data: userInfo, error, loading } = useFetch(
    'https://instagram-scraper-api2.p.rapidapi.com/v1/info',
    { username_or_id_or_url: 'instagram' }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  if (!userInfo) return null; // Safeguard for null or undefined userInfo

  // Destructure properties safely
  const {
    username,
    biography: bio,
    media_count: post,
    follower_count: followers,
    following_count: following,
    bio_links: [{ url: companyLink } = {}] = [],
    full_name: companyFullName,
    profile_pic_url_hd: companyImage,
    category,
  } = userInfo;

  console.log(
    `Username: ${username}\nBio: ${bio}\nPost: ${post}\nFollowers: ${followers}\nFollowing: ${following}\nCompany Link: ${companyLink}\nCompany Full Name: ${companyFullName}\nCompany Image: ${companyImage}\nCategory: ${category}`
  );

  return (
    <div>
      <h3>User Info</h3>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Posts:</strong> {post}</p>
      <p><strong>Followers:</strong> {followers}</p>
      <p><strong>Following:</strong> {following}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Company Link:</strong> <a href={companyLink} target="_blank" rel="noopener noreferrer">{companyLink}</a></p>
      <p><strong>Full Name:</strong> {companyFullName}</p>
      <img src={companyImage} alt={`${username}'s Profile`} width="200" />
    </div>
  );
};

export default UserInfo;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const HighlightInfo = () => {
//   const [info, setInfo] = useState(null);
//   const [reels, setReels] = useState(null);
//   let [allReels, setAllReels] = useState([])
//   const [post, setPost] = useState(null);
//   const [error, setError] = useState(null);
//   let [allItems, setAllItems] = useState([]);
//   let [allImages, setAllImages] = useState([]);
//   let [allVideos, setAllVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchHighlightInfo = async () => {
//     const createOptions = (url, params) => ({
//       method: 'GET',
//       url,
//       params,
//       headers: {
//         'x-rapidapi-key': '3247b29933msh62cce8cf695011bp102943jsn8811792bf8e4', // Use environment variable
//         'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
//       },
//     });

//     try {
//       // Fetch user info
//       const infoResponse = await axios.request(
//         createOptions('https://instagram-scraper-api2.p.rapidapi.com/v1/info', {
//           username_or_id_or_url: 'mediamodifier',
//         })
//       );
//       

//       // Fetch user posts
//       const postResponse = await axios.request(
//         createOptions('https://instagram-scraper-api2.p.rapidapi.com/v1/posts', {
//           username_or_id_or_url: 'mediamodifier',
//         })
//       );
//       setPost(postResponse.data);
//       let items = postResponse.data.data.items
//       items.forEach(element => {
//         allItems.push(element)
//       });

//        for(let i = 0; i < items.length; i++){
//         if(items[i].video_url !== undefined ){
//           allVideos.push(items[i].video_versions[0].url)
//         }else{
//           allImages.push(items[i].image_versions.items[0].url)
//         }
        
//        } 

//       allVideos.forEach((vid) => {
//         console.log(vid);
//         console.log("this a video")
//       })

//       allImages.forEach((img) => {
//         console.log(img);
//         console.log("this an image")
//       })
//       console.log( allVideos.length,  allImages.length, allItems.length);
      


//       const reelsResponse = await axios.request(
//         createOptions('https://instagram-scraper-api2.p.rapidapi.com/v1/reels', {
//           username_or_id_or_url: 'mediamodifier',
//         })
//       );

//       setReels(reelsResponse.data.data.items[0]);
//       items = reelsResponse.data.data.items
//       // console.log(items)
//       for(let i = 0; i < items.length; i++){
        
//         allReels.push(items[i].video_versions[0].url)
        
//       }
     
//       allReels.forEach((reel) => {
//         console.log(reel)
//         console.log("This is a reel")
//       })
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch Instagram data.');
//       console.error('API Error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHighlightInfo();
//   },[]);

//   return (
//     <div>
//       {loading && <p>Loading data...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
// {/* 
//       Render User Info */}
//       {/* {info && (
//         <div>
//           <h3>User Info</h3>
//           <pre>{JSON.stringify(info, null, 2)}</pre>
//         </div>
//       )} */}

//       {/* Render User Posts */}
//       {/* {post && (
//         <div>
//           <h3>User Posts</h3>
//           <pre>{JSON.stringify(post, null, 2)}</pre>
//         </div>
//       )} */}

//       {reels && (
//         <div>
//           <h3>User Reels</h3>
//           <pre>{JSON.stringify(reels, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HighlightInfo;
