import { combineReducers } from '@reduxjs/toolkit';

import employeeReducer from './slices/employeeSlice';

const rootReducer = combineReducers({
  employees: employeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
