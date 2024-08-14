import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {
  EmployeeRole,
  SortDirection,
  SortOption,
} from 'types';

interface EmployeeFilterState {
  role: EmployeeRole | '';
  isArchived: boolean;
  sort: SortOption;
  sortDirection: SortDirection;
}

const initialState: EmployeeFilterState = {
  role: '',
  isArchived: false,
  sort: 'name',
  sortDirection: 'asc',
};

const employeeSortFilterSlice = createSlice({
  name: 'employeeFilter',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<EmployeeRole | ''>) => {
      state.role = action.payload;
    },
    setIsArchived: (state, action: PayloadAction<boolean>) => {
      state.isArchived = action.payload;
    },
    setSort: (state, action: PayloadAction<SortOption>) => {
      state.sort = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload;
    },
    resetFilters: (state) => {
      state.role = '';
      state.isArchived = false;
      state.sort = 'name';
      state.sortDirection = 'asc';
    },
  },
});

export const {
  setRole,
  setIsArchived,
  setSort,
  setSortDirection,
  resetFilters,
} = employeeSortFilterSlice.actions;

export default employeeSortFilterSlice.reducer;
