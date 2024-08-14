import React, {
  type FC,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import HomePage from 'pages/HomePage';
import EmployeePage from 'pages/EmployeePage';

import 'styles/globals.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee/:id" element={<EmployeePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
