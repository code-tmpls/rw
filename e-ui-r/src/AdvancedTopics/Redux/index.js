import React from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const ReduxDispatcher = ()=>{
 return useDispatch();
};

export const toReduxStore = (paramKey, paramValue) => {
  return( {
    type: paramKey + '/update',
    payload: paramValue,
  });
};

export const fromReduxStore = (param) => {
  return useSelector((state) => (state[param]?.value));
};

const buildSlice = ( StoreVariables ) => {
  const objectKeys = Object.keys(StoreVariables);
  let slices = {};
  let reducers = {};
  objectKeys.forEach((paramKey) => {
    slices[paramKey + 'Slice'] = createSlice({
      name: paramKey,
      initialState: {
        value: (StoreVariables[paramKey]),
      },
      reducers: {
        update: (state, action) => {
          state.value = (action.payload);
        },
      },
    });
    reducers[paramKey] = slices[paramKey + 'Slice'].reducer;
    console.log(reducers);
  });
  return { slices, reducers };
};

const store = ( StoreVariables ) =>configureStore({
  reducer: buildSlice( StoreVariables )?.reducers,
});


export const RootProvider = ({ component, variables }) =>{
 return (
   <Provider store={store(variables)}>
    <React.StrictMode>
    {component}
    </React.StrictMode>  
   </Provider>
 );
};