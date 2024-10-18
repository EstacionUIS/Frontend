import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="d-flex flex-column min-vh-100"> {/* Added flex container */}
      <App />
    </div>
  </React.StrictMode>
);
