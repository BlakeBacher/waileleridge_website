import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home/Home'
import Map from './Components/Map/Map'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'


export default(

    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/map' component={Map}/>
        <Route path='/about' component={About}/>
        <Route path='/gallery' component={Gallery}/>
    </Switch>

)