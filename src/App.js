import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '@components/Header';
import { Home } from '@pages/Home';
import { Timeline } from '@pages/Timeline';
import { Contacts } from '@pages/Contacts';
import { BankCard } from '@pages/BankCard';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer';
import { SuccessMessageProvider } from '@context/SuccessMessageContext';
import { ROUTES } from './constants/routes';

export const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        <SuccessMessageProvider>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.TIMELINE} element={<Timeline />} />
            <Route path={ROUTES.BANK_CARD} element={<BankCard />} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          </Routes>
          <Footer />
        </SuccessMessageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
