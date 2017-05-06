import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	REGISTRATION_REQUEST,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE
} from '../constants/ActionConstants';

const assign = Object.assign || require('object.assign');
const initialState = {
	loggedIn:false,
	user:null,
	currentlyRequesting:false
};

export function AppReducer(state = initialState, action) {
	switch (action.type) {

		case LOGIN_REQUEST:
		case REGISTRATION_REQUEST:
		case REGISTRATION_SUCCESS:
			return assign({}, state, {currentlyRequesting: action.nextState.currentlyRequesting});
		break;

		case LOGIN_SUCCESS:
		case LOGIN_FAILURE:
		case LOGOUT:
		return assign({}, state, action.nextState);
		break;

		default:
		return state;
	}
}