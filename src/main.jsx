import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Localization
import { I18nextProvider } from 'react-i18next';
import i18n from './language/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* Wrap your app with I18nextProvider */}
      <div className="d-flex flex-column min-vh-100">
        <App /> 
      </div>
    </I18nextProvider>
  </React.StrictMode>
);
