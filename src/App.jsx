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
import Logout from "./components/logout";

import click from "./sounds/click.mp3";
import type from "./sounds/typing.mp3";
import deploy from "./sounds/deploy.mp3";

import About from "./components/About";
import Contact from "./components/Contact";
import AddStartup from "./components/AddStartup";

import AppInfo from "./components/AppInfo";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { SoundsProvider, createSounds, Button } from "arwes";

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: [click] }, // The settings to pass to Howler
    },
    typing: {
      sound: { src: [type] },
      settings: { oneAtATime: true }, // The custom app settings
    },
    deploy: {
      sound: { src: [deploy] },
      settings: { oneAtATime: true },
    },
  },
};

class App extends React.Component {
  render() {

    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes background={background} pattern={pattern}>
          <SoundsProvider sounds={createSounds(mySounds)}>
            <Puffs>
              <Router>
                <div>
                  <CustomNavbar />
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/add" component={AddStartup} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/contact" component={Contact} />
                  <Route exact path="/appinfo/:job" component={AppInfo} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                </div>
              </Router>
            </Puffs>
          </SoundsProvider>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
