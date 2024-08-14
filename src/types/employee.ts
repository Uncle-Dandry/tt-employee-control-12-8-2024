export type EmployeeRole = 
  'cook'
  | 'waiter'
  | 'driver';

export interface Employee {
  isArchive: boolean;
  id: number;
  name: string;
  role: EmployeeRole;
  phone: string;
  birthday: string;
}

export type SortOption = 'name' | 'birthday';

export type SortDirection = 'asc' | 'desc';
