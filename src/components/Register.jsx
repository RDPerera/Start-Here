import React from "react";
import "./login.css";
import { Col, Row, Frame, Button } from "arwes";
import TextBox from "./TextBox";
import logo from "../assets/starthere.png";

class Register extends React.Component {
  render() {
    return [
      <div class="form">
        <Frame
          show={true}
          animate={true}
          level={3}
          corners={4}
          layer="primary"
          style={{ padding: "10%" }}
        >
          <div style={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "75%" }} />
            <TextBox
              type="text"
              placeholder="Username"
              top="5%"
              bottom="5%"
            ></TextBox>
            <TextBox
              type="email"
              placeholder="Email"
              top="5%"
              bottom="5%"
            ></TextBox>
            <TextBox
              type="password"
              placeholder="Password"
              top="5%"
              bottom="5%"
            ></TextBox>
            <TextBox
              type="password"
              placeholder="Re-enter Password"
              top="5%"
              bottom="5%"
            ></TextBox>
            <Button animate layer="primary" style={{ width: "100%" }}>
              <i className="mdi" /> Register
            </Button>
          </div>
        </Frame>
      </div>,
    ];
  }
}

export default Register;
