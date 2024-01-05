import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: [],
        isLoading: true,
        isError: false,
    },
   reducers:{
    setSongs: (state, action) => {
        state.data = state.data.albums.filter = action.payload;
    },
    setAlbums: (state, action) => {
        state.data = state.data.albums.filter = action.payload;
    },
    setPodcast: (state, action) => {
        state.data = state.data.podcats.filter = action.payload;
    },
    setError: (state, action) => {
        state.isError = action.payload;
    },
   },
})

export const { setSongs, setAlbums, setPodcast, setError } = searchSlice.actions