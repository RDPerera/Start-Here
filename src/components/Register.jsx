import React from "react";
import "./login.css";
import { Frame, Button, Words, Link } from "arwes";
import TextBox from "./TextBox";
import logo from "../assets/starthere.png";

import firebase from "firebase";
import Arwes from "arwes/lib/Arwes";

class Register extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangenewBatchNo=this.onChangenewBatchNo.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.changeRePass = this.changeRePass.bind(this);
    this.history=props.history;

    this.state = {
      email: "",
      pass: "",
      repass: "",
      username: "",
      equal: true,
      auth: false
    };
  }
  handleClick() {
    console.log(this.state);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error){
      this.setState({
        auth: false
      })
    });
    this.history.push("/login");

  }
  changeUser(evt) {
    console.log(evt.target.value);
    this.setState({
      username: evt.target.value
    });
  }
  changeEmail(evt) {
    console.log(evt.target.value);
    this.setState({
      email: evt.target.value
    });
  }
  changePass(evt) {
    console.log(evt.target.value);
    this.setState({
      pass: evt.target.value
    });
  }

  changeRePass(evt) {
    if (this.state.pass === evt.target.value) {
      this.setState({
        equal: true,
        repass: evt.target.value
      })
    } else {
      this.setState({
        equal: false
      })
    }
    console.log(evt.target.value);
  }

  render() {
    const displayError = () => {
      if (this.state.equal === false) {
        return <p><Words animate layer='alert'>Invalid Password!</Words></p>
      } else {
        return <div></div>;
      }
    }

    return [
      <Arwes>
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
                onNameChange={this.changePass}


              ></TextBox>
              <TextBox
                type="password"
                placeholder="Re-enter Password"
                top="5%"
                bottom="5%"
                onNameChange={this.changeRePass}
              ></TextBox>
              <Button animate layer="primary" style={{ width: "100%" }} onClick={() => this.handleClick()}>
                <i className="mdi" /> Register
            </Button>
            <br/>
                    <br/>
                    Have an account? <Link href='/login'>Start Here</Link>
              <div>
                {displayError()}
              </div>
            </div>
          </Frame>
        </div>
      </Arwes>
    ];
  }
}

export default Register;
