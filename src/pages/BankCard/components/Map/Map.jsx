import React from 'react';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps';
import { Wrapper, MapContainer, StyledYandexMap } from './styles';

const Map = ({ banks, userLocation }) => {
  const mapCenter = userLocation
    ? [userLocation.lat, userLocation.lon]
    : [40.712776, -74.005974];

  return (
    <Wrapper>
      <MapContainer>
        <YMaps query={{ apikey: 'c432584d-e2fa-4fe4-ad7d-7a3d682621cbs' }}>
          <StyledYandexMap state={{ center: mapCenter, zoom: 12 }}>
            <Placemark
              geometry={mapCenter}
              properties={{
                hintContent: 'You are here',
                balloonContent: 'This is your current location',
              }}
              options={{
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50',
              }}
            />
            {banks.map(
              (bank) =>
                bank.location && (
                  <Placemark
                    key={bank.id}
                    geometry={[bank.location.lat, bank.location.lon]}
                    properties={{
                      hintContent: bank.name,
                      balloonContent: `<strong>${bank.name}</strong><br/>${bank.address}`,
                    }}
                    options={{
                      preset: 'islands#redIcon',
                    }}
                  />
                ),
            )}
          </StyledYandexMap>
        </YMaps>
      </MapContainer>
    </Wrapper>
  );
};

export default Map;
