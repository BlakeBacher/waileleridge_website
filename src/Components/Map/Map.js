import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'


export default class Map extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>Map</p>
                <Footer/>
            </div>
        )
    }
}