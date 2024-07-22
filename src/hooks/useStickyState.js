import { useState, useEffect } from 'react';

export const useStickyState = (defaultValue, key) => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Failed to parse localStorage data:', error);
    }

    return defaultValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save data to localStorage:', error);
    }
  }, [state, key]);

  return [state, setState];
};
