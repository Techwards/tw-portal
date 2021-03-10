import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//routes
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(console.log);
console.log(process.env.NODE_ENV)
console.log(process.env.TESTING)
console.log(process.env.REACT_APP_TESTING)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
