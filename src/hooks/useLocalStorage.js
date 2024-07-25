import { useState, useEffect, useCallback } from 'react';

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

  const setPersistentState = useCallback(
    (value) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key],
  );

  useEffect(() => {
    if (useEffectSync) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error(`Error syncing localStorage key "${key}":`, error);
      }
    }
  }, [state, key, useEffectSync]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        try {
          setState(event.newValue ? JSON.parse(event.newValue) : initialValue);
        } catch (error) {
          console.error(
            `Error reading localStorage key "${key}" from event:`,
            error,
          );
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [state, setPersistentState];
};
