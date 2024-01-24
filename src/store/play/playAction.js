import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import {  setSongs,  setEmotion, setAlbum, setColor, setError } from './playSlice';

const songsCollection = collection(firestore, 'songs')

export const getSongs = () => {
  return async (dispatch) => {
    try {
      const songs = []
      const response = await getDocs(songsCollection);
      response.forEach((item) => {
          songs.push({ id: item.id, ...item.data() })
      });
      dispatch(setSongs(songs));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const