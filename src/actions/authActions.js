import {
    EMAIL_PASWORD_SYNC,
    EMAIL_PASWORD_VALIDATION,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER,
    ACCOUNT_VALIDATION_SUCCESS
} from '../types';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

export const email_password_sync = ({ prop, value }) => {
    return {
        type: EMAIL_PASWORD_SYNC,
        payload: { prop, value }
    }
}

export const email_password_validation = ({ email, password }) => {

    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
               
                loginUserSuccess(dispatch, user);
                dispatch(NavigationActions.navigate({ routeName: 'Main' }));

            })
            .catch(error => {
                
                loginUserFailure(dispatch, error.code);
            });
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: ACCOUNT_VALIDATION_SUCCESS,
        payload: user
    }
    )

}
const loginUserFailure = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAILURE,
        payload: error
    }
    )

}