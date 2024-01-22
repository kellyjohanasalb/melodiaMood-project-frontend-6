import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import songsReducer from "./songs/songsSlice";


const store = configureStore({
  reducer: {
    songs: songsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;