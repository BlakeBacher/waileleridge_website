import React, { Component } from 'react';


import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'

import main_background from './../Images/main_background.jpg'

export default class Home  extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div>
                    <img alt='' src={main_background} style={{width:'100%'}}/>
                </div> 
                <Footer/>
            </div>
        )
    }
}