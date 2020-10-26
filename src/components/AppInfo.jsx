import React from "react";
import img from "../assets/ad-img.jpg";
import { Project, Words, Image, Button, Header, List } from "arwes";
import background from "../assets/background-large.jpg";
import pattern from "../assets/glow.png";
import adData from "../data/adData.json";

class AppInfo extends React.Component {
  render() {
    console.log(this.props.match.params.job);
    const location = window.location.pathname;
    const datalist = adData.map((data) => {
      if (location === "/appinfo/" + data.path) {
        return (
          <>
            <Header animate>
              <h1 style={{ margin: 0 }}>{data.name}</h1>
            </Header>
            <br />
            <Image animate resources={img}>
              The vast universe around us
            </Image>
            <Project animate header={data.header}>
              {(anim) => (
                <p>
                  <Words animate show={anim.entered}>
                    {data.content}
                  </Words>
                </p>
              )}
            </Project>
            <br />
            <List node="ul">
              <li>Category     : {data.category}</li>
              <li>Phnone No    : {data.phone}</li>
              <li>Address      : {data.adr}</li>
              <li>Website      : {data.web}</li>
            </List>
            <div style={{ margin: "5% auto", textAlign: "right" }}>
              <Button animate layer="success">
                <i className="mdi mdi-chemical-weapon" /> Go To StartUP WEB
              </Button>
            </div>
          </>
        );
      } else {
        return null;
      }
    });

    return [<div style={{ padding: "5% 27.3%" }}>{datalist}</div>];
  }
}

export default AppInfo;
