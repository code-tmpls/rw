import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

export const AppRouting = ({ data }) => {
 console.log(data);
 return (<Router>
    <Routes>
    {data.map((param, index)=>(<Route key={index} path={param.path} element={param.component} />))}
    </Routes>
 </Router>);
};
