import "./App.css";
import About from "./components/About";
import AdminTool from "./components/Admin/AdminTool";
import CreateQuiz from "./components/Admin/CreateQuiz";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
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
      <AdminTool />
      {/* <Quiz /> */}
      <Footer />
    </div>
  );
}

export default App;
