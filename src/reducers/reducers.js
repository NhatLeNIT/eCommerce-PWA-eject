import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import loading from './loading';
import memberLogin from './authMember';

const rootReducer = combineReducers({
    loading,
    memberLogin,
    toastr: toastrReducer
});

export default rootReducer;