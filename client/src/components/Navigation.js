import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" className="navLink" exact={true} activeClassName="navLinkActive">Start</NavLink>
        <NavLink to="/webshop" className="navLink" exact={true} activeClassName="navLinkActive">Shoppen</NavLink>
      </nav>
    )
  }
}

export default Home;
