import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Wrapper, MapContainer } from './styles';
import PropTypes from 'prop-types';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.props.userLocation.lon, this.props.userLocation.lat],
      zoom: 12,
    });

    new mapboxgl.Marker({ color: 'blue' })
      .setLngLat([this.props.userLocation.lon, this.props.userLocation.lat])
      .setPopup(new mapboxgl.Popup().setText('You are here'))
      .addTo(this.map);

    this.map.on('load', () => {
      if (this.map.getSource('banks')) {
        this.map.removeSource('banks');
      }

      this.map.addSource('banks', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: this.props.banks
            .filter(
              (bank) => bank.location && bank.location.lon && bank.location.lat,
            )
            .map((bank) => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [bank.location.lon, bank.location.lat],
              },
              properties: {
                title: bank.name,
                description: bank.currencies,
              },
            })),
        },
      });

      this.props.banks.forEach((bank) => {
        if (bank.location && bank.location.lon && bank.location.lat) {
          new mapboxgl.Marker({ color: 'red' })
            .setLngLat([bank.location.lon, bank.location.lat])
            .setPopup(
              new mapboxgl.Popup().setHTML(
                `<strong>${bank.name}</strong><br/>${bank.currencies}`,
              ),
            )
            .addTo(this.map);
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.banks !== this.props.banks) {
      this.componentDidMount();
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <Wrapper>
        <MapContainer ref={this.mapContainer} />
      </Wrapper>
    );
  }
}

Map.propTypes = {
  userLocation: PropTypes.shape({
    lon: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
  }).isRequired,
  banks: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        lon: PropTypes.number,
        lat: PropTypes.number,
      }),
      name: PropTypes.string,
      currencies: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};
