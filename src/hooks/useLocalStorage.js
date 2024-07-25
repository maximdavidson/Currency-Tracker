import { useState, useEffect } from 'react';

export const usePersistentState = (
  key,
  initialValue,
  useEffectSync = false,
) => {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setPersistentState = (value) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    if (useEffectSync) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error(`Error syncing localStorage key "${key}":`, error);
      }
    }
  }, [state, key, useEffectSync]);

  return [state, setPersistentState];
};
