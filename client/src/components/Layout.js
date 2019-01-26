import React, { Component } from 'react';
import Navigation from './Navigation';



class Home extends Component {
  render() {
    return (
      <div className="basic-grid">
        <div className="top-level">
          <h1>Horse Galore</h1>
        </div>
        <Navigation />
        <div className="main-content">
          {this.props.children}
        </div>
        <div className="footer">
          <p>Horse Galore, copyright 2019</p>
        </div>
        <div className="side-nav">
          S
        </div>
      </div>
      
    )
  }
}

export default Home;
