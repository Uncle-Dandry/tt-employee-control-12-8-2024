import { combineReducers } from '@reduxjs/toolkit';

import {
  employeeSlice,
  employeeSortFilterSlice,
} from './slices';

const rootReducer = combineReducers({
  employees: employeeSlice,
  employeeSortFilter: employeeSortFilterSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
