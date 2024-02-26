// Weather.js
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import NotFound from './404';
import './Weather.css'; // Import your CSS file for styling

class Weather extends Component {
  render() {
    return (
      <div className="weather-app">
        <Header />
        <div className="content">
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>}/>
            
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Weather;
