import React from "react";
import AdList from "./AdList";
import { Heading, Row, Image } from "arwes";
import Loading from "arwes/lib/Loading";
import img from "../assets/starthere.png";

class Home extends React.Component {
  render() {
    return [
      <div>
        '<br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="information" style={{ textAlign: "center" }}>
          <img src={img} alt="StartHere Logo" style={{ width: "50%" }} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <AdList />
        </Row>
      </div>,
    ];
  }
}

export default Home;
