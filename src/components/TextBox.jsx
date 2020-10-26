import React from 'react';
import { Frame } from 'arwes';

class TextBox extends React.Component {    
    constructor (type,placeholder,width,top, bottom, onChange,height) {
        super(type,placeholder,width,top, bottom, onChange,height);
        this.state = { show: true, };
    }

  render() {
    let styles = {  height: this.props.height!=null?this.props.height:50 , width:"100%", backgroundColor:"transparent", color:"white", border:"none", padding: "0.5rem"};
    return [
        <Frame
        show={this.state.show}
        animate={true}
        level={3}
        corners={4}
        layer='primary'
        style={{width: this.props.width!=null?this.props.width:"100%",height: this.props.height!=null?this.props.height:50, backgroundColor: "transparent", marginTop: this.props.top!=null?this.props.top:"auto", marginBottom: this.props.bottom!=null?this.props.bottom:"auto"}}
    >
        <div>
            <input type={this.props.type} placeholder={this.props.placeholder} style={styles} onChange={this.props.onNameChange} />
        </div>
    </Frame>
    ]
  }
}

export default TextBox;