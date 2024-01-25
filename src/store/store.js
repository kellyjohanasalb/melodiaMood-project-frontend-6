import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import songsReducer from "./songs/songsSlice";
import userReducer from "./users/userSlice"


const store = configureStore({
  reducer: {
    songs: songsReducer,
    user : userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;