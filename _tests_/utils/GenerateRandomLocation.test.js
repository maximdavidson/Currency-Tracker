const { generateRandomLocations } = require('@utils/GenerateRandomLocation');

describe('generateRandomLocations', () => {
  it('should generate new locations for each bank', () => {
    const userLocation = { lat: 53.893009, lon: 27.567444 };
    const banks = [
      { id: 1, name: 'Bank 1' },
      { id: 2, name: 'Bank 2' },
    ];

    const newLocations = generateRandomLocations(userLocation, banks, 10);

    expect(newLocations).toHaveLength(banks.length);
    newLocations.forEach((bank, i) => {
      expect(bank.id).toEqual(banks[i].id);
      expect(bank.name).toEqual(banks[i].name);
      expect(bank.location).toHaveProperty('lat');
      expect(bank.location).toHaveProperty('lon');
      expect(bank.location.lat).not.toEqual(userLocation.lat);
      expect(bank.location.lon).not.toEqual(userLocation.lon);
    });
  });
});
