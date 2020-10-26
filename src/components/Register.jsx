import React from "react";
import "./login.css";
import { Frame, Button } from "arwes";
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
  changeUser(evt) {
    // console.log(evt.target.value);
    this.setState({
      username:evt.target.value
    })
  }
  changeEmail(evt) {
    this.setState({
      email:evt.target.value
    })
  }
  changePass(evt) {
    this.setState({
      pass:evt.target.value
    })
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
            <img src={logo} alt="StartHere Logo" style={{ width: "75%" }} />
            <TextBox
              type="text"
              placeholder="Username"
              top="5%"
              bottom="5%"
              onNameChange={this.changeUser}

            ></TextBox>
            <TextBox
              type="email"
              placeholder="Email"
              top="5%"
              bottom="5%"
              value={"a@s.c"}
              onNameChange={this.changeEmail}


            ></TextBox>
            <TextBox
              type="password"
              placeholder="Password"
              top="5%"
              bottom="5%"
              // value={this.state.pass}
              onNameChange={this.changePass}
              

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
