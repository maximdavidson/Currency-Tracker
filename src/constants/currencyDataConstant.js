import dollar from '@assets/Dollar.png';
import cdollar from '@assets/CanadianDollar.png';
import adollar from '@assets/AustralianDollar.png';
import euro from '@assets/Euro.png';
import libra from '@assets/Libra.png';
import apeso from '@assets/PesoArgentino.png';
import yen from '@assets/Yen.png';
import yuan from '@assets/Won.png';
import bitcoin from '@assets/Bitcoin.png';

export const currencyData = [
  {
    image: dollar,
    alt: 'Commercial Dollar',
    name: 'Commercial Dollar',
    key: 'USD',
  },
  {
    image: cdollar,
    alt: 'Canadian Dollar',
    name: 'Canadian Dollar',
    key: 'CAD',
  },
  {
    image: adollar,
    alt: 'Australian Dollar',
    name: 'Australian Dollar',
    key: 'AUD',
  },
  { image: euro, alt: 'Euro', name: 'Euro', key: 'EUR' },
  { image: libra, alt: 'Libra', name: 'Libra', key: 'GBP' },
  { image: apeso, alt: 'Argentine Peso', name: 'Argentine Peso', key: 'ARS' },
  { image: yen, alt: 'Yen', name: 'Yen', key: 'JPY' },
  { image: yuan, alt: 'Yuan', name: 'Yuan', key: 'CNY' },
  { image: bitcoin, alt: 'Bitcoin', name: 'Bitcoin', key: 'BTC' },
];
