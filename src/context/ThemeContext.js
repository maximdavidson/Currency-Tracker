import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ownTheme } from '../theme/themes';
import { usePersistentState } from '@hooks/useLocalStorage';
import merge from 'lodash.merge';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = usePersistentState(true, 'theme', true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const theme = merge({}, ownTheme, currentTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
