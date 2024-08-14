import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store';

import { filterEmployees } from 'utils';

export const selectEmployees = (state: RootState) => state.employees.filteredEmployees;

export const selectEmployeeFilter = (state: RootState) => state.employeeSortFilter;

export const selectFilteredEmployees = createSelector(
  [selectEmployees, selectEmployeeFilter],
  (employees, { role, isArchived }) => {
    return filterEmployees(employees, role, isArchived);
  }
);
