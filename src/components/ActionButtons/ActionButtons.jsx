import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Modal } from '../Modal/Modal';
import './ActionButtons.css';

export const ActionButtons = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <div className="action-buttons">
        <button 
          className="follow-btn"
          onClick={handleFollow}
          style={{
            backgroundColor: isFollowing ? '#efefef' : '#0095f6',
            color: isFollowing ? '#262626' : 'white'
          }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <button 
          className="message-btn"
          onClick={() => setShowMessageModal(true)}
        >
          Message
        </button>
        <button className="contact-btn">
          <FaUserPlus />
        </button>
      </div>

      {showMessageModal && (
        <Modal 
          title="New Message" 
          onClose={() => setShowMessageModal(false)}
        >
          <div className="message-form">
            <textarea 
              className="message-input"
              placeholder="Write your message..."
              rows={4}
            />
            <button className="send-message-btn">Send</button>
          </div>
        </Modal>
      )}
    </>
  );
};