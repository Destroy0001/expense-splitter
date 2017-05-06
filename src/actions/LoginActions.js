import axios from 'axios';
import { browserHistory } from 'react-router-dom';
import { 
		LOGIN_REQUEST,
		LOGIN_SUCCESS,
		LOGIN_FAILURE,
		LOGOUT, 
	} from '../constants/ActionConstants';

import { errors } from '../constants/ErrorMessages';
import { BASE_API_URL } from '../constants/AppConstants';


/*async action to request login*/
const requestLogin = () => {
	return {type:LOGIN_REQUEST, newState:{currentlyRequesting:true}};
}

/*async action for a successful login*/
const successLogin = (user) => {
	/*and redirect to dashboard*/
	browserHistory.push('/dashboard');
	return {
				type:LOGIN_SUCCESS,
				newState:{
						loggedIn:true,
						user:user,
						currentlyRequesting:false
					}
			}

}

/*sets login error message */
const setErrorMessage =(error)  => {
	document.querySelector('.Login-error').textContent = error;
	return {
				type: LOGIN_FAILURE,
				newState:{
					loggedIn:false,
					user:null,
					currentlyRequesting:false
				}
			}
}

/* logs a user into the applications */
export const login = (email,pass)=> {
	return (dispatch) => {

		dispatch(requestLogin());
		
		/*if email or password is vacant, cancel login request*/
		if (!email || !pass)
			return dispatch(setErrorMessage(errors.INVALID_LOGIN));

		/*calling api to login*/
		axios.post(` ${ BASE_API_URL }/login `,{
			email:email,
			pass:pass
		}).then(response => {

			let user = JSON.parse(response).user;

			/*if user hasn't been returned in login response it's a failed request*/
			if(!user)
				return dispatch(setErrorMessage(errors.INVALID_LOGIN));
			/*else store user login state for user*/
			dispatch(successLogin(user));
		}).catch(err => {

			console.log(err);
			dispatch(setErrorMessage(errors.INVALID_LOGIN));

		});
	}
}

/*logs a user out*/
export const logout = () => {
		return (dispatch) => {
			return dispatch({type:LOGOUT,
				newState:{
				loggedIn:false,
				user:null,
				currentlyRequesting:false
			}
		});
	}
}