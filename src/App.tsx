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

import NotFound from 'pages/NotFound';
import HomePage from 'pages/HomePage';
import EmployeePage from 'pages/EmployeePage';
import CreateEmployeePage from 'pages/CreateEmployeePage';

import 'styles/globals.scss';

const basename = process.env.PUBLIC_URL || '';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee/:id" element={<EmployeePage />} />
          <Route path="/employee" element={<CreateEmployeePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
