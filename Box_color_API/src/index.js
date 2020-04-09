import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './container/box-container'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk' ;
import mainReducer from './reducer/index';


const store=createStore(mainReducer,applyMiddleware(thunk))

class App extends React.Component{
    render(){
        return(
           <Box> </Box>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


