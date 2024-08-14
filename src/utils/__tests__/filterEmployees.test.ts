import type { Employee } from 'types';

import filterEmployees from '../filterEmployees';

const employees: Employee[] = [
  { id: 1, name: 'Alice', role: 'cook', isArchive: false, phone: '123-456-7890', birthday: '01.01.1990' },
  { id: 2, name: 'Bob', role: 'waiter', isArchive: true, phone: '987-654-3210', birthday: '02.02.1992' },
  { id: 3, name: 'Charlie', role: 'cook', isArchive: false, phone: '555-555-5555', birthday: '03.03.1993' },
  { id: 4, name: 'David', role: 'driver', isArchive: false, phone: '666-666-6666', birthday: '04.04.1994' },
];

describe('filterEmployees', () => {
  test('should return all employees when no filters are applied', () => {
    const result = filterEmployees(employees, '', false);
    expect(result).toEqual([
      { id: 1, name: 'Alice', role: 'cook', isArchive: false, phone: '123-456-7890', birthday: '01.01.1990' },
      { id: 3, name: 'Charlie', role: 'cook', isArchive: false, phone: '555-555-5555', birthday: '03.03.1993' },
      { id: 4, name: 'David', role: 'driver', isArchive: false, phone: '666-666-6666', birthday: '04.04.1994' }
    ]);
  });

  test('should filter employees by role', () => {
    const result = filterEmployees(employees, 'cook', false);
    expect(result).toEqual([
      { id: 1, name: 'Alice', role: 'cook', isArchive: false, phone: '123-456-7890', birthday: '01.01.1990' },
      { id: 3, name: 'Charlie', role: 'cook', isArchive: false, phone: '555-555-5555', birthday: '03.03.1993' }
    ]);
  });

  test('should filter employees by archive status', () => {
    const result = filterEmployees(employees, '', true);
    expect(result).toEqual([
      { id: 2, name: 'Bob', role: 'waiter', isArchive: true, phone: '987-654-3210', birthday: '02.02.1992' }
    ]);
  });

  test('should filter employees by role and archive status', () => {
    const result = filterEmployees(employees, 'cook', true);
    expect(result).toEqual([]);
  });

  test('should return an empty array if no employees match the filters', () => {
    const result = filterEmployees(employees, 'driver', true);
    expect(result).toEqual([]);
  });
});
