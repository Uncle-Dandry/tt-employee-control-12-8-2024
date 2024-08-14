import type { Employee } from 'types';

const filterEmployees = (
  employees: Employee[],
  role: string,
  isArchived: boolean,
): Employee[] => {
  return employees
    .filter(employee => (role ? employee.role === role : true))
    .filter(employee => (isArchived ? employee.isArchive : !employee.isArchive));
};

export default filterEmployees;
