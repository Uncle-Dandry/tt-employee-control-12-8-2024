import { PhoneRusRegex, DateRegex } from '../regex';

describe('PhoneRusRegex', () => {
  test('valid phone number', () => {
    expect(PhoneRusRegex.test('+7 (872) 568-2916')).toBe(true);
  });

  test('invalid phone number', () => {
    expect(PhoneRusRegex.test('123')).toBe(false);
  });
});

describe('DateRegex', () => {
  test('valid date', () => {
    expect(DateRegex.test('01.01.1990')).toBe(true);
  });

  test('invalid date', () => {
    expect(DateRegex.test('1990-01-01')).toBe(false);
  });
});
