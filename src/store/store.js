import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import productReducer from './products/productSlice'

const store = configureStore({
  reducer: {
    product: productReducer
  },
  middleware: [thunk],
});

export default store;