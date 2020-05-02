import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { apiSetup } from '~config/api';

import store from '~redux/store';

import Routes from './components/Routes';

function App() {
  useEffect(() => {
    apiSetup(store.dispatch);
  }, []);

  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
