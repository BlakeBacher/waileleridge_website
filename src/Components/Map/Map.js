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
                    <div className='map'></div>
                    <div className='map_key'>
                        <p>Click on the building you are interested in and a list of available units in the selected building will be displayed.</p>
                        <div>
                            <p className='key_color color1'>Available</p>
                        </div>
                        <div>
                            <p className='key_color color2'>Sold Out</p>
                        </div>
                        <div>
                            <p className='key_color color3'>Under Contruction</p>
                        </div>
                        <div>
                            <p className='key_color color4'>Unavailable</p>
                        </div> 
                        <div>
                            <p className='key_color color5'>Model Unit</p>
                        </div> 
                    </div>
                    <div className='north'></div> 
                    <div className='map_instructions'></div> 
                </body>
                <Footer/>
            </div>
        )
    }
}