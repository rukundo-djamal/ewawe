import {
    CREATE_USER,
    CREATE_USER_SYNC,
    CREATING,
    CREATED,
    CREATING_ERROR
} from '../types';
import firebase from 'firebase';
export const createUsersync = ({ prop, value }) => {
    return {
        type: CREATE_USER_SYNC,
        payload: { prop, value }
    }
}

export const createUser = ({  email, password, name }) => {
    
    return (dispatch) => {
        dispatch({type: CREATING });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( (user) => {
                const myuser = firebase.auth().currentUser;
                myuser.updateProfile({
                    displayName: name,
                  });
                
                dispatch({type: CREATED });
            }
            )
            .catch(
                (error) => {
                    
                    dispatch({type: CREATING_ERROR, payload: error.code });
                }
            );
    }
}
