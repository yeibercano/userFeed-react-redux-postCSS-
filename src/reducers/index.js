import { combineReducers } from 'redux'
import { feed } from './received_feed_reducer'

 const reducers = combineReducers({
   feed
 })

export default reducers;