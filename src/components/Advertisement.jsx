import React from "react";
import { Project, Words, Image, Link, Blockquote } from "arwes";
import img from "../assets/ad-img.jpg";
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-mdi/star';

class Advertisement extends React.Component {
  render() {
    const getPath = () => {
      return "appinfo/" + this.props.path;
    };

    let rating = this.props.rating

    const displayRating = () =>{
      let ratings = []
      for(let i = 0;i<rating;i++){
        ratings.push(<Icon icon={starIcon} color="#00dcf6" />)
      }
      for(let i = 0;i<5-rating;i++){
        ratings.push(<Icon icon={starIcon} />)
      }
      return ratings
    }

    return [
      <Link href={getPath()}>
        <div style={{ padding: 20, margin: "auto", maxWidth: 900 }}>
          <Project animate header={this.props.name}>
            <Image animate resources={img}>
              {displayRating()}
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
