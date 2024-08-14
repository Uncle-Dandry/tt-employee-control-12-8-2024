import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Employee } from 'types';

interface EmployeeState {
  isLoading: boolean;
  employees: Employee[];
  filteredEmployees: Employee[];
}

const initialState: EmployeeState = {
  isLoading: false,
  employees: [],
  filteredEmployees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = state.employees.map(emp =>
        emp.id === action.payload.id ? action.payload : emp
      );
    },
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
      state.filteredEmployees = [...action.payload];
    },
    setFilteredEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.filteredEmployees = action.payload;
    },
  },
});

export const {
  addEmployee,
  updateEmployee,
  setEmployees,
  setFilteredEmployees,
} = employeeSlice.actions;

export default employeeSlice.reducer;
