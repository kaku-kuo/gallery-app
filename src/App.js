import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import About from './components/pages/About';
import Home from './components/pages/Home';
import PhotoGrapher from './components/PhotoGrapher/PhotoGrapher'
import './App.css';
import './css/bootstrap.css';
import Navber from './components/layout/Navbar';
import GalleryState from './context/GalleryState';


library.add(far,fab,fas);

const App = () => {
  return (
  <GalleryState> 
   <Router>
    <div>
       <Navber/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/photoGrapher/:username' component={PhotoGrapher}/>
      </Switch> 
    </div>
   </Router>
 </GalleryState>
  );
}

export default App;