const redux=require('redux')
const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()



const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buycake()
{
    return{
    type:BUY_CAKE,
    info:'First redux action'
}
}
function buyicecream()
{
    return{
        type:BUY_ICECREAM
        
    }
}


const initialState={
    numOfCakes:10
   

}
const initialiceState={
    numOfIcecream:20
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        
        default:return state
    }
}
const icereducer=(state=initialiceState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM : return{
            ...state,
            numOfIcecream:state.numOfIcecream-1
        }
        default:return state
    }
}
const rootReducer=combineReducers({
    cake:reducer,
    iceCream:icereducer
})
const store=createStore(rootReducer,applyMiddleware(logger))

console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()



