import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/happy">Happy</Link>
            </li>
            <li>
              <Link to="/guilty">Guilty</Link>
            </li>
            <li>
              <Link to="/sleepy">Sleepy</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/happy" componet={Happy}/>
          <Route path="/guilty" componet={Guilty}/>
          <Route path="/sleppy" componet={Sleepy}/>
        </div>
      </Router>
      // your code goes here
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
