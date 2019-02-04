import React, { Component } from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <section className="basic-grid">
        <div className="top-level">
          <article className="business">Horse Galore <FontAwesomeIcon className="menu-options" icon="angle-down" /></article>
          <input className="main-search" type="text" name="main-searchbar" placeholder="Sökfält..." />
        </div>
        <Navigation />
        <div className="main-content">
          {this.props.children}
        </div>
        <div className="footer">
          <div>
            <p>Horse Galore, copyright 2019</p>
          </div>
        </div>
      </section>
      
    )
  }
}

export default Home;
