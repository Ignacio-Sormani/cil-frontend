import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import Routes from './components/routes';
import { store, persistor } from './redux';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
