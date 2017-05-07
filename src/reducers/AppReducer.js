import { ADD_FRIEND, ADD_GROUP } from '../constants/ActionConstants';
const assign = Object.assign || require('object.assign');

const initialState = {
	email:'ashishjhanwar007@gmail.com',
	name:'Ashish Jhanwar',
	last_group_id:-1,
	last_friend_id:-1,
	contacts:{

	},
	groups:{

	}
}

export AppReducer = (state = initialState, action) =>{
	switch(action.type){
		case ADD_FRIEND:
			return assign({},state,{
				last_friend_id: action.last_friend_id,
				assign({},contacts, contacts[action.last_friend_id]
			})
		break;
		case ADD_GROUP:
		break;
		default:
		return state;
	}
}