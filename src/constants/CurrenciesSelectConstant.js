import dollar from '@assets/Dollar.png';
import cdollar from '@assets/CanadianDollar.png';
import adollar from '@assets/AustralianDollar.png';
import euro from '@assets/Euro.png';
import libra from '@assets/Libra.png';
import apeso from '@assets/PesoArgentino.png';
import yen from '@assets/Yen.png';
import yuan from '@assets/Won.png';
import bitcoin from '@assets/Bitcoin.png';

const currencies = [
  {
    name: 'Dollar',
    image: dollar,
    code: 'USD',
    description: 'Commercial dollar',
  },
  { name: 'Euro', image: euro, code: 'EUR', description: 'Euro' },
  { name: 'Yen', image: yen, code: 'JPY', description: 'Yen' },
  { name: 'Bitcoin', image: bitcoin, code: 'BTC', description: 'Bitcoin' },
];

export default currencies;
