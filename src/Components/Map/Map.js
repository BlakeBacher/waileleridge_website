import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'

import './Map.css'


export default class Map extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <body>
                    <div  className='reset'> Map</div>
                </body>
                {/* <area data-mapkey="3" shape="poly" coords="349,217,342,217,324,218,319,217,319,206,349,206" href="/Custom/ViewByBuilding?b=3"></area> */}
                <Footer/>
            </div>
        )
    }
}