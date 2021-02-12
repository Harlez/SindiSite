import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Router path='/sign-up' component={SignUp}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
