
import './App.css';
import RightSide from './Component/rightSide';
import Postcard from './Component/Postcard';
function App() {
  return (
    <div className="App">
      <div>  
    <Postcard /> 
   </div>  
   <div className="rightSide">
  <RightSide/>
   </div>
  
  </div>
  );
}

export default App;