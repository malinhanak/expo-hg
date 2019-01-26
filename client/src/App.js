import React, { Component } from 'react';
import Layout from './components/Layout'
import routes from './routes'

class App extends Component {
  render() {
    return <Layout>{routes}</Layout>;
  }
}

export default App;
