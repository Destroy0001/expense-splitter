import { 
	REQUEST_LOGIN,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	REQUEST_REGISTRATION,
	REGISTRATION_FAILED,
	REGISTRATION_SUCCESS
	} from '../constants/Actions';
const assign = Object.assign || require('object.assign');
const initialState = {
	loggedIn: false,
	requesting: false,
	errorMessage: ''
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case REQUEST_LOGIN:
		case LOGIN_FAILED:
		case LOGIN_SUCCESS:
		case REQUEST_REGISTRATION:
		case REGISTRATION_FAILED:
		case REGISTRATION_SUCCESS:
			return assign({},state,action.state);
		/*on logout reset the state to initial state*/
		case LOGOUT:
			return assign({},state,state);
		default:
			return state;
	}
}

export default reducer;