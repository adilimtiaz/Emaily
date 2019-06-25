import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
    const currentUser = await axios.get('/api/current_user');
    console.log(currentUser);
    dispatch({
        type: FETCH_USER,
        payload: currentUser.data
    });
};

export const handleToken = (token) => async dispatch => {
    const stripeToken = await axios.post('/api/stripe', token);
    console.log("Handling token");

    dispatch({
        type: FETCH_USER,
        payload: stripeToken.data
    })
};
