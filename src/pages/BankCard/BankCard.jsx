import React, { Component } from 'react';
import Search from './components/Search/Search';
import Map from './components/Map/Map';

export class BankCard extends Component {
  state = {
    userLocation: null,
    banks: [
      {
        id: 1,
        name: 'Bank A',
        address: 'Address A',
        location: { lat: 55.751574, lon: 37.573856 },
      },
      {
        id: 2,
        name: 'Bank B',
        address: 'Address B',
        location: { lat: 55.761574, lon: 37.583856 },
      },
    ],
  };

  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.onSuccessGetCurrentPosition,
        this.onErrorGetCurrentPosition,
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  onSuccessGetCurrentPosition = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ userLocation: { lat: latitude, lon: longitude } });
  };

  onErrorGetCurrentPosition = (error) => {
    console.error('Error getting geolocation:', error);
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
