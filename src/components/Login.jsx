import React from 'react';
import './login.css';
import { Frame, Button, Link } from 'arwes';
import TextBox from "./TextBox";
import firebase from "firebase";
import logo from '../assets/starthere.png';
import Arwes from 'arwes/lib/Arwes';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail=this.changeEmail.bind(this);
    this.changePass=this.changePass.bind(this);
    this.history=props.history;

    this.state={
      email:"",
      pass:"",
    };
  }
  handleClick() {
    console.log(this.state);
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.pass) 
      
      .then( async res => {
       firebase.auth().onAuthStateChanged(()=>{
         this.history.push("/");
       })
      })
      .catch(err => {
        console.log(err)
      })
    
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
        <Arwes>
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
                    <TextBox type="email" placeholder="Email" top="5%" bottom="5%"
                                  onNameChange={this.changeEmail}
                           ></TextBox>
                    <TextBox type="password" placeholder="Password" top="5%" bottom="5%" 
                      onNameChange={this.changePass}
                    
                    ></TextBox>
                    <Button animate layer='primary' style={{width: "100%"}} onClick={() => this.handleClick()}>
                        <i className='mdi' /> Login 
                    </Button>
                    <br/>
                    <br/>
                    Don't have account? <Link href='/register'>StartItUP</Link>.
                </div>
            </Frame>
      </div>
      </Arwes>
    ]
  }
}

export default Login;