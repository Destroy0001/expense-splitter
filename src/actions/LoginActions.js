import {REQUEST_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from '../constants/Actions';
import axios from 'axios';

export const loginAction = (email,password) => {
	return (dispatch) => {
		dispatch({type:REQUEST_LOGIN,state:{requesting:true}});
		if(!email || !password)
			dispatch({type:REQUEST_LOGIN,state:{requesting:false}});

		return requestLogin(dispatch,email,password);

	}
}


const requestLogin = (dispatch,email,password) => {
	axios.post('http://localhost:3001/api/login/',{
		email:email,
		pass:password
	}).then(response=>{
		console.log(response)
		dispatch({type:LOGIN_SUCCESS, state:{loggedIn:true, requesting:false}});
	}).catch(err=>{
		dispatch({type:LOGIN_FAILED, state:{requesting:true}});
	})
}