<<<<<<< HEAD
<<<<<<< HEAD
import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

=======

import './App.css';
import RightSide from './Component/rightSide';
>>>>>>> 2875721 (my designs for suggested box block)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
=======
   <div className="rightSide">
  <RightSide/>
   </div>
>>>>>>> 2875721 (my designs for suggested box block)
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