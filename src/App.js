import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Weather from './components/Weather';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Weather />
          {/* Other components using React Router should go here */}
        </div>
      </Router>
    );
  }
}

export default App;
