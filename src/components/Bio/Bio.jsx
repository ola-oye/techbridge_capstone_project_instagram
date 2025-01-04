export const Bio = ({ description, website, category }) => {
  return (
    <div className="profile-bio">
      {category && <p className="bio-type">{category}</p>}
      {description && <p className="bio-text">{description}</p>}
      {website && (
        <a href={website} className="bio-link" target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      )}
    </div>
  );
};