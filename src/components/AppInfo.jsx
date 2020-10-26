import React from "react";
import img from "../assets/ad-img.jpg";
import { Arwes, Project, Words, Image, Button } from "arwes";
class AppInfo extends React.Component {
  render() {
    return [
      <div style={({ padding: 20 }, { width: 500 }, { marginTop: 100 })}>
        <div style={{ paddingRight: "33.3%" }}>
          <div style={{ paddingLeft: "33.3%" }}>
            <Image animate resources={img}>
              The vast universe around us
            </Image>
            <Project animate header="PROJECT, OFFICIA DESERUNT ">
              {(anim) => (
                <p>
                  <Words animate show={anim.entered}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis laboris nisi ut
                    aliquip ex. Duis aute irure. Consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </Words>
                </p>
              )}
            </Project>
            <div style={{ marginLeft: "46%" }}>
              <div style={({ padding: "20px" }, { marginTop: "10px" })}>
                <Button animate layer="success">
                  <i className="mdi mdi-chemical-weapon" /> Go To StartUP WEB
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

export default AppInfo;
