import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import { AuthContextProvider } from './pages/auth/context';
import { AdvertContextProvider } from './pages/adverts/context';

const accessToken = storage.get('auth') 
if (accessToken) {
  setAuthorizationHeader(accessToken)
}

const isFilter = storage.get('isFilter')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider iniciallyLogged={!!accessToken}>
        <AdvertContextProvider initialIsFilter={isFilter}>
          <App />
        </AdvertContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

