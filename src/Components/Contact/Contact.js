import React, { Component } from 'react';

import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className={this.props.contact ? 'contact_popup animated fadeIn' : 'hidden'}>>
                <div className='contact_popup_box'>

                        <button id='x' onClick={this.props.deactivatecontact}></button>


                    <form className='contact_form'>

                        <label htmlFor='firstname' className='contact_label'>Firstname</label>
                        <input type='firstname' className='contact_input'/>

                        <label htmlFor='lastname' className='contact_label'>Lastname</label>
                        <input type='lastname' className='contact_input'/>

                        <label htmlFor='email' className='contact_label'>Email</label>
                        <input type='email' className='contact_input'/>

                        <label htmlFor='phone' className='contact_label'>Phone</label>
                        <input type='phone' className='contact_input'/>

                        <label htmlFor='address' className='contact_label'>Address</label>
                        <input type='address' className='contact_input'/>

                        <label htmlFor='city' className='contact_label'>City</label>
                        <input type='city' className='contact_input'/>

                        <label htmlFor='state'>State</label>
                        <select className='contact_select'>
                            <option value='' defaultValue></option>
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

                        <label htmlFor='zipcode' className='contact_label'>Zipcode</label>
                        <input type='zipcode' className='contact_input'/>

                        <label>I am:</label>
                        <select className='contact_select'>
                            <option value='' defaultValue></option>
                            <option value=''>a Buyer</option> 
                            <option value=''>a Realtor</option>
                            <option value=''>working with a Realtor</option>
                        </select>

                        <label>I'm interested in:</label>
                        <select className='contact_select'>
                            <option value='' defaultValue></option>
                            <option value=''>1 Bedroom</option> 
                            <option value=''>2 Bedroom</option>
                            <option value=''>3 Bedroom</option>
                        </select>

                        <label>This will be my:</label>
                        <select className='contact_select'>
                            <option value='' defaultValue></option>
                            <option value=''>1st home</option> 
                            <option value=''>2nd home</option>
                            <option value=''>3+ home</option>
                        </select>

                        <label htmlFor='additional_comments' className='contact_label'>Comments</label>
                        <input type='' className='contact_input'/>

                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                            <label>Click here if you do not live in the US.</label>

                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                            <label>I would like to receive the latest news about Wailele Ridge.</label>

                    </form>
                    <div className='contact_leftside'>
                        <div className='contact_logo'></div>
                        <p>Contact Sheet</p>
                        <button className='contact_submit'>Submit</button>
                    </div> 
                </div> 
            </div> 
        )
    }
}