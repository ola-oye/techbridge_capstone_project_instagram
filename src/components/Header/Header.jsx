import { FaArrowLeft, FaEllipsisV } from 'react-icons/fa';

export const Header = ({ username }) => {
  return (
    <header className="profile-header">
      <button className="back-button">
        <FaArrowLeft />
      </button>
      <h1>{username}</h1>
      <button className="more-options">
        <FaEllipsisV />
      </button>
    </header>
  );
};