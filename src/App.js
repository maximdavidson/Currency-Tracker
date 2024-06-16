import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/timeline" element={<Timeline />} />
        <Route path="/bank-card" element={<BankCard />} />
        <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
