import React from "react";
import "./App.css";
import { ThemeProvider, createTheme, Arwes } from "arwes";
import Puffs from "arwes/lib/Puffs";

import background from "./assets/background-large.jpg";
import pattern from "./assets/glow.png";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes background={background} pattern={pattern}>
          <Puffs>
            <Router>
              <div>
                <CustomNavbar />
                <Route exact path="/" component={Home} />

                <Route path="/about" component={About} />
              </div>
            </Router>
          </Puffs>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
