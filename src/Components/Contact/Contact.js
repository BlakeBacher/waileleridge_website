import React, { Component } from 'react';

import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <form className='contact_info'>
                <button id='x' onClick={this.props.deactivatecontact}></button> 
                <label for='firstname' className='contact_label'>Firstname</label>
                    <input type='firstname' className='contact_input'/>
                <label for='lastname' className='contact_label'>Lastname</label>
                    <input type='lastname' className='contact_input'/>
                <label for='email' className='contact_label'>Email</label>
                    <input type='email' className='contact_input'/>
                <label for='phone' className='contact_label'>Phone</label>
                    <input type='phone' className='contact_input'/>
                <label for='address' className='contact_label'>Address</label>
                    <input type='address' className='contact_input'/>
                <label for='city' className='contact_label'>City</label>
                    <input type='city' className='contact_input'/>
                <label for='state'>State</label>
                <select>
                    <option value='' selected></option>
                    <option value=''>Alabama</option>
                    <option value=''>Alaska</option> 
                    <option value=''>Arizona</option> 
                    <option value=''>Arkansas</option> 
                    <option value=''>California</option> 
                    <option value=''>Colorado</option> 
                    <option value=''>Connecticut</option> 
                    <option value=''>Delaware</option> 
                    <option value=''>Florida</option> 
                    <option value=''>Georgia</option> 
                    <option value=''>Hawaii</option> 
                    <option value=''>Idaho</option> 
                    <option value=''>Illinois</option>
                    <option value=''>Indiana</option> 
                    <option value=''>Iowa</option> 
                    <option value=''>Kansas</option> 
                    <option value=''>Kentucky</option> 
                    <option value=''>Louisiana</option> 
                    <option value=''>Maine</option> 
                    <option value=''>Maryland</option> 
                    <option value=''>Massachusetts</option> 
                    <option value=''>Michigan</option> 
                    <option value=''>Minnesota</option> 
                    <option value=''>Mississippi</option> 
                    <option value=''>Missouri</option> 
                    <option value=''>Montana</option>
                    <option value=''>Nebraska</option> 
                    <option value=''>Nevada</option> 
                    <option value=''>New Hampshire</option> 
                    <option value=''>New Jersey</option> 
                    <option value=''>New Mexico</option> 
                    <option value=''>New York</option> 
                    <option value=''>North Carolina</option> 
                    <option value=''>North Dakota</option> 
                    <option value=''>Ohio</option> 
                    <option value=''>Oklahoma</option> 
                    <option value=''>Oregon</option> 
                    <option value=''>Pennsylvania</option>
                    <option value=''>Rhode Island</option>
                    <option value=''>South Carolina</option>
                    <option value=''>South Dakota</option> 
                    <option value=''>Tennessee</option> 
                    <option value=''>Texas</option> 
                    <option value=''>Utah</option> 
                    <option value=''>Vermont</option> 
                    <option value=''>Virginia</option> 
                    <option value=''>Washington</option> 
                    <option value=''>West Virginia</option> 
                    <option value=''>Wisconsin</option> 
                    <option value=''>Wyoming</option>
                </select>
                <label for='zipcode' className='contact_label'>Zipcode</label>
                    <input type='zipcode' className='contact_input'/>
                <label>I am a</label>
                <select>
                    <option value='' selected></option>
                    <option value=''>Buyer</option>
                    <option value=''>Realtor</option>
                    <option value=''>Working with a Realtor</option>
                </select>
                <label>I'm looking for a</label>
                <select>
                    <option value='' selected></option>
                    <option value=''>1 Bedroom</option> 
                    <option value=''>2 Bedroom</option>
                    <option value=''>3 Bedroom</option>
                </select>
                <label>This will be my</label>
                <select>
                    <option value='' selected></option>
                    <option value=''>First Home</option> 
                    <option value=''>Second Home</option>
                    <option value=''>3+ Home</option>
                </select>
                <input type='checkbox' className=''/>
                <label for='checkbox'>I would like to receive the latest news about Wailele Ridge.</label>    
                <label for='additional_comments' className='contact_label'>Additional Comments</label>
                <input type='' className='contact_input'/>
            </form>
        )
    }
}