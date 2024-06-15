import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
