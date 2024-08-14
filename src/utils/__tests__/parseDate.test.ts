import parseDate from '../parseDate';

describe('parseDate', () => {
  test('should correctly parse a valid date string', () => {
    const dateString: string = '15.08.2024';
    const result = parseDate(dateString);
    const expectedDate = new Date(2024, 7, 15);

    expect(result).toEqual(expectedDate);
  });

  test('should correctly handle a date string with a single-digit day and month', () => {
    const dateString: string = '1.1.2024';
    const result = parseDate(dateString);
    const expectedDate = new Date(2024, 0, 1);

    expect(result).toEqual(expectedDate);
  });

  test('should handle invalid date string', () => {
    const dateString: string = '31.02.2024';
    const result = parseDate(dateString);
    const expectedDate = new Date(2024, 1, 31);

    expect(result.getDate()).toBe(expectedDate.getDate());
    expect(result.getMonth()).toBe(expectedDate.getMonth());
    expect(result.getFullYear()).toBe(expectedDate.getFullYear());
  });

  test('should handle an empty date string', () => {
    const dateString: string = '';
    const result = parseDate(dateString);
    const expectedDate = new Date(NaN);

    expect(result.getTime()).toBeNaN();
  });
});
