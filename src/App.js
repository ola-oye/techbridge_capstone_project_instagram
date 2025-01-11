import './App.css';
import { IoIosArrowBack, IoIosMore } from 'react-icons/io';
import { BsGrid3X3, BsPlayBtn, BsPersonSquare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('grid');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: [] });

  useEffect(() => {
    const fetchUserData = async () => {
      const options = {
        method: 'GET',
        url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/info',
        params: {
          username_or_id_or_url: 'mrbeast'
        },
        headers: {
          'x-rapidapi-key': '28cebdf363msh969d84e2b2ebc0ep163c5cjsn56ddb1c20a51',
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log('API Response:', response.data);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.log('API Error:', error);
        setError('Failed to fetch user data');
        setLoading(false);
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessage = () => {
    alert('Message button clicked!');
  };

  const handleHighlightClick = (highlightName) => {
    alert(`Opening ${highlightName} highlight story!`);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleStatsClick = async (type) => {
    setShowModal(true);
    let title = '';
    let content = [];

    switch (type) {
      case 'posts':
        title = 'Posts';
        content = ['Loading posts...'];
        setModalContent({ title, content });

        try {
          const options = {
            method: 'GET',
            url: 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts',
            params: {
              username_or_id_or_url: 'mrbeast'
            },
            headers: {
              'x-rapidapi-key': '28cebdf363msh969d84e2b2ebc0ep163c5cjsn56ddb1c20a51',
              'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
          };

          const response = await axios.request(options);
          console.log('Posts Response:', response.data);
          
          if (response.data && response.data.data && Array.isArray(response.data.data)) {
            content = response.data.data.map(post => ({
              id: post.id,
              image_url: post.image_url || post.thumbnail_url,
              caption: post.caption || '',
              likes: post.like_count || 0,
              comments: post.comment_count || 0,
              is_video: post.is_video || false
            }));

            if (content.length === 0) {
              content = ['No posts available'];
            }
          } else {
            content = ['No posts data available'];
          }
        } catch (error) {
          console.error('Posts Error:', error);
          content = ['Failed to load posts'];
        }
        break;
      case 'followers':
        title = 'Followers';
        content = ['Loading followers...'];
        setModalContent({ title, content });
        
        try {
          const options = {
            method: 'GET',
            url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/followers',
            params: {
              username_or_id_or_url: 'mrbeast'
            },
            headers: {
              'x-rapidapi-key': '28cebdf363msh969d84e2b2ebc0ep163c5cjsn56ddb1c20a51',
              'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
          };

          const response = await axios.request(options);
          console.log('Followers Response:', response.data);
          
          if (response.data && response.data.data) {
            // Convert the data object to an array if it's not already
            const followersArray = Array.isArray(response.data.data) 
              ? response.data.data 
              : Object.values(response.data.data);

            content = followersArray.map(follower => ({
              username: follower.username || 'Unknown',
              profile_pic_url: follower.profile_pic_url || null,
              full_name: follower.full_name || '',
              is_verified: follower.is_verified || false
            }));

            if (content.length === 0) {
              content = ['No followers available'];
            }
          } else {
            content = ['No followers data available'];
          }
        } catch (error) {
          console.error('Followers Error:', error);
          content = ['Failed to load followers'];
        }
        break;
      case 'following':
        title = 'Following';
        content = ['Loading following...'];
        try {
          const options = {
            method: 'GET',
            url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/following',
            params: {
              username_or_id_or_url: 'mrbeast'
            },
            headers: {
              'x-rapidapi-key': '28cebdf363msh969d84e2b2ebc0ep163c5cjsn56ddb1c20a51',
              'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
          };

          const response = await axios.request(options);
          console.log('Following Response:', response.data);
          
          if (response.data && response.data.data) {
            // Convert the data object to an array if it's not already
            const followingArray = Array.isArray(response.data.data) 
              ? response.data.data 
              : Object.values(response.data.data);

            content = followingArray.map(following => ({
              username: following.username || 'Unknown',
              profile_pic_url: following.profile_pic_url || null,
              full_name: following.full_name || '',
              is_verified: following.is_verified || false
            }));

            if (content.length === 0) {
              content = ['No following available'];
            }
          } else {
            content = ['No following data available'];
          }
        } catch (error) {
          console.error('Following Error:', error);
          content = ['Failed to load following'];
        }
        break;
      default:
        break;
    }
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ title: '', content: [] });
  };

  return (
    <div className="app">
      <header className="header">
        <IoIosArrowBack className="back-icon" />
        <span className="username">
          {loading ? 'Loading...' : error ? 'Error' : userData?.data?.username || 'Username'}
        </span>
        <IoIosMore className="more-icon" />
      </header>

      <main className="profile">
        <div className="profile-stats">
          <div className="logo">
            <div className="logo-inner">
              {loading ? '...' : error ? 'X' : (userData?.data?.username?.[0] || 'm')}
            </div>
          </div>
          
          <div className="stats">
            <div className="stat-item clickable" onClick={() => handleStatsClick('posts')}>
              <span className="stat-number">
                {loading ? '...' : error ? '0' : userData?.data?.media_count || '1,132'}
              </span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat-item clickable" onClick={() => handleStatsClick('followers')}>
              <span className="stat-number">
                {loading ? '...' : error ? '0' : userData?.data?.follower_count || '60K'}
              </span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item clickable" onClick={() => handleStatsClick('following')}>
              <span className="stat-number">
                {loading ? '...' : error ? '0' : userData?.data?.following_count || '4'}
              </span>
              <span className="stat-label">Following</span>
            </div>
          </div>
        </div>

        <div className="profile-info">
          <p className="profile-type">
            {loading ? 'Loading...' : error ? 'Error' : userData?.data?.account_category || 'Product/service'}
          </p>
          <p className="profile-description">
            {loading ? 'Loading...' : error ? 'Error' : userData?.data?.biography || 'We provide essential tools'}
          </p>
          <a href={userData?.data?.external_url || 'https://mediamodifier.com'} className="profile-link">
            {loading ? 'Loading...' : error ? 'Error' : userData?.data?.external_url || 'mediamodifier.com'}
          </a>
        </div>

        <div className="action-buttons">
          <button 
            className={`follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={handleFollow}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
          <button className="message-btn" onClick={handleMessage}>
            Message
          </button>
          <button className="more-btn">
            <BsPersonSquare />
          </button>
        </div>

        <div className="highlights">
          {[
            { name: 'Templates', emoji: '❤️' },
            { name: 'Reviews', emoji: '💙' },
            { name: 'Mentions', emoji: '❤️' },
            { name: 'Tips', emoji: '💙' },
            { name: 'Blog', emoji: '❤️' }
          ].map((highlight, index) => (
            <div 
              key={index} 
              className="highlight-item"
              onClick={() => handleHighlightClick(highlight.name)}
            >
              <div className="highlight-circle gradient-bg">
                <span>{highlight.emoji}</span>
              </div>
              <span>{highlight.name}</span>
            </div>
          ))}
        </div>

        <nav className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'grid' ? 'active' : ''}`}
            onClick={() => handleTabClick('grid')}
          >
            <BsGrid3X3 />
          </button>
          <button 
            className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => handleTabClick('video')}
          >
            <BsPlayBtn />
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tagged' ? 'active' : ''}`}
            onClick={() => handleTabClick('tagged')}
          >
            <BsPersonSquare />
          </button>
        </nav>
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={`modal-content ${modalContent.title === 'Posts' ? 'posts-modal' : ''}`} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{modalContent.title}</h2>
              <button className="close-button" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              {Array.isArray(modalContent.content) ? (
                modalContent.title === 'Posts' ? (
                  // Posts Grid Layout
                  modalContent.content[0] === 'Loading posts...' || 
                  modalContent.content[0] === 'Failed to load posts' || 
                  modalContent.content[0] === 'No posts available' ? (
                    <div className="modal-message">{modalContent.content[0]}</div>
                  ) : (
                    <div className="posts-grid">
                      {modalContent.content.map((post, index) => (
                        <div key={index} className="post-item">
                          <div className="post-image-container">
                            <img 
                              src={post.image_url} 
                              alt={`Post ${index + 1}`}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Ob0ltYWdlPC90ZXh0Pjwvc3ZnPg==';
                              }}
                            />
                            {post.is_video && <div className="video-indicator">▶</div>}
                            <div className="post-overlay">
                              <div className="post-stats">
                                <span>❤ {post.likes}</span>
                                <span>💬 {post.comments}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  // Followers/Following List Layout
                  modalContent.content[0] === 'Loading followers...' || 
                  modalContent.content[0] === 'Loading following...' ||
                  modalContent.content[0] === 'Failed to load followers' ||
                  modalContent.content[0] === 'Failed to load following' ||
                  modalContent.content[0] === 'No followers available' ||
                  modalContent.content[0] === 'No following available' ? (
                    <div className="modal-message">{modalContent.content[0]}</div>
                  ) : (
                    <div className="users-list">
                      {modalContent.content.map((item, index) => (
                        <div key={index} className="modal-item">
                          {typeof item === 'object' ? (
                            <div className="user-item">
                              <div className="profile-image">
                                {item.profile_pic_url ? (
                                  <img 
                                    src={item.profile_pic_url} 
                                    alt={`${item.username}'s profile`}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Ob0ltYWdlPC90ZXh0Pjwvc3ZnPg==';
                                    }}
                                  />
                                ) : (
                                  <div className="profile-placeholder">
                                    {item.username ? item.username[0].toUpperCase() : '?'}
                                  </div>
                                )}
                              </div>
                              <div className="user-info">
                                <div className="username-container">
                                  <span className="username">{item.username}</span>
                                  {item.is_verified && <span className="verified-badge">✓</span>}
                                </div>
                                {item.full_name && <span className="full-name">{item.full_name}</span>}
                              </div>
                            </div>
                          ) : (
                            <span>{item}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                )
              ) : (
                <div className="modal-message">{modalContent.content}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;