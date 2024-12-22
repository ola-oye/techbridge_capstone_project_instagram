import "./App.css";
import RightSide from "./components/rightSide";
import Postcard from "./components/Postcard";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Postcard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
