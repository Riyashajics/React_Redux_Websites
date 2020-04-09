import cakeReducer from './cakes/cakeReducer'
import iceReducer from './iceCream/iceCreamReducer'
import {combineReducers} from 'redux'



const rootReducer=combineReducers({
    cake:cakeReducer,
    IceCream:iceReducer
})



export default rootReducer