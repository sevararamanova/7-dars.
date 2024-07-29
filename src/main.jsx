// index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store.jsx'; 

// Root elementni olish
const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
