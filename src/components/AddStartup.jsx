import React from "react";

import { Frame, Button,Header } from "arwes";
import TextBox from "./TextBox";
import logo from "../assets/starthere.png";

// import firebase from "firebase";
import "./AddStartup.css";
class AddStartup extends React.Component {


  render() {
    return [
      <div class="form1">
        <Frame
          show={true}
          animate={true}
          level={3}
          corners={4}
          layer="primary"
          style={{ padding: "3%" }}
        >

          <div style={{ textAlign: "center" }}>
            <img src={logo} alt="StartHere Logo" style={{ width: "75%" }} />
            <TextBox
              type="text"
              placeholder="Company Name"
              top="5%"
              bottom="5%"
              onNameChange={this.changeUser}

            ></TextBox>
            <TextBox
              type="text"
              placeholder="Enter a small discription"
              top="5%"
              bottom="5%"
              onNameChange={this.changeEmail}
            ></TextBox>
            <TextBox
              type="text"
              placeholder="Category"
              top="5%"
              bottom="5%"
              onNameChange={this.changeEmail}
            ></TextBox>
           
            <TextBox
              type="text"
              placeholder="Telephone Number"
              top="5%"
              bottom="5%"
              onNameChange={this.changeEmail}
            ></TextBox>
            <TextBox
              type="text"
              placeholder="Website url "
              top="5%"
              bottom="5%"
              onNameChange={this.changeEmail}
            ></TextBox>
            <TextBox
              type="text"
              placeholder="Address"
              top="5%"
              bottom="5%"
              onNameChange={this.changeEmail}
            ></TextBox>
            <TextBox
              height={150}
              type="text"
              placeholder="Content"
              top="5%"
              bottom="5%"
              onNameChange={this.changeEmail}
            ></TextBox>
           
            <Button animate layer="primary" style={{ width: "100%" }} >
              <i className="mdi" /> Add Advertisemnet
            </Button>
          </div>
        </Frame>
      </div>,
    ];
  }
}

export default AddStartup;
