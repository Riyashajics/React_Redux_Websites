const initialState={
    color:"red"
}
const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case'CHANGE_COLOR':
        return{
            ...state,
           color: action.color
        }
        default:return{

         ...state
        }
    }
}
export default mainReducer;