import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
