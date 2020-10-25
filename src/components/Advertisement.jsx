import React from "react";
import { Project, Words, Image } from "arwes";
// import img from "../assets/uni.jpg";

class Advertisement extends React.Component {
  render() {
    return [
      <div style={{ padding: 20, margin: "auto", maxWidth: 900 }}>
        <Project animate header={this.props.header}>
          <img
            src=""
            alt=""
            style={{
              width: "100%",
              height: "300px",
              // backgroundImage: "url(./../assets/uni.jpg)",
            }}
          />

          <p>
            <Words animate>{this.props.content}</Words>
          </p>
        </Project>
      </div>,
    ];
  }
}

export default Advertisement;
