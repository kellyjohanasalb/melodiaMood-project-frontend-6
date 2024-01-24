import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
    name: 'play',
    initialState: {
        play: [],
        songs: [],
        isError: false,
    },
   reducers:{
    setSongs: (state, action) => {
        state.songs = action.payload;
    },
    setEmotion: (state, action) => {
        state.search = action.payload;
      },
    setAlbum: (state, action) => {
        state.isLoading = action.payload;
    },
    setColor: (state, action) => {
        state.isLoading = action.payload;
    },
    setError: (state, action) => {
        state.isError = action.payload;
    },
   },
})

export const { setSongs, setEmotion, setAlbum, setColor, setError } = playSlice.actions

export default playSlice.reducer