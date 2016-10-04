import axios from 'axios';
import { browserHistory } from 'react-router';
import * as types from './types';

export const getFeed = () => {
	return dispatch => {
    axios.get('/feed')
    .then( response => { 
    	dispatch({ type: types.GET_FEED, payload: response.data.data.recentActivities })
    })
    .catch(err => {
    	throw err
    })
  }
} 





