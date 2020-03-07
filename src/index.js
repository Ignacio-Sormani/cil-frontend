import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './components/routes';

render(
  <>
    <Routes />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
