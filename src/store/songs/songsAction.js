import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs, where, query } from "firebase/firestore";
import {  setSongs,  setSearch, setLoading, setError } from './songsSlice';


const songsCollection = collection(firestore, 'songs')

export const getSongs = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const songs = []
      const response = await getDocs(songsCollection);
      response.forEach((item) => {
          songs.push({ id: item.id, ...item.data() })
      });
      dispatch(setSongs(songs));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
      dispatch(setLoading(false));
    }
  };
};

// export const getDataBySongs = () => {
//   return async (dispatch) => {
//     try {
//       const tempArr = []      
//       const response = await getDocs(songsCollection)
//       response.forEach((item) => {
//         tempArr.push({ songs: item.data, ...item.data(songsCollection) })
//       });
//       dispatch(setSearch(tempArr));
//     } catch (error) {
//       dispatch(
//         setError({ error: true, code: error.code, message: error.message })
//       );
//       dispatch(setLoading(false));
//     }
//   };
// };

// export const getDataByFilter = (searchText) => {
//   return async (dispatch) => {
//     try {
//       const tempArr = []      
//       const response = await getDocs(songsCollection)
//       response.forEach((item) => {
//         tempArr.push({ songs: item.data, ...item.data(songsCollection) })
//       });
//       const filteredArr = tempArr.filter((item) => item.songs.toLowerCase().includes(searchText.toLowerCase()));
//       dispatch(setSearch(filteredArr));
//     } catch (error) {
//       dispatch(
//         setError({ error: true, code: error.code, message: error.message })
//       );
//       dispatch(setLoading(false));
//     }
//   };
// };

export const searchSongsAction = (searchText) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const songs = [];
    const response = await getDocs(songsCollection);
    response.forEach((item) => {
      songs.push({ id: item.id, ...item.data() });
    });
    console.log(songs);
    const foundSongs = songs.filter((item) => item.songName.toLowerCase().includes(searchText.toLowerCase()));
    console.log(foundSongs);
    dispatch(setSearch(foundSongs));
    dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
    dispatch(setError({ error: true, code: error.code, message: error.message }))
    dispatch(setLoading(false));
  }
}

export const filteredSongsActions = (searchParam, searchValue) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const q = query(songsCollection, where(searchParam, "==", searchValue));
    const songs = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        songs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(setSearch(songs));
    dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
       dispatch(setError({ error: true, code: error.code, message: error.message }))
    dispatch(setLoading(false));
    } 
  };
};
