import React from "react";
// import reactDom from "react-dom";
import "./App.css";
import App from "./App.jsx"
import ReactDOM from 'react-dom/client';

// reactDom.render(
//   <App/>,
//   document.getElementById("app")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

