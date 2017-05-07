import {REQUEST_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from '../constants/Actions';
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
			return assign({},state,action.state);
		break
		default:
			return state;
	}
}

export default reducer;