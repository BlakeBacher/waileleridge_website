import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Nav.css'

import Wailele_Logo_White from './../Images/Wailele_Logo_White.png'
import Wailele_Logo_White_Small from './../Images/Wailele_Logo_White_Small.png'

export default class Nav extends Component {
    constructor(){
        super()

        this.state={
            active: false,
        }
    }

    scrollFunction(){
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            this.setState({active: true})
        } else {
            this.setState({active:false})
        }
    }

    render() {
        return (
            <div>
                {this.state.active ?
                    <div className='nav_active'>
                        <img alt='' src={Wailele_Logo_White_Small} id='nav_logo_active'/>
                        <div className='navbuttons'>
                            <Link to='/'><button className='navbutton_active'>Home</button></Link>
                            <Link to='/map'><button className='navbutton_active'>Map</button></Link>
                            <Link to='/about'><button className='navbutton_active'>About</button></Link>
                            <Link to='/gallery'><button className='navbutton_active'>Gallery</button></Link>
                            <Link to='/contact'><button id='contact_navbutton_active'>Contact</button></Link>
                        </div> 
                    </div>
                :
                    <div className='nav'>
                        <img alt='' src={Wailele_Logo_White} id='nav_logo'/>
                        <div className='navbuttons'>
                            <Link to='/'><button className='navbutton'>Home</button></Link>
                            <Link to='/map'><button className='navbutton'>Map</button></Link>
                            <Link to='/about'><button className='navbutton'>About</button></Link>
                            <Link to='/gallery'><button className='navbutton'>Gallery</button></Link>
                            <Link to='/contact'><button className='navbutton'>Contact</button></Link>
                        </div> 
                    </div> 
                }
                {window.onscroll = () => {this.scrollFunction()}}
            </div>
        )
    }
}