import React from 'react';
import './login.css';
import { Frame, Button } from 'arwes';
import TextBox from "./TextBox";
import firebase from "firebase";
import logo from '../assets/starthere.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail=this.changeEmail.bind(this);
    this.changePass=this.changePass.bind(this);

    this.state={
      email:"",
      pass:"",
    };
  }
  handleClick() {
    console.log(this.state);
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.pass);
    
  }
  changeEmail(evt) {
    console.log(evt.target.value);
    this.setState({
      email:evt.target.value
    });
  }
  changePass(evt) {
    console.log(evt.target.value);
    this.setState({
      pass:evt.target.value
    });
  }
  render() {
    return [
        <div class="form">
          <Frame
            show={true}
            animate={true}
            level={3}
            corners={4}
            layer='primary'
            style={{ padding: "10%" }}
            >
                <div style = {{textAlign: "center"}}>
                    <img src={logo} alt="StartHere Logo" style = {{width: "75%"}}/>
                    <TextBox type="text" placeholder="Username" top="5%" bottom="5%"
                                  onNameChange={this.changeEmail}
                           ></TextBox>
                    <TextBox type="password" placeholder="Password" top="5%" bottom="5%" 
                      onNameChange={this.changePass}
                    
                    ></TextBox>
                    <Button animate layer='primary' style={{width: "100%"}} onClick={() => this.handleClick()}>
                        <i className='mdi' /> Login 
                    </Button>
                </div>
            </Frame>
      </div>
    ]
  }
}

export default Login;