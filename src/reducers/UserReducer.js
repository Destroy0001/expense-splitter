
const assign = Object.assign || require('object.assign');
const initialState = {
	email:null,
	name:null,
	contacts:{

	},
	groups:{

	},
	expenses:{

	}
	requestingData:false
}

export default reducer(state = initialState, action){
	return state;
}