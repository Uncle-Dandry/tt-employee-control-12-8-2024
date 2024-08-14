import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Employee {
  isArchive: boolean;
  id: number;
  name: string;
  role: 'cook' | 'waiter' | 'driver';
  phone: string;
  birthday: string;
}

interface EmployeeState {
  isLoading: boolean;
  employees: Employee[];
}

const initialState: EmployeeState = {
  isLoading: false,
  employees: [],
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
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
