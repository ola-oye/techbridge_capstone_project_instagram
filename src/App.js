import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Stats } from "./components/Stats/Stats";
import { Bio } from "./components/Bio/Bio";
import { ActionButtons } from "./components/ActionButtons/ActionButtons";
import { fetchInstagramProfile } from "./utils/api";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "mrbeast";

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const data = await fetchInstagramProfile(username);
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="profile-container">
      <Header username={profile?.username || username} />
      <div className="profile-info">
        <Stats
          followers={profile?.followers || 0}
          following={profile?.following || 0}
          posts={profile?.posts || 0}
          username={profile?.username || username}
        />
        <Bio
          description={profile?.biography || ""}
          website={profile?.website || ""}
          category={profile?.category || ""}
        />
        <ActionButtons />
      </div>
    </div>
  );
}

export default App;
