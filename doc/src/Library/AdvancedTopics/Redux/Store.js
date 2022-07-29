import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const StoreVariables = {
  FirstName: 'Nellutla',
  LastName: 'L N Rao',
};

export const getFromStore = (param) => {
  return useSelector((state) => (state[param]?.value));
};

const buildSlice = () => {
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
  });
  return { slices, reducers };
};

export const update = (paramKey, paramValue) => {
  return {
    type: paramKey + '/update',
    payload: paramValue,
  };
};

export const store = configureStore({
  reducer: buildSlice()?.reducers,
});
