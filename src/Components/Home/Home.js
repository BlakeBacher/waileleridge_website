import React, { Component } from 'react';


import Nav from './../Nav/Nav'
import Footer from './../Footer/Footer'
import './Home.css'

import downarrow_blue from './../Images/downarrow_blue.png'
import beaches from './../Images/Places/Beaches.jpg'
import parks from './../Images/Places/Parks.jpg'
import shopping from './../Images/Places/Shopping.jpg'
import dining from './../Images/Places/Dining.png'
import golf from './../Images/Places/Golf.png'
import all from './../Images/Places/All.jpg'



export default class Home  extends Component {
    constructor(){
        super()

        this.state={
            places:'beaches'
        }
    }

    handlescroll(){
        window.scrollTo({
            top: 630,
            behavior: 'smooth'
          });
    }
    changePlace(e){
        this.setState({places: e.target.value})
    }

    render() {
        const content =()=>{
            const message =["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I AM AT YOUR SERVICE"];
            let i =0 ;
            let jsxArray = [];
            for(i=0; i<message.length;i++){
              jsxArray.push(
                <div className='background'>
                  <h4 className='typewriter'>
                      {message[i]}    
                  </h4>
                </div>
               );
            }
            return jsxArray;
          }
        return (
            <div>
                <Nav/>
                <body>
                    <h1 id='maintitle'>Immerse yourself in <span className='highlightblack'>paradise</span></h1>
                    <h6 id='subtitle'>Located in West Maui, just minutes from dining and shopping in historic Lahaina town and Ka'anapali, you’ll find a very special Maui real estate community named Wailele Ridge.</h6>
                    <div id='arrow_box' onClick={() => {this.handlescroll()}}>
                        <img alt='' src={downarrow_blue} className='downarrow passing'/>
                    </div> 
                    <div id='background1'></div> 
                    <div className='section1'>
                        <p>
                    {content()}
                            Home to clear blue oceans and lush green valleys, West Maui is truly the definition of paradise. Here you’ll find a blend of fascination hawaiian culture, memorable adventures and modern-day conveniences. Experience world-class golf courses, wonderful shopping and unique dining options. For those with a taste for nature and adventure, there are beautiful beaches and breathtaking waterfalls to explore and find. With all there is to do in West Maui, when you come here, you’ll see, hear and feel the spirit of Aloha in every way. From the luxurious Kapalua and Ka’anapali Resorts to historic Lahaina town, paradise and adventure await you at every turn.
                        </p>
                    </div>
                    <div id='background2'></div>
                    <div className='section2'> 
                    <div style={{width:'35%'}}>
                        <h1>Check out <span className='highlightblue'>places</span> near by Wailele Ridge!</h1>
                        <div className='placesnav'>
                            <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places === 'all'? 'placesbuttonactive':'placesbutton'}value='all'>All</button>
                            <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places ===  'beaches'? 'placesbuttonactive' : 'placesbutton'} value='beaches'>Beaches</button>
                            <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places ===  'parks'? 'placesbuttonactive' : 'placesbutton'} value='parks'>Parks</button>
                            <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places==='shopping'?'placesbuttonactive':'placesbutton'} value='shopping'>Shopping</button>
                            <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places==='dining'?'placesbuttonactive':'placesbutton'} value='dining'>Dining</button>
                            <button onClick={(e)=>{this.changePlace(e)}} className={this.state.places==='golf'?'placesbuttonactive':'placesbutton'} value='golf'>Golf</button>
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
                </body>
                <Footer/>
            </div>
        )
    }
}

