import React, { Component } from "react";
import { Header, Image, Project, Words } from "arwes";
import img from "../assets/starthere.png";
export default class Contact extends Component {
  render() {
    return (
      <div style={{ margin: "0 auto", padding: 20, maxWidth: 1000 }}>
        <Header animate>
          <h1 style={{ margin: 0 }}>CONTACT US</h1>
        </Header>
        <br />
        <Project animate header="PROJECT, OFFICIA DESERUNT ANIM ID EST LABORUM">
          {(anim) => (
            <p>
              <Words animate show={anim.entered}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis laboris nisi ut aliquip ex. Duis aute
                irure. Consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud.
              </Words>
            </p>
          )}
        </Project>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Image animate resources={img}>
          The vast universe around us
        </Image>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
