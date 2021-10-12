import "./App.css";
import About from "./components/About";
import AdminTool from "./components/AdminTool";
import Curriculum from "./components/Curriculum";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="w3-container">
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <LeaderBoard /> */}
      {/* <Curriculum /> */}
      {/* <AdminTool /> */}
      <Quiz />
    </div>
  );
}

export default App;
