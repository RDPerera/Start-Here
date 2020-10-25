import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "arwes";

function CustomNavbar(props) {
  return (
    <div>
      <Button animate>Cyberpunk</Button>
      <Button animate>Cyberpunk</Button>
      <Button animate>Cyberpunk</Button>
      <Button animate>Cyberpunk</Button>
      <Button animate>Cyberpunk</Button>
    </div>
    // <Navbar bg="dark" variant="dark">
    //   <Navbar.Brand as={Link} to="/">
    //     LAKSHAN
    //   </Navbar.Brand>
    //   <Nav className="mr-auto">
    //     <Nav.Link as={NavLink} to="/" exact>
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
