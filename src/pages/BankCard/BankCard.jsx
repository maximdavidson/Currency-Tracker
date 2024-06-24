import React, { Component } from 'react';
import Search from './components/Search/Search';
import Map from './components/Map/Map';
import LocationService from '../../services/LocationService';
import { generateRandomLocations } from './LocationUtils';

export class BankCard extends Component {
  state = {
    userLocation: null,
    banks: [
      {
        id: 1,
        name: 'Bank A',
        address: 'Address A',
        currencies: ['Commercial Dollar', 'Euro'],
      },
      {
        id: 2,
        name: 'Bank B',
        address: 'Address B',
        currencies: ['Canadian Dollar', 'Euro'],
      },
      {
        id: 3,
        name: 'Bank C',
        address: 'Address C',
        currencies: ['Australian Dollar', 'Euro'],
      },
      {
        id: 4,
        name: 'Bank D',
        address: 'Address D',
        currencies: ['Libra', 'Euro'],
      },
      { id: 5, name: 'Bank E', address: 'Address E', currencies: ['Euro'] },
      {
        id: 6,
        name: 'Bank F',
        address: 'Address F',
        currencies: ['Argentinian Peso', 'Euro'],
      },
      {
        id: 7,
        name: 'Bank G',
        address: 'Address G',
        currencies: ['Yen', 'Euro'],
      },
      {
        id: 8,
        name: 'Bank H',
        address: 'Address H',
        currencies: ['Yuan', 'Euro'],
      },
      { id: 9, name: 'Bank I', address: 'Address I', currencies: ['Euro'] },
    ],
    filteredBanks: [],
  };

  componentDidMount() {
    LocationService.getUserLocation(
      this.onSuccessGetCurrentPosition,
      this.onErrorGetCurrentPosition,
    );
  }

  onSuccessGetCurrentPosition = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState(
      { userLocation: { lat: latitude, lon: longitude } },
      this.generateBankLocations,
    );
  };

  onErrorGetCurrentPosition = (error) => {
    console.error('Error getting geolocation:', error);
  };

  generateBankLocations = () => {
    const { userLocation, banks } = this.state;
    const randomLocations = generateRandomLocations(userLocation, banks);
    this.setState({ banks: randomLocations });
  };

  handleSearch = (searchTerm) => {
    const { banks } = this.state;
    const filteredBanks = banks.filter((bank) =>
      bank.currencies.includes(searchTerm),
    );
    this.setState({ filteredBanks });
  };

  render() {
    const { filteredBanks, userLocation } = this.state;
    const banksToDisplay =
      filteredBanks.length > 0 ? filteredBanks : this.state.banks;

    return (
      <div>
        <Search onSearch={this.handleSearch} />
        {userLocation && (
          <Map userLocation={userLocation} banks={banksToDisplay} />
        )}
      </div>
    );
  }
}

export default BankCard;
