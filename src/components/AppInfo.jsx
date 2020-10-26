import React from "react";
import img from "../assets/ad-img.jpg";
import { Arwes, Project, Words, Image, Button, Header } from "arwes";
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
              <h1 style={{ margin: 0 }}>{data.header}</h1>
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

    return [<div style={{ padding: "5% 33.3%" }}>{datalist}</div>];
  }
}

export default AppInfo;
