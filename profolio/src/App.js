import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProfolioPage from './pages/ProfolioPage'
import Background from './components/Background';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
      	  <Background />
          <LandingPage />
          <AboutPage />
          <ProfolioPage />
      </div>
    );
  }
}

export default App;
