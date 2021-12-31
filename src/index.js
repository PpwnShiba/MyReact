import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myfirstelement = <h1>Hello Myworld :)</h1>

// const mysecondelement = (
//   <span>
//     <h1>Hello Again</h1>
//   </span>
// );

// ReactDOM.render(mysecondelement, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
