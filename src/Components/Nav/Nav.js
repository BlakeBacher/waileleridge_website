import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Nav.css'

import Wailele_Logo_White_Small from './../Images/Wailele_Logo_White_Small.png'

export default class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <img alt='' src={Wailele_Logo_White_Small} id='nav_logo'/>
                <div className='navbuttons'>
                    <Link to='/'><button className=''>Home</button></Link>
                    <Link to='/map'><button className=''>Map</button></Link>
                    <Link to='/about'><button className=''>About</button></Link>
                    <Link to='/gallery'><button className=''>Gallery</button></Link>
                    <Link to='/contact'><button className=''>Contact</button></Link>
                </div> 
            </div>
        )
    }
}