import { formatDate } from '@utils/utilFormatDate';

describe('formatDate', () => {
  it('should format date string to 12-hour time format', () => {
    const dateString = '2024-07-22T15:45:00Z';
    const formattedDate = formatDate(dateString);

    expect(formattedDate).toBe('3:45 PM');
  });

  it('should handle midnight correctly', () => {
    const dateString = '2024-07-22T00:00:00Z';
    const formattedDate = formatDate(dateString);

    expect(formattedDate).toBe('12:00 AM');
  });

  it('should handle noon correctly', () => {
    const dateString = '2024-07-22T12:00:00Z';
    const formattedDate = formatDate(dateString);

    expect(formattedDate).toBe('12:00 PM');
  });

  it('should handle invalid date input gracefully', () => {
    const dateString = 'invalid-date-string';
    const formattedDate = formatDate(dateString);

    expect(formattedDate).toBe('Invalid Date');
  });
});
