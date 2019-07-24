import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Auctions from '../containers/Auctions.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import Home from '../containers/Home.jsx';
import NewAuction from '../containers/NewAuction.jsx';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>This is navbar</div>
        <Link to="/">Home</Link>
        <Link to="/auctions">Browse Auctions</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/auctions/new">Create auction</Link>
      </div>
    )
  }
}