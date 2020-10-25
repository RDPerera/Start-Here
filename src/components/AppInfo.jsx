import React from "react";
import {Arwes , Project , Words ,Image,Button} from "arwes";
class AppInfo extends React.Component {
    render() {
        return[
                <Arwes background='/static/img/background.jpg' pattern='/static/img/glow.png'>
                <div style={{ padding: 20 },{width:500 },{marginTop:100}}>
                    <div style={{width:'60%' }}>
                    <div style={{marginLeft:'60' }}>
                    <Image animate resources='/static/img/wallpaper.jpg'>
                            The vast universe around us
                    </Image>
                    <Project
                        animate
                        header='PROJECT, OFFICIA DESERUNT ANIM ID EST LABORUM'
                    >
                        
                        {anim => (
                            
                            <p><Words animate show={anim.entered}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip
                                ex. Duis aute irure. Consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud.
                            </Words></p>
                            
                        )}
                       
                    </Project>
                    <div style={{marginLeft:'68%'}}>
                    <div style={{ padding: '20px' },{marginTop:'10px'}}>   
                        <Button animate>Connect</Button>
                        {' '}
                        <Button animate layer='success'>
                        <i className='mdi mdi-chemical-weapon' /> Go To StartUP WEB
                        </Button>
                        {' '}
                    </div></div></div>
                    </div>
                </div>
                </Arwes>
    ];
    }
}

export default AppInfo;