import { combineReducers } from 'redux'
import githubReducer from './githubReducer'
import cakeReducer from '../actions/bakery/cakeReducer'
import iceCreamReducer from '../actions/bakery/iceCreamReducer'

const rootReducer = combineReducers({
    data: githubReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer