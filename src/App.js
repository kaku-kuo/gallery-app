import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import './App.css';
import './css/bootstrap.css';
import Navber from './components/layout/Navbar';
import GalleryState from './context/GalleryState';



const App = () => {
  return (
  <GalleryState> 
   <Router>
    <div>
       <Navber/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Switch> 
    </div>
   </Router>
 </GalleryState>
  );
}

export default App;