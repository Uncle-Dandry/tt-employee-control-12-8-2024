import React from 'react';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import store from 'store';

import HomePage from 'pages/index';

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
