import React from "react";
import { Project, Words, Image, Link } from "arwes";
import img from "../assets/ad-img.jpg";

class Advertisement extends React.Component {
  render() {
    const getPath = () => {
      return "appinfo/"+this.props.path
    }

    return [
      <Link href={getPath()}>
        <div style={{ padding: 20, margin: "auto", maxWidth: 900 }}>
          <Project animate header={this.props.header}>
            <Image animate resources={img}></Image>

            <p>
              <Words animate>{this.props.content}</Words>
            </p>
          </Project>
        </div>
      </Link>
    ];
  }
}

export default Advertisement;
