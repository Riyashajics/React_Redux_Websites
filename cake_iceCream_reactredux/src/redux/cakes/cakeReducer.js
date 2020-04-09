import { BUY_CAKE } from './cakeType'

const initialState={
    num_Of_Cakes:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                num_Of_Cakes:state.num_Of_Cakes-1
            }
            default : return state
        }
    }
    export default cakeReducer
    
