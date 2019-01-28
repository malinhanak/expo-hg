import React, { Component } from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Home extends Component {
  render() {
    return (
      <div className="basic-grid">
        <article>Horse Galore <FontAwesomeIcon className="menu-options" icon="angle-down" /></article>
        <div className="top-level">
          Some page headline!
          <input className="main-search" type="text" name="main-searchbar" placeholder="Sökfält..." />
        </div>
        <Navigation />
        <div className="main-content">
          <div className="content-box">
            {this.props.children}
          </div>
        </div>
        <div className="footer">
          <p>Horse Galore, copyright 2019</p>
        </div>
        <div className="side-nav-top">
          <FontAwesomeIcon id="menu-icon" icon="user" />
        </div>
        <div className="side-nav">
          {/* This should be refactored into a component on it own, rendering all user icons for this side
              nav view. The whole side-nav might also become a stand alone componen. */}
          <FontAwesomeIcon className="side-menu-icon" icon="home" title="Stallet" />
          <FontAwesomeIcon className="side-menu-icon" icon="dollar-sign" title="Banken" />
          <FontAwesomeIcon className="side-menu-icon bottom" icon="envelope" title="Meddelanden" />
          <FontAwesomeIcon className="side-menu-icon" icon="cog" />
        </div>
      </div>
      
    )
  }
}

export default Home;
