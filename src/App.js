import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@theme/ThemeContext';
import GlobalStyles from './GlobalStyles';
import Header from '@components/Header/Header';
import { Home } from '@pages/Home/Home';
import Timeline from '@pages/Timeline/Timeline';
import { Contacts } from '@pages/Contacts/Contacts';
import { BankCard } from '@pages/BankCard/BankCard';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer/Footer';
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
