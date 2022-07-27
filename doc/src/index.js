import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './doc.css';

import { AppRouting } from '@LibFeatures/AppRouting/index.js';
import { Routes } from '@DocConfig/Routing.js';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouting data={Routes} loading={<></>} />
  </React.StrictMode>
);

