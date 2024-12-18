<<<<<<< HEAD
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
=======
import React from 'react';  
 function App() {
  return (  
    <div className="App">  
     
    </div>  
  );  
};  
>>>>>>> 1e6873f (update)

export default App;