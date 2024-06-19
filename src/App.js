import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ErrorBoundary from './utils/ErrorBoundary';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/timeline" element={<Timeline />} />
        <Route path="/bank-card" element={<BankCard />} />
        <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
