import {REQUEST_REGISTRATION, REGISTRATION_FAILED, REGISTRATION_SUCCESS} from '../constants/Actions';
import {BASE_API_URL} from '../constants/Config';

import axios from 'axios';

/*action creator to register on the application*/
const requestRegistration = (dispatch,props,name,email,password) => {
	axios.post(`${BASE_API_URL}/api/register/`,{
		name:name,
		email:email,
		pass:password
	}).then(response=>{

		/*on a successful registration, redirecting to dashboard*/
		if(response.data.success){
			document.querySelector('.Registration-error').textContent = '';
			dispatch({
				type:REGISTRATION_SUCCESS, 
				state:{
					loggedIn:true,
					requesting:false,
					name:response.data.name,
					email:response.data.email,
				}
			});
			const { history } = props;
			history.push('/dashboard');
		}else{
			/*if there is no success object, the error is recieved in response body*/
			document.querySelector('.Registration-error').textContent = 'Unknown Server Response';
			dispatch({type:REGISTRATION_FAILED, state:{requesting:false}});
		}


		
	}).catch( err => {
		/*if there is no success object, the error is recieved in response body*/
		document.querySelector('.Registration-error').textContent = err.response.data;
		dispatch({type:REGISTRATION_FAILED, state:{requesting:false}});

	})
}

/*function to recive actions from UI*/
export const registrationAction = (props,name,email,password) => {
	return (dispatch) => {
		dispatch({type:REQUEST_REGISTRATION,state:{requesting:true}});
		if(!name || !email || !password){
			document.querySelector('.Registration-error').textContent = 'Invalid registration data';
			return dispatch({type:REGISTRATION_FAILED,state:{requesting:false}});
		}

		return requestRegistration(dispatch,props,name,email,password);

	}
}


