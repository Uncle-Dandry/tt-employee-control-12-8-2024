import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import HomePage from 'pages/HomePage';

import { Route } from 'components/ReactRouter';

import 'styles/globals.scss';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={HomePage} />
    </Provider>
  );
};

export default App;
