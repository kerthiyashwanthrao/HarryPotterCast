import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "./App.css"

import Header from "./Header"
import Home from "./Home"
import Characters from "./Characters"
import CharacterById from "./CharacterById"
import Students from "./Students"
import Staff from "./Staff"
import House from "./House"
import Explore from './Explore'
import About from './About'
import Spells from './Spells'

const App = () => (
  <>
  <BrowserRouter>
  <div className='appContainer' >
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/character/:id" component={CharacterById} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/staff" component={Staff} />
      <Route exact path="/about" component={About} />
      <Route exact path="/house/:house" component={House} />
      <Route exact path="/spells" component={Spells} />
    </Switch>
  </div> 
  </BrowserRouter>
  </>
)
    
export default App;
