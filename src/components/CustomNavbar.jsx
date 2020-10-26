import React from "react";
import { Arwes,Header,Heading,Link,Col,Row} from "arwes";
import { useHistory } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import chemicalWeapon from "@iconify/icons-mdi/chemical-weapon";
import robot from "@iconify/icons-mdi/robot";
import img from "../assets/logo.png";
import "./CustomNavbar.css";

function CustomNavbar(props) {
  const resources = {
    bg: '/static/img/background.jpg',
    pattern: '/static/img/glow.png',
};
  return (
    <Arwes resources={resources}>
        <div style={{ padding: 20,marginTop:'0px',marginBottom:'500px'}}>
            <Header animate>
            <img src={img} alt="Logo" style={{ width: "50px",verticalAlign:"middle",paddingRight:"10px",paddingBottom:"5px"}} />
            <Heading node='h1'style={{display:"inline",verticalAlign:"middle"}}>START HERE</Heading>
            <div style={{float:"right",marginRight:"60px"}}>
            <Row>
            <Col s={12} m={3} l={4} xl={3}><Link href='' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #Home </Link></Col>
            <Col s={12} m={3} l={4} xl={3}><Link href='/about' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #About </Link></Col>
            <Col s={12} m={3} l={4} xl={3}><Link href='/login' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #Sign In </Link></Col>
            <Col s={12} m={3} l={4} xl={3}><Link href='/register' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #AddSartUP </Link></Col>
            </Row>
            </div>
            </Header>
        </div>
    </Arwes>
  );
}

export default CustomNavbar;
