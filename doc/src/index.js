import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import './index.css';
import RootProvider, { AppRouting } from 'react-webpack-lib';
import  { Routes } from '@DocConfig/Routing.js';

import("react-dom/client").then((ReactDOM)=>{
 ReactDOM.createRoot(document.getElementById("root"))
  .render(<RootProvider component={<AppRouting data={Routes} loading={<></>} />} />);
});


