import React from 'react';
import { Project, Words } from 'arwes';

class Advertisement extends React.Component {
  render() {
    return [
      <div style={{ padding: 20 }}>
        <Project
          animate
          header={this.props.header}>
          {anim => (
            <p><Words animate show={anim.entered}>
              {this.props.content}
            </Words></p>
          )}
        </Project>
      </div>
    ]
  }
}

export default Advertisement;