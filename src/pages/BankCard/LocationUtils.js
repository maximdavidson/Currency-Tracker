export const generateRandomLocations = (
  userLocation,
  banks,
  maxDistance = 10,
) => {
  const R = 6371; // Radius of the Earth in kilometers

  return banks.map((bank) => {
    const randomDistance = Math.random() * maxDistance;
    const randomAngle = Math.random() * 2 * Math.PI;

    const deltaLat = (randomDistance / R) * (180 / Math.PI);
    const deltaLon =
      (randomDistance / (R * Math.cos((Math.PI * userLocation.lat) / 180))) *
      (180 / Math.PI);

    const newLat = userLocation.lat + deltaLat * Math.cos(randomAngle);
    const newLon = userLocation.lon + deltaLon * Math.sin(randomAngle);

    return { ...bank, location: { lat: newLat, lon: newLon } };
  });
};
