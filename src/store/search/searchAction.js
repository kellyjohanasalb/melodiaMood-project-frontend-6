import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import {  setSongs,  setLoading, setError } from './searchSlice';


const songsCollection = collection(firestore, 'songs')

export const getData = () => {
  return async (dispatch) => {
    try {
      const tempArr = []
      const response = await getDocs(songsCollection);
      response.forEach((item) => {
          tempArr.push({ id: item.id, ...item.data() })
      });
      dispatch(setSongs(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
      dispatch(setLoading(false));
    }
  };
};

