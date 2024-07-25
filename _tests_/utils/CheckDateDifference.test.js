import { checkDateDifference } from '@utils/CheckDateDifference';

describe('checkDateDifference', () => {
  it('should return true if the difference is between 30 and 50 days', () => {
    const newStartDate = new Date('2024-06-01');
    const endDate = new Date('2024-07-20');

    expect(checkDateDifference(newStartDate, endDate)).toBe(true);
  });

  it('should return true if the difference is exactly 30 days', () => {
    const newStartDate = new Date('2024-06-01');
    const endDate = new Date('2024-07-01');

    expect(checkDateDifference(newStartDate, endDate)).toBe(true);
  });

  it('should return true if the difference is exactly 50 days', () => {
    const newStartDate = new Date('2024-05-01');
    const endDate = new Date('2024-06-20');

    expect(checkDateDifference(newStartDate, endDate)).toBe(true);
  });

  it('should return false if the difference is less than 30 days', () => {
    const newStartDate = new Date('2024-06-01');
    const endDate = new Date('2024-06-29');

    expect(checkDateDifference(newStartDate, endDate)).toBe(false);
  });

  it('should return false if the difference is more than 50 days', () => {
    const newStartDate = new Date('2024-04-01');
    const endDate = new Date('2024-06-21');

    expect(checkDateDifference(newStartDate, endDate)).toBe(false);
  });

  it('should handle same start and end dates (0 days difference)', () => {
    const newStartDate = new Date('2024-06-01');
    const endDate = new Date('2024-06-01');

    expect(checkDateDifference(newStartDate, endDate)).toBe(false);
  });
});
