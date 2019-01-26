import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" className="navLink" exact={true} activeClassName="navLinkActive">Home</NavLink>
        <NavLink to="/Heeej" className="navLink" exact={true} activeClassName="navLinkActive">Test</NavLink>
      </nav>
    )
  }
}

export default Home;
