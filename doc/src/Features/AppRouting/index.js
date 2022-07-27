import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

export const AppRouting = ({ data, loading }) => {
 console.log(data);
 return (
 <Router>
    <Routes>
    {data.map((param, index)=>(<Route key={index} path={param.path} element={
      <React.Suspense fallback={loading}>
      {param.component}
      </React.Suspense>
     } />))}
    </Routes>
 </Router>);
};
