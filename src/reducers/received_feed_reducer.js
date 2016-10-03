import { GET_FEED } from '../actions/types'

export function feed(state = { recentActivity:[] }, action) {
	switch (action.type) {
		case GET_FEED:
			return { ...state, recentActivity: action.payload }
	}
	return state;
};