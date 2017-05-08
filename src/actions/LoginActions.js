import {REQUEST_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from '../constants/Actions';
import {BASE_API_URL} from '../constants/Config';

import axios from 'axios';

/*action creator to login to the application*/
const requestLogin = (dispatch,props,email,password) => {
	axios.post(`${BASE_API_URL}/api/login/`,{
		email:email,
		pass:password
	}).then(response => {
		if(response.data.success){
			/*redirecting to dashboard on successful login*/
			document.querySelector('.Login-error').textContent = '';
			dispatch({
				type:LOGIN_SUCCESS,
				state:{
					loggedIn:true,
					requesting:false,
					name:response.data.name,
					email:response.data.email
				}
			});
			const { history } = props;
			history.push('/dashboard');
		}else{
			/*if there is no success, we show an error */
			document.querySelector('.Login-error').textContent = 'Unknown Server Response';
			dispatch({type:LOGIN_FAILED, state:{requesting:false}});
		}
	}).catch(err => {
		console.log(err);
		/*if there is no success, we recieve error message in response*/
		document.querySelector('.Login-error').textContent = err.response.data;
		dispatch({type:LOGIN_FAILED, state:{requesting:false}});

	})
}

/*function to recieve actions from ui*/
export const loginAction = (props,email,password) => {
	return (dispatch) => {
		dispatch({type:REQUEST_LOGIN,state:{requesting:true}});
		if(!email || !password){
			document.querySelector('.Login-error').textContent = 'Invalid Login Data';
			return dispatch({type:LOGIN_FAILED,state:{requesting:false}});
		}
		return requestLogin(dispatch,props,email,password);
	}
}


