import React, { Component } from 'react';


import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'

export default class Home  extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>Home</p>
                <Footer/>
            </div>
        )
    }
}