import React from "react";
import { Arwes,Header,Heading,Link,Col,Row} from "arwes";
import { useHistory } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import img from "../assets/logo.png";

function CustomNavbar(props) {
  return (
    <div style={{ margin:'0 auto',width:'100%',zIndex:100}}>

            <Header animate style={{padding:10}}><a href="/" style={{textDecoration:"none"}}>
            <img src={img} alt="Logo" style={{ width: "50px",verticalAlign:"middle",paddingRight:"10px",paddingBottom:"5px",marginLeft:"15px"}} />
            <Heading node='h1'style={{display:"inline",verticalAlign:"middle"}}>START HERE</Heading></a>
            <div style={{float:"right",marginRight:"60px"}}>
            <Row>
            <Col s={12} m={3} l={4} xl={3}><Link href='/' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #Home </Link></Col>
            <Col s={12} m={3} l={4} xl={3}><Link href='/about' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #About </Link></Col>
            <Col s={12} m={3} l={4} xl={3}><Link href='/login' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #Sign In </Link></Col>
            <Col s={12} m={3} l={4} xl={3}><Link href='/register' animate style={{display:"inline",verticalAlign:"middle",paddingLeft:"50px"}}> #AddSartUP </Link></Col>
            </Row>
            </div>
            </Header>

    </div>
  );
}

export default CustomNavbar;
