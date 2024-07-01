import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
import Home from './pages/index';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
