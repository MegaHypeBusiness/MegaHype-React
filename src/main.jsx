import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
// Importação dos CSS globais
import '../public/css/bootstrap.min.css';
import '../public/css/lineicons.css';
import '../public/css/tiny-slider.css';
import '../public/css/glightbox.min.css';
import '../public/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
