const redux=require ('redux');
const createStore=redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const thunkMiddleware=require('redux-thunk').default;
const axios=require('axios')
const FETCH_USER_REQUEST='FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE='FETCH_USER_FAILURE'


const initialState={
    loading:false,
    users:[],
    error:''

}
const fetchuserrequest=()=>{
return{

    type:FETCH_USER_REQUEST
}
}
const fetchusersuccess=(users)=>{
    return{
    
        type:FETCH_USER_SUCCESS,
        payload:users
    }
    }
    const fetchuserfailure=(erroe)=>{
        return{
        
            type:FETCH_USER_FAILURE,
            payload:error
        }
        }
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_USER_REQUEST :
            return{
                ...state,
                loading:true

        }
        
    }



    switch(action.type)
    {
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
    }
    switch(action.type)
    {
        case FETCH_USER_FAILURE:
            return{
                loading:false,
                users:'',
                error:action.payload
            }
    }
}


const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchuserrequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
       
        const users=response.data.map(user=>user.id)
        dispatch(fetchusersuccess(users))
    })
    .catch(error=>{
        dispatch(fetchuserfailure(error.message))

    })
    }
}
const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())



