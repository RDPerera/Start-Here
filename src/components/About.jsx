import React, { Component } from "react";

import { Header, Image, Project, Words ,List , Heading} from "arwes";

import img from "../assets/starthere.png";
export default class About extends Component {
  render() {
    return (
      <div style={{ margin: "0 auto", padding: 20, maxWidth: 1000 }}>
        <Header animate>
          <h1 style={{ margin: 0 }}>ABOUT US</h1>
        </Header>
        <br />
        <Project animate header="START HERE">
          {(anim) => (
            <p>
              <Words animate show={anim.entered}>
               Our application “Start Here” is built with the primary intention of providing a platform for startups of Sri Lanka to advertise their job opportunities and to attract new customers while retaining existing customers. It helps encourage entrepreneurship among the youth of Sri Lanka through the growth of working spaces.

              </Words>
            </p>
          )}
        </Project>
        
        <Image animate resources={img}>
          The vast universe around us
        </Image>
        <Heading node='h1'>Our Solution</Heading>
        <List node='ul'>
                <li>Platform to advertise job opportunities to look for passionate and skilled individuals.</li>
                <li>Opportunity to attract new clients and retain existing ones</li>
                <li>Platform to find curious, risk taking investors investors and better fundings</li>
            </List>
      </div>
    );
  }
}
