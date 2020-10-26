import React from "react";
import { Button, Col, Row,Link } from "arwes";
import { useHistory } from "react-router-dom";

import { InlineIcon } from "@iconify/react";
import chemicalWeapon from "@iconify/icons-mdi/chemical-weapon";
import robot from "@iconify/icons-mdi/robot";

import "./CustomNavbar.css";

function CustomNavbar(props) {
  const history = useHistory();
  return (
    <div
      style={{
        margin: "0 auto",
        padding: 20,
        width: "100%",
        backgroundColor: "black",
        opacity: "0.8",
      }}
    >
      <Row>
        <Col s={12} m={6} l={3}>
          {" "}
          <Button onClick={() => history.push("/")} animate>
            <InlineIcon icon={chemicalWeapon} /> Home
          </Button>{" "}
        </Col>
        <Col s={12} m={6} l={3}>
          <Button onClick={() => history.push("/about")} animate>
            <InlineIcon icon={chemicalWeapon} /> About Us
          </Button>
        </Col>
        <Col s={12} m={6} l={3}>
          <Link href="/login">
          <Button  animate>
            <InlineIcon icon={robot} /> Sign In
          </Button>
          </Link>
        </Col>
        <Col s={12} m={6} l={3}>
          <Link href="/register">
          <Button  animate>
            <InlineIcon icon={robot} /> Sign UP
          </Button>
          </Link>
        </Col>
      </Row>
      {/* <Line animate layer="success" /> */}
    </div>
  );
}

export default CustomNavbar;
