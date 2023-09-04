import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import "./index.css"
import { Provider } from "react-redux"
import { store } from './Store.js'

export const server = 'https://nodejs-portfolioapp.onrender.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
