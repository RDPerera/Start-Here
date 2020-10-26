import React from "react";
import "./login.css";
import { Col, Row, Frame, Button } from "arwes";
import TextBox from "./TextBox";
import logo from "../assets/starthere.png";

import firebase from "firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangenewBatchNo=this.onChangenewBatchNo.bind(this);

    this.state={
      email:"",
      pass:"",
      username:""
    }    
}
  handleClick() {
    console.log(this.state);
  }


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
              onChange={(e)=> console.log(e.value)}

            ></TextBox>
            <TextBox
              type="email"
              placeholder="Email"
              top="5%"
              bottom="5%"
              value={"a@s.c"}
              onChange={(e)=> this.setState({email:e.target.value}).bind(this)}

            ></TextBox>
            <TextBox
              type="password"
              placeholder="Password"
              top="5%"
              bottom="5%"
              // value={this.state.pass}
              onChange={(e)=> this.setState({pass:e.target.value}).bind(this)}

            ></TextBox>
            <TextBox
              type="password"
              placeholder="Re-enter Password"
              top="5%"
              bottom="5%"
            ></TextBox>
            <Button animate layer="primary" style={{ width: "100%" }} onClick={() => this.handleClick()}>
              <i className="mdi" /> Register
            </Button>
          </div>
        </Frame>
      </div>,
    ];
  }
}

export default Register;
