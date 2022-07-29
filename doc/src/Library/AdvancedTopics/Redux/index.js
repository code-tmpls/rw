import React from "react";
import { store } from './Store.js';
import { Provider } from 'react-redux';

export const RootProvider = ({ component }) =>{
return (<Provider store={store}>
    <React.StrictMode>
      {component}
    </React.StrictMode>
  </Provider>);
};