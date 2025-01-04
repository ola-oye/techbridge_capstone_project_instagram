import { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import { fetchInstagramFollowers, fetchInstagramFollowing, fetchInstagramPosts } from '../../utils/api';
import './Stats.css';

export const Stats = ({ posts = 0, followers = 0, following = 0, username }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    const loadData = async () => {
      if (!username || !activeModal) return;
      
      setLoading(true);
      setError(null);
      
      try {
        switch (activeModal) {
          case 'Followers':
            const followersData = await fetchInstagramFollowers(username);
            setFollowersList(followersData.followers || []);
            break;
          case 'Following':
            const followingData = await fetchInstagramFollowing(username);
            setFollowingList(followingData.following || []);
            break;
          case 'Posts':
            const postsData = await fetchInstagramPosts(username);
            setPostsList(postsData.posts || []);
            break;
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [activeModal, username]);

  const stats = [
    { label: 'Posts', number: formatNumber(posts) },
    { label: 'Followers', number: formatNumber(followers) },
    { label: 'Following', number: formatNumber(following) }
  ];

  const renderUserList = (users, type) => (
    <div className="users-list">
      {users.length === 0 ? (
        <div className="modal-content-message">No {type.toLowerCase()} found</div>
      ) : (
        users.map((user, index) => (
          <div key={index} className="user-item">
            <img 
              src={user.profile_pic_url || 'default-avatar.png'} 
              alt={user.username} 
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-username">{user.username}</span>
              <span className="user-name">{user.full_name}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderPostsList = () => (
    <div className="posts-grid">
      {postsList.length === 0 ? (
        <div className="modal-content-message">No posts found</div>
      ) : (
        postsList.map((post, index) => (
          <div key={index} className="post-item">
            <img 
              src={post.image_url || post.thumbnail_url} 
              alt={`Post ${index + 1}`}
              className="post-image"
            />
            <div className="post-overlay">
              <div className="post-stats">
                <span>❤️ {formatNumber(post.likes || 0)}</span>
                <span>💬 {formatNumber(post.comments || 0)}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderModalContent = () => {
    if (!activeModal) return null;

    if (loading) {
      return <div className="modal-content-message">Loading {activeModal.toLowerCase()}...</div>;
    }

    if (error) {
      return <div className="modal-content-message">Error: {error}</div>;
    }

    switch (activeModal) {
      case 'Followers':
        return renderUserList(followersList, 'Followers');
      case 'Following':
        return renderUserList(followingList, 'Following');
      case 'Posts':
        return renderPostsList();
      default:
        return <div className="modal-content-message">No data available</div>;
    }
  };

  return (
    <>
      <div className="stats">
        {stats.map(({ label, number }) => (
          <button 
            key={label}
            className="stat-item"
            onClick={() => setActiveModal(label)}
          >
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
          </button>
        ))}
      </div>

      {activeModal && (
        <Modal 
          title={activeModal} 
          onClose={() => {
            setActiveModal(null);
            setPostsList([]);
            setFollowersList([]);
            setFollowingList([]);
          }}
        >
          {renderModalContent()}
        </Modal>
      )}
    </>
  );
};