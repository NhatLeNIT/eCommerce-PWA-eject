import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_MEMBER } from '../constants/ActionType';

const initialState = {
    isAuthenticated: false,
    user: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MEMBER: {
            console.log(action);
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
             }
        }

        default:
            return state
    }
}
