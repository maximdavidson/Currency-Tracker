import React, { Component } from 'react';
import { Search } from './components/Search';
import { Map } from './components/Map';
import { LocationService } from '@services/LocationService';
import { generateRandomLocations } from '@utils/generateRandomLocation';
import { banks } from '@constants/bankData';
import { Loading } from '@components/Loading/Loading';

export class BankCard extends Component {
  state = {
    userLocation: null,
    banks: banks,
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
        {userLocation !== null ? (
          <Map userLocation={userLocation} banks={banksToDisplay} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
