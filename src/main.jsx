import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CalcButton from './CalcButton.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container1">
    <App />
    </div>
  </React.StrictMode>,
)
