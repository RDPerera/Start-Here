import React from "react";
import AdList from "./AdList";
import { Heading, Row } from "arwes";
import Loading from "arwes/lib/Loading";
import logo from '../assets/starthere.png';

class Home extends React.Component {
  render() {
    return [
      <div>
        <div style={{textAlign: "center"}}><img src={logo}/></div>
        <Row>
          <AdList />
        </Row>
      </div>,
    ];
  }
}

export default Home;
