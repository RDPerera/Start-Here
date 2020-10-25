import React from "react";
import "./App.css";
import { ThemeProvider, createTheme, Arwes } from "arwes";
import Puffs from "arwes/lib/Puffs";

import background from "./assets/background-large.jpg";
import pattern from "./assets/glow.png";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
<<<<<<< Updated upstream
import About from "./components/About";
=======
import AppInfo from "./components/AppInfo";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream

                <Route path="/about" component={About} />
=======
                <Route exact path="/appinfo" component={AppInfo} />
                {/* <Route path="/about" component={About} /> */}
>>>>>>> Stashed changes
              </div>
            </Router>
          </Puffs>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
