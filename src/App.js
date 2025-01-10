import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
