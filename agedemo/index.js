const redux=require ('redux')
const createStore= redux.createStore;
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const reduxLogger=require('redux-Logger')
const Logger=reduxLogger.createLogger()


const AGE='AGE'
const AGE2='AGE2'

function increment(){
    return{
    type: AGE,

    }
}
function decrement(){
    return{
        type:AGE2,
  
    }
}

const initialState={
    age:23,
  
}
const initialState2={
    age2:28,
  
}

const reducer=(state=initialState,action)=>
{
    switch(action.type){
        case AGE: return{
            ...state,
            age:state.age+1
        }
        default: return state
    }
}
const reducer2=(state=initialState2,action)=>{
    switch(action.type){
        case AGE2: return{
            ...state,
            age2:state.age2-1
        }
        default: return state
    }
}

const rootReducer=combineReducers({
   first:reducer,
   second:reducer2
})
const store=createStore(rootReducer,applyMiddleware(Logger))
console.log('initial State',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

unsubscribe()







