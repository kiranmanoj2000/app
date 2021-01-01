import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";

import Analytics from 'react-router-ga';
ReactDOM.render(
  <React.StrictMode>
    {process.env.NODE_ENV === "production" ?
    <Analytics id="G-6282HS6YN5S" debug>
      <Router>
      <App />
    </Router>
    </Analytics>
    :
    <Router>
      <App />
    </Router>
    }
    
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
