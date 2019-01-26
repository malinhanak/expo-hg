import React, { Component } from 'react';
import Navigation from './Navigation';



class Home extends Component {
  render() {
    return (
      <>
      <Navigation />
      <div>{this.props.children}</div>
      </>
      
    )
  }
}

export default Home;
