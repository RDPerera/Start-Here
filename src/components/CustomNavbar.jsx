import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Col, Row, Line, Footer } from "arwes";
import { useHistory } from "react-router-dom";
import "./CustomNavbar.css";

function CustomNavbar(props) {
  const history = useHistory();
  return (
    <div style={{ margin: "0 auto", padding: 20, width: "100%" }}>
      <Row>
        <Col s={12} m={6} l={4} xl={3}>
          {" "}
          <Button onClick={() => history.push("/")} animate>
            Home
          </Button>{" "}
        </Col>
        <Col s={12} m={6} l={4} xl={3}>
          <Button onClick={() => history.push("/")} animate>
            Contact Us
          </Button>
        </Col>
        <Col s={12} m={6} l={4} xl={3}>
          <Button onClick={() => history.push("/about")} animate>
            About Us
          </Button>
        </Col>
        <Col s={12} m={6} l={4} xl={3}>
          <Button animate>Logout</Button>
        </Col>
      </Row>
      <Footer animate></Footer>
      {/* <Line animate layer="success" /> */}
    </div>
    // <Navbar bg="dark" variant="dark">
    //   <Navbar.Brand as={Link} to="/">
    //     LAKSHAN
    //   </Navbar.Brand>
    //   <Nav className="mr-auto">
    // <Nav.Link as={NavLink} to="/" exact>
    //       Home
    //     </Nav.Link>
    //     <Nav.Link as={NavLink} to="/about">
    //       About
    //     </Nav.Link>
    //     <Nav.Link as={NavLink} to="/news">
    //       News
    //     </Nav.Link>
    //   </Nav>

    //   <Button variant="outline-info" as={NavLink} to="/login">
    //     Login
    //   </Button>

    //   <Button variant="outline-info" as={NavLink} to="/login" onClick={Logout}>
    //     Logout
    //   </Button>
    // </Navbar>
  );
}

export default CustomNavbar;
