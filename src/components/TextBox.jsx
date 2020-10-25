import React from 'react';
import { Frame } from 'arwes';

class TextBox extends React.Component {    
    constructor (type,width) {
        super(type,width);
        this.state = { show: true };
    }

  render() {
    let styles = { height:50, width:"100%", backgroundColor:"transparent", color:"white", border:"none", padding: "0.5rem" };
    return [
        <Frame
        show={this.state.show}
        animate={true}
        level={3}
        corners={4}
        layer='primary'
        style={{width: this.props.width!=null?this.props.width:"100%"}}
    >
        <div>
            <input type={this.props.type} style={styles} />
        </div>
    </Frame>
    ]
  }
}

export default TextBox;