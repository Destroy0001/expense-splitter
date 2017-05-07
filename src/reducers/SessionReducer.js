const assign = Object.assign || require('object.assign');

const initialState = {
	loggedIn: false,
	requesting: false
}

export default reducer(state = initialState, action){
	return state;
}