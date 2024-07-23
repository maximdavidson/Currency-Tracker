import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@theme/ThemeContext';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '@components/Header';
import { Home } from '@pages/Home';
import { Timeline } from '@pages/Timeline';
import { Contacts } from '@pages/Contacts';
import { BankCard } from '@pages/BankCard';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer';
import { SuccessMessageProvider } from '@context/SuccessMessageContext';

export const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        <SuccessMessageProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/bank-card" element={<BankCard />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </SuccessMessageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
