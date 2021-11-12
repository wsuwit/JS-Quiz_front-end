import About from "../components/About";
import AdminTool from "../components/Admin/AdminTool";
import Curriculum from "../components/Curriculum";
import Home from "../components/Home";
import LeaderBoard from "../components/LeaderBoard";
import Quiz from "../components/Quiz";

const routes = {
  guest: {
    route: [
      { path: "/", component: Home },
      { path: "/about", component: About },
      { path: "/leader", component: LeaderBoard },
      { path: "/quiz", component: Quiz }
    ],
    redirect: "/"
  },
  user: {
    route: [
      { path: "/", component: Home },
      { path: "/about", component: About },
      { path: "/leader", component: LeaderBoard },
      { path: "/curriculum", component: Curriculum },
      { path: "/quiz", component: Quiz }
    ],
    redirect: "/"
  },
  admin: {
    route: [
      { path: "/", component: Home },
      { path: "/about", component: About },
      { path: "/leader", component: LeaderBoard },
      { path: "/curriculum", component: Curriculum },
      { path: "/admin", component: AdminTool },
      { path: "/quiz", component: Quiz }
    ],
    redirect: "/"
  }
};

export default routes;
