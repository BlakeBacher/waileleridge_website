import React, { Component } from 'react';


import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'
import './Home.css'

import downarrow_blue from './../Images/downarrow_blue.png'


export default class Home  extends Component {

    handlescroll(){
        window.scrollTo({
            top: 630,
            behavior: 'smooth'
          });
    }

    render() {
        return (
            <div>
                <Nav/>
                <body>
                    <h1 id='maintitle'>Immerse yourself in <span className='highlight'>paradise</span></h1>
                    <h6 id='subtitle'>Located in West Maui, just minutes from dining and shopping in historic Lahaina town and Ka'anapali, you’ll find a very special Maui real estate community named Wailele Ridge.</h6>
                    <div id='arrow_box' onClick={() => {this.handlescroll()}}>
                        <img alt='' src={downarrow_blue} className='downarrow passing'/>
                    </div> 
                    <div id='background1'></div> 
                    <div style={{height:'80vh'}}></div>
                    <div id='background2'></div>
                    <div style={{height:'80vh'}}></div>
                    <div id='background3'></div>
                </body>
                <Footer/>
            </div>
        )
    }
}