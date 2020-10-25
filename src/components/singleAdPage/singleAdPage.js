import React, { Component } from 'react'
import { Project, Words, Image } from 'arwes';


export class singleAdPage extends Component {
    render() {
        return (
            <div style={{ padding: 20,marginLeft:30,marginRight:30 }}>
            <Project
                animate
                header='Job posted'>
                {anim => (
                    <p>
                        <Image animate resources='/static/img/wallpaper.jpg'>
                            The vast universe around us
                        </Image>
                        <br></br>
                        <Words animate show={anim.entered}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip
                        ex. Duis aute irure. Consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.
                    </Words></p>
                )}
            </Project>
        </div>
        )
    }
}

export default singleAdPage
