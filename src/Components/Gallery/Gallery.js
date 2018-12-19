import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'


export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>Gallery</p>
                <Footer/>
            </div>
        )
    }
}