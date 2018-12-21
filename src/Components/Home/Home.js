import React, { Component } from 'react';


import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'
import './Home.css'


export default class Home  extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <body>
                    <div id='home_maintitle'>
                        <h1>Excellence in every complex.</h1>
                    </div> 
                    <div id='background1'></div> 
                    <div style={{height:'60vh'}}></div>
                    <div id='background2'></div>  
                </body>
                <Footer/>
            </div>
        )
    }
}