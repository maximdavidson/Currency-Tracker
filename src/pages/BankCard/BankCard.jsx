import React, { Component } from 'react';
import Search from './components/Search/Search';
import Map from './components/Map/Map';
import LocationService from './LocationService'; // services
import { generateRandomLocations } from './LocationUtils'; //utils

export class BankCard extends Component {
  state = {
    userLocation: null,
    banks: [
      { id: 1, name: 'Bank A', address: 'Address A' },
      { id: 2, name: 'Bank B', address: 'Address B' },
      { id: 3, name: 'Bank C', address: 'Address C' },
      { id: 4, name: 'Bank D', address: 'Address D' },
      { id: 5, name: 'Bank E', address: 'Address E' },
      { id: 6, name: 'Bank F', address: 'Address F' },
      { id: 7, name: 'Bank G', address: 'Address G' },
      { id: 8, name: 'Bank H', address: 'Address H' },
      { id: 9, name: 'Bank I', address: 'Address I' },
    ],
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

  render() {
    const { banks, userLocation } = this.state;

    return (
      <div>
        <Search />
        {userLocation && <Map userLocation={userLocation} banks={banks} />}
      </div>
    );
  }
}

export default BankCard;
