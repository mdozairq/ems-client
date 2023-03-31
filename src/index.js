import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EmployeeStoreProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EmployeeStoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EmployeeStoreProvider>
);

