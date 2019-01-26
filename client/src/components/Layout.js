import React, { Component } from 'react';
import Navigation from './Navigation';



class Home extends Component {
  render() {
    return (
      <div className="basic-grid">
        <div className="top-level">
          top level
        </div>
        <Navigation />
        <div className="main-content">
          {this.props.children}
        </div>
        <div className="footer">
          footer
        </div>
      </div>
      
    )
  }
}

export default Home;
