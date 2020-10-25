import React from "react";
import AdList from "./AdList";
import { Heading, Row } from "arwes";
import Loading from "arwes/lib/Loading";

class Home extends React.Component {
  render() {
    return [
      <div>
        <Loading />
        <Heading node="h1" class="heading">
          Start Here
        </Heading>
        <Row>
          <AdList />
        </Row>
      </div>,
    ];
  }
}

export default Home;
