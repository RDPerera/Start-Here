import React from "react";
import { Project, Words, Image, Link } from "arwes";
import img from "../assets/ad-img.jpg";
import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify/icons-mdi/star';

class Advertisement extends React.Component {
  render() {
    const getPath = () => {
      return "appinfo/"+this.props.path
    }

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
          <Project animate header={this.props.header}>
            <Image animate resources={img}>
              {displayRating()}
            </Image>
          </Project>
        </div>
      </Link>
    ];
  }
}

export default Advertisement;
