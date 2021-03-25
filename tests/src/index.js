import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login';
import {CookiesProvider} from 'react-cookie';

function Router() {
  return(
    <CookiesProvider>
      <BrowserRouter>
        <Route exact path = "/" component = {Login}/>
        <Route exact path = "/articles" component = {App}/>
      </BrowserRouter>
    </CookiesProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
