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
            <div>
                <div className='Footer'>
                    <div>
                        <img alt='' src={Wailele_Logo_White} id='footer_logo'/>
                        <p>© 2018-2019 Bach Corperation. All rights reserved.</p>
                        <p>Designed and Created by Blake Rindlisbacher</p>
                        <div id='social_icons'>
                            <img alt='' className='social_icon' src={Facebook_icon_white}/>
                            <img alt='' className='social_icon' src={Instagram_icon_white}/>
                            <img alt='' className='social_icon' src={Twitter_icon_white}/>
                            <img alt='' className='social_icon' src={Email_icon_white}/>
                        </div> 
                    </div>
                    <div>
                        items
                    </div>
                    <div>
                        items
                    </div>
                    <div>
                        items
                    </div>
                    <div>
                        items
                    </div>
                </div> 
            </div>
        )
    }
}