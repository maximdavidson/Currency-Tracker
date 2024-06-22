import React, { Component } from 'react';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps';
import { Wrapper } from './styles';

class Map extends Component {
  render() {
    const { banks, userLocation } = this.props;

    const mapCenter = userLocation
      ? [userLocation.lat, userLocation.lon]
      : [40.712776, -74.005974];

    const mapStyles = {
      width: '1000px',
      height: '500px',
    };

    return (
      <Wrapper>
        {' '}
        <div style={mapStyles}>
          <YMaps query={{ apikey: 'c432584d-e2fa-4fe4-ad7d-7a3d682621cbs' }}>
            <YandexMap
              defaultState={{ center: mapCenter, zoom: 12 }}
              style={mapStyles}
            >
              {banks.map((bank, index) => (
                <Placemark
                  key={index}
                  geometry={[bank.location.lat, bank.location.lon]}
                  properties={{
                    hintContent: bank.name,
                    balloonContent: `<strong>${bank.name}</strong><br/>${bank.address}`,
                  }}
                />
              ))}
            </YandexMap>
          </YMaps>
        </div>
      </Wrapper>
    );
  }
}

export default Map;
