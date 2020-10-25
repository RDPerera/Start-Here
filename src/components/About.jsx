import React, { Component } from "react";
import { Arwes, Image } from "arwes";

export default class About extends Component {
  render() {
    return (
      <Arwes>
        <div style={{ margin: "0 auto", padding: 20, maxWidth: 600 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image animate resources="/static/img/wallpaper.jpg">
            The vast universe around us
          </Image>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Arwes>
    );
  }
}
