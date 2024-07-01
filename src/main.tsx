import ReactDOM from "react-dom/client";
import React from "react";

import Home from './pages/index';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
