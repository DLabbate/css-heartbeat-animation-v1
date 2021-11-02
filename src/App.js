import "./App.css";
import { FiHeart } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="line-incomplete"></div>
        <div className="break"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line-incomplete"></div>
        <FiHeart className="heart" />
      </div>
    </div>
  );
}

export default App;
