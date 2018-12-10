import {combineReducers} from 'redux';
import navReducer from './navReducer';
import AuthReducer from './authReducer';
import RegisterReducer from './registerReducer';
import userDat from './userdataReducer';

export default combineReducers({
    data: () => {}
});
