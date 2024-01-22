import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'search',
    initialState: {
        search: [],
        songs: [],
        isLoading: false,
        isError: false,
    },
   reducers:{
    setSongs: (state, action) => {
        state.songs = action.payload;
    },
    setSearch: (state, action) => {
        state.search = action.payload;
      },
     /*  filterEmotions: (state, action) => {
        state.songs = action.payload;
      }, */
    setLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setError: (state, action) => {
        state.isError = action.payload;
    },
   },
})

export const { setSongs, setSearch, setLoading, setError } = songsSlice.actions

export default songsSlice.reducer