import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { theme } from './services/theme';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='goit-react-hw-08-phonebook'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
              </PersistGate>
            </Provider>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
