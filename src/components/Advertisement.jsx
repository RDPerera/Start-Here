import React from "react";
import { Project, Words, Image, Link, Blockquote } from "arwes";
import img from "../assets/ad-img.jpg";

class Advertisement extends React.Component {
  render() {
    const getPath = () => {
      return "appinfo/" + this.props.path;
    };

    return [
      <Link href={getPath()}>
        <div style={{ padding: 20, margin: "auto", maxWidth: 900 }}>
          <Project animate header={this.props.name}>
            <Image animate resources={img}>
              <p style={{ fontSize: 40 }}>✡ ✡ ✡ ✡ ✡</p>
            </Image>

            <Blockquote>{this.props.category}</Blockquote>
            <br />
            <Blockquote data-layer="success">{this.props.header}</Blockquote>
            <br />
            <Blockquote>{this.props.phone}</Blockquote>
            <br />
            <Blockquote data-layer="disabled">{this.props.web}</Blockquote>

            {/* <p><Words animate>{this.props.content}</Words></p> */}
          </Project>
        </div>
      </Link>,
    ];
  }
}

export default Advertisement;
