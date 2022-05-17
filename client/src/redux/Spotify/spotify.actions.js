import axios from 'axios';
import { SET_CATEGORIES } from './spotify.types';

export const setCategories = (payload) => ({
    type: SET_CATEGORIES,
    payload
})


export const getCategories = () => async dispatch => {
    try {
        const { data } = await axios.get('/spotify/categories');
        dispatch(setCategories(data))
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}