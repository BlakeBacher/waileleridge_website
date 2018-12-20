import React, { Component } from 'react';
import './Footer.css'

import Wailele_Logo_White from './../Images/Wailele_Logo_White.png'
import Facebook_icon_white from './../Images/Facebook_icon_white.svg'
import Instagram_icon_white from './../Images/Instagram_icon_white.svg'
import Twitter_icon_white from './../Images/Twitter_icon_white.svg'
import Email_icon_white from './../Images/Email_icon_white.svg'

export default class Footer extends Component {
    render() {
        return (
                <div className='Footer'>
                    <div>
                        <img alt='' src={Wailele_Logo_White} id='footer_logo'/>
                        <p className='copyrightinfo'>© 2018-2019 Bach Corperation. All rights reserved.</p>
                        <a className='copyrightinfo' href='http://www.blakerindlisbacher.com'>Designed and Created by Blake Rindlisbacher</a>
                        <div id='social_icons'>
                            <img alt='' className='social_icon' src={Facebook_icon_white}/>
                            <img alt='' className='social_icon' src={Instagram_icon_white}/>
                            <img alt='' className='social_icon' src={Twitter_icon_white}/>
                            <img alt='' className='social_icon' src={Email_icon_white}/>
                        </div> 
                    </div>
                    <div className='footer_links'>
                        <p className='footer_title'>Company</p>
                        <p className='footer_subtitle'>Clubhouse</p>
                        <p className='footer_subtitle'>Interior</p>
                        <p className='footer_subtitle'>Exterior</p>
                        <p className='footer_subtitle'>Beach</p>
                        <p className='footer_subtitle'>Parks & Recreation</p>
                        <p className='footer_subtitle'>Local Golf Courses</p>
                    </div>
                    <div className='footer_links'>
                        <p className='footer_title'>Map</p>
                        <p className='footer_subtitle'>Clubhouse</p>
                        <p className='footer_subtitle'>Interior</p>
                        <p className='footer_subtitle'>Exterior</p>
                        <p className='footer_subtitle'>Beach</p>
                        <p className='footer_subtitle'>Parks & Recreation</p>
                        <p className='footer_subtitle'>Local Golf Courses</p>
                    </div>
                    <div className='footer_links'>
                        <p className='footer_title'>Gallery</p>
                        <p className='footer_subtitle'>Clubhouse</p>
                        <p className='footer_subtitle'>Interior</p>
                        <p className='footer_subtitle'>Exterior</p>
                        <p className='footer_subtitle'>Beach</p>
                        <p className='footer_subtitle'>Parks & Recreation</p>
                        <p className='footer_subtitle'>Local Golf Courses</p>
                    </div>
                    <div className='footer_links'>
                        <p className='footer_title'>Contact</p>
                        <p className='footer_subtitle'>Wailele Office</p>
                        <p className='footer_subtitle'>Contact an Agent</p>
                        <p className='footer_subtitle'>Bach Corperation</p>
                        <p className='footer_subtitle'>Email Us</p>
                    </div>
                </div> 
        )
    }
}