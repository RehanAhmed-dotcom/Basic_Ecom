import {combineReducers} from 'redux';
import myuserReducer from '../reducers/userReducer/userReducer';
import cartReducer from '../Reducer/Index'
const rootReducer = combineReducers({
    myuserReducer,
    cartReducer,


});

export default rootReducer;