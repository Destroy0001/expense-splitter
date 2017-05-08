import { LOGIN_SUCCESS, REGISTRATION_SUCCESS, LOGOUT } from '../constants/Actions';
const assign = Object.assign || require('object.assign');
const initialState = {
	email:null,
	name:null,
	contacts:null,
	groups:null,
	expenses:null,
	requestingData:false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		/*
		Login and registration, 
		log the user in and set the userData
		*/
		case LOGIN_SUCCESS:
		case REGISTRATION_SUCCESS:
			return assign({},state,{
				email:action.state.email,
				name:action.state.name
			});

		/*on logout reset the state to initial state*/
		case LOGOUT:
			return assign({},state,state)
		default:
			return state;
	}
	
}

export default reducer;