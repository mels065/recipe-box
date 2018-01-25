import React, { Component } from 'react';

import Header from '../layouts/Header';
import OverlayWindow from '../layouts/OverlayWindow';
import Recipes from '../layouts/Recipes';
import Footer from '../layouts/Footer';

import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OverlayWindow />
        <Recipes />
        <Footer />
      </div>
    );
  }
}

export default App;
