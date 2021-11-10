import { useContext } from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./config/route";
import Footer from "./components/Footer";
import { AuthContext } from "./contexts/authContext";

function App() {
  const { user } = useContext(AuthContext);
  const role = user ? user.role : "guest";

  return (
    <div className="w3-container">
      <BrowserRouter>
        <Navbar />
        {role && (
          <Switch>
            {routes[role].route.map((item) => (
              <Route
                key={item.path}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
            <Redirect to={routes[role].redirect} />
          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
