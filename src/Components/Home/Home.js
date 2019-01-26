import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';



import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'
import './Home.css'
import './../../vivify.css'

import downarrow_blue from './../Images/downarrow_blue.png'
import beaches from './../Images/Places/Beaches.jpg'
import parks from './../Images/Places/Parks.jpg'
import shopping from './../Images/Places/Shopping.jpg'
import dining from './../Images/Places/Dining.png'
import golf from './../Images/Places/Golf.png'
import all from './../Images/Places/All.jpg'

import company_icon from './../Images/Icons/company_icon.png'
import map_icon from './../Images/Icons/map_icon.png'
import condo_icon from './../Images/Icons/condo_icon.png'



export default class Home  extends Component {
    constructor(){
        super()

        this.state={
            places: 'beaches',
            active: false,
        }
    }
    scrollFunction(){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
            this.setState({active: true})
        } else {
            this.setState({active:false})
        }
    }
    handlescroll(){
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }
    changePlace(e){
        this.setState({places: e.target.value})
    }
    
    render() {
        AOS.init();
        window.onscroll = () => {this.scrollFunction()}
        const AnimatedTypingComponent = () => (
            <Typing loop cursorClassName='cursor'>
              <span className='highlightblue'>places</span>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={15} />
              <span className='highlightblue'>beaches</span>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={15} />
              <span className='highlightblue'>parks</span>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={15} />
              <span className='highlightblue'>shopping</span>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={15} />
              <span className='highlightblue'>dining</span>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={15} />
              <span className='highlightblue'>golf courses</span>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={15}/>
            </Typing>
          );
          return (
              <div>
                <Nav active = {this.state.active}/>
                <div>
                    <h1 id='maintitle'>Immerse yourself in <span className='highlightblack'>paradise.</span></h1>
                    <h6 id='subtitle'>Located in West Maui, just minutes from dining and shopping in historic Lahaina town and Ka'anapali, you’ll find a very special Maui real estate community named Wailele Ridge.</h6>
                    <div id='arrow_box' onClick={() => {this.handlescroll()}}>
                        <img alt='' src={downarrow_blue} className='downarrow passing'/>
                    </div> 
                    <div id='background1'></div> 
                    <div className='section1'>
                        <div>
                            <h5 style={{margin:'20px'}}>Our Mission</h5>
                            <p style={{padding:'0px 15vw 0px 15vw'}}>Our mission is to provide residents a desirable quality of life in a safe apartment community, to provide employees with opportunities for personal and professional development, and to provide property owners with profitable real estate assets.</p>
                        </div> 
                        <div className='infobox_main'>
                            <div className='infobox'data-aos="fade-down-right"data-aos-delay="1000">
                                <img alt='' src={condo_icon} className='info_icon'/>
                                <h4><span className='highlightblue_small'>150+ </span>Condominiums</h4>
                                <p style={{padding:'0px 50px 0px 50px'}}>With over 150 condos planned for construction. We have a wide variety to choose from. Anything from a 1 Bedroom & 1 Bathroom condo to a <span className='bold'>5 Bedrooms & 3 Bathrooms</span> with a 2 car garage. With our wide variety of condos to choose. We guarantee that we have a condo for you.</p>
                                <button className='primarybutton' style={{marginTop:'30px'}}>Available</button>
                            </div>
                            <div className='infobox'data-aos="fade-down"data-aos-delay="1000">
                                <img alt='' src={map_icon} className='info_icon'/>
                                <h4><span className='highlightblue_small'>20+ </span>Buildings Available</h4>
                                <p style={{padding:'0px 50px 0px 50px'}}>More than 20 buildings spead out accross almost <span className='bold'>10 acres</span> of land with only a 5 minute drive to the nearest beach or the nearest golf course.  Wailele Ridge is the best way to enjoy Maui Island. Look at our map for your new paradise condo.</p>
                                <button className='primarybutton' style={{marginTop:'30px'}}>Site Map</button>
                            </div> 
                                <div className='infobox'data-aos="fade-down-left"data-aos-delay="1000">
                                <img alt='' src={company_icon} className='info_icon'/>
                                <h4>Over <span className='highlightblue_small'>40 </span>years of Excellence</h4>
                                <p style={{padding:'0px 50px 0px 50px'}}>Founded by President and CEO, Dale L. Rindlisbacher in 1976. Forty years later, what began as a family business with just two employees, has grown to become a <span className='bold'>highly reputable</span> property management and development company.</p>
                                <button className='primarybutton' style={{marginTop:'30px'}}>Bach Corperation</button>
                            </div>  
                        </div> 
                    </div>
                    <div id='background2'></div>
                    <div className='section2'> 
                        <div style={{width:'35%'}}>
                            <h3>Check out {AnimatedTypingComponent()} near Wailele Ridge.</h3>
                            <div className='placesnav'>
                                <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places === 'all'? 'primarybuttonactive':'primarybutton'}value='all'>All</button>
                                <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places ===  'beaches'? 'primarybuttonactive' : 'primarybutton'} value='beaches'>Beaches</button>
                                <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places ===  'parks'? 'primarybuttonactive' : 'primarybutton'} value='parks'>Parks</button>
                                <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places==='shopping'?'primarybuttonactive':'primarybutton'} value='shopping'>Shopping</button>
                                <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places==='dining'?'primarybuttonactive':'primarybutton'} value='dining'>Dining</button>
                                <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places==='golf'?'primarybuttonactive':'primarybutton'} value='golf'>Golf</button>
                            </div> 
                        </div> 
                            {this.state.places === 'beaches' ?
                                <img alt='' src={beaches} className='places'/>
                                :
                            this.state.places === 'parks' ?
                                <img alt='' src={parks} className='places'/>
                                :
                            this.state.places === 'shopping' ?
                                <img alt='' src={shopping} className='places'/>
                                :
                            this.state.places === 'dining' ?
                                <img alt='' src={dining} className='places'/>
                                :  
                            this.state.places === 'golf' ?
                                <img alt='' src={golf} className='places'/>
                                :
                            this.state.places === 'all' ?
                                <img alt='' src={all} className='places'/>
                                :
                            <div></div> 
                            }   
                    </div>
                    <div id='background3'></div>
                </div>
                <Footer/>
            </div>
        )
    }
}

