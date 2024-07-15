import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@theme/ThemeContext';

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with dark theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');

    let themeContext;
    const TestComponent = () => {
      themeContext = useTheme();
      return null;
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(themeContext.isDarkTheme).toBe(true);
  });

  it('toggles theme correctly', () => {
    let themeContext;
    const TestComponent = () => {
      themeContext = useTheme();
      return <button onClick={themeContext.toggleTheme}>Toggle Theme</button>;
    };

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(themeContext.isDarkTheme).toBe(true);

    fireEvent.click(getByText('Toggle Theme'));

    expect(themeContext.isDarkTheme).toBe(false);
  });

  it('updates localStorage on theme toggle', () => {
    let themeContext;
    const TestComponent = () => {
      themeContext = useTheme();
      return <button onClick={themeContext.toggleTheme}>Toggle Theme</button>;
    };

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(getByText('Toggle Theme'));

    expect(localStorage.getItem('theme')).toBe('light');
  });
});
