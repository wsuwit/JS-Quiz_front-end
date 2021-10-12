import "./App.css";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w3-container">
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <LeaderBoard /> */}
      <Curriculum />
    </div>
  );
}

export default App;
