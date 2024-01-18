import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: [],
        songs: [],
        isLoading: true,
        isError: false,
    },
   reducers:{
    setSongs: (state, action) => {
        state.songs = action.payload.songs;
    },
    setLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setError: (state, action) => {
        state.isError = action.payload;
    },
   },
})

export const { setSongs, setLoading, setError } = searchSlice.actions

export default searchSlice.reducer