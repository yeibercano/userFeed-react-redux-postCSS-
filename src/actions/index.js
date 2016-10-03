import axios from 'axios';
import { browserHistory } from 'react-router';
import * as types from './types';

export const getFeed = () => {
	console.log('get feed called')
	return dispatch => {
    axios.get('/feed')
    .then( response => { 
    	console.log('response', response.data.data.recentActivities)
    	dispatch({ type: types.GET_FEED, payload: response.data.data.recentActivities })
    })
    .catch(err => {
    	throw err
    })
  }
} 





