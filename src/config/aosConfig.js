import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init();
  AOS.refresh();
};
