import { useEffect } from 'react';
import { initAOS } from '@config/aosConfig';

export const useAOS = () => {
  useEffect(() => {
    initAOS();
  }, []);
};
