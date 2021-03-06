import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from "./services/redux/config/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const persistantStore = store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={persistantStore.store}>
        <PersistGate loading={null} persistor={persistantStore.persistor}>
          <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
