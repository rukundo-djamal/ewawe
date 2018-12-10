import {
    USER_DATA
} from '../types';

import firebase from 'firebase';

export const userData = ( ) => {
    return (dispatch) => {
        fetch('https://dukire-55859.firebaseio.com/services.json')
        .then((responseJson) => {
            getData(dispatch, JSON.parse(responseJson._bodyText));
        })
        .catch((error) => {
            console.error(error);
        });
    };
}
const getData =(dispatch, data) => {
    dispatch({ type: USER_DATA, payload: data })
}

