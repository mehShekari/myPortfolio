import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./_app/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <React.Fragment>
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.Fragment>
  // </React.StrictMode>
);

reportWebVitals();
