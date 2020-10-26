import React from "react";
import adData from "../data/adData.json";
import Advertisement from "./Advertisement";
import { Col } from "arwes";

const datalist = adData.map((data) => {
  return (
    <Col s={12} m={3}>
      <Advertisement
        key={data.id}
        path={data.path}
        header={data.header}
        name={data.name}
        web={data.web}
        category={data.category}
        phone={data.phone}
        image={data.name}
        rating = {data.rating}
      />
    </Col>
  );
});

class AdList extends React.Component {
  render() {
    return [<>{datalist}</>];
  }
}

export default AdList;
