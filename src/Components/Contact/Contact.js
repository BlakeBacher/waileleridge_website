import React, { Component } from 'react';

import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'



export default class Contact extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <input placeholder='First Name' type='' className=''/>
                <input placeholder='Last Name' type='' className=''/>
                <input placeholder='Email' type='' className=''/>
                <input placeholder='Phone' type='' className=''/>
                <input placeholder='Address' type='' className=''/>
                <input placeholder='City' type='' className=''/>
                <input placeholder='State' type='' className=''/>
                <input placeholder='Zip Code' type='' className=''/>
                <input placeholder='' type='' className=''/>
                <input placeholder='' type='' className=''/>
                <input placeholder='' type='' className=''/>
                <input placeholder='Additional comments...' type='' className=''/>
                <Footer/>
            </div>
        )
    }
}