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
	return state;
}

export default reducer;