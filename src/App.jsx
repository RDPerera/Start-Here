import React from "react";
import "./App.css";
import { ThemeProvider, createTheme, Arwes } from "arwes";
import Puffs from "arwes/lib/Puffs";

import background from "./assets/background-large.jpg";
import pattern from "./assets/glow.png";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import About from "./components/About";
import Contact from "./components/Contact";

import AppInfo from "./components/AppInfo";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    let displayContent = () => {
      if (
        window.location.pathname === "/login" ||
        window.location.pathname === "/register"
      ) {
        return (
          <>
            {" "}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />{" "}
          </>
        );
      } else {
        return (
          <>
            <CustomNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/appinfo" component={AppInfo} />
          </>
        );
      }
    };

    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes background={background} pattern={pattern}>
          <Puffs>
            <Router>
              <div>{displayContent()}</div>
            </Router>
          </Puffs>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
