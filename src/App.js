import "./App.css";
import RightSide from "./components/rightSide";
import Postcard from "./components/Postcard";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Postcard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
