import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Timeline from './pages/Timeline/Timeline';
import Contacts from './pages/Contacts/Contacts';
import BankCard from './pages/BankCard/BankCard';
import ErrorBoundary from './utils/ErrorBoundary';
import Footer from './components/Footer/Footer';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/bank-card" element={<BankCard />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
