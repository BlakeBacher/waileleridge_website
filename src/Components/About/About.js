import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'


export default class About extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>About</p>
                <Footer/>
            </div>
        )
    }
}