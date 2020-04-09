import { BUY_ICECREAM } from "./iceCreamTypes"


 const initialState={
     num_Of_Ice:30
 }


const iceReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                num_Of_Ice:state.num_Of_Ice-1
                

            }
            default: return state
    }

}
export default iceReducer