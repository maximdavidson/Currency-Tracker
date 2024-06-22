class LocationService {
  static getUserLocation(successCallback, errorCallback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}

export default LocationService;
