import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

import Home from './components/Pages/Home'
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
        <Router path='/sign-up' component={SignUp}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
