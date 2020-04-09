import {createStore} from 'redux';

import rootReducer from './rootReducer'
import logger from 'redux-logger';
import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'



const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store