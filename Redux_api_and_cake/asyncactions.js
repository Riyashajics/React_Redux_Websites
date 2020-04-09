const redux=require ('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')

const initialState={
    loading:true,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SCUCCESS='FETCH_USERS_SCUCCESS'
const FETCH_UERS_FAILURE='FETCH_UERS_FAILURE'

const fetchuserrequest=()=>{
    return{
    type:FETCH_USERS_REQUEST
    }
}
const fetchusersuccess=(users)=>{
    return{
    type:FETCH_USERS_SCUCCESS,
    payload:users
    }
}
const fetchuserfailure=(error)=>{
    return{
    type:FETCH_UERS_FAILURE,
    payload:error

    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_USERS_SCUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_UERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
    }
}
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchuserrequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            
            const users=response.data.map(user=>user.id)
            dispatch(fetchusersuccess(users))
        })
        .catch(error=>{
            //error.messgae 
            dispatch(fetchusersfailure(error.message))
        })


    }
}
const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{
    console.log(store.getState())})
    store.dispatch(fetchUsers())

