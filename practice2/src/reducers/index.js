import {combineReducers} from 'redux';


const moviesReducer=()=>{
    return[
        {title:"A",date:'06-12-20',rating:7},
        {title:"B",date:'12-12-20',rating:9},
        {title:"C",date:'17-02-97',rating:8}, 
        {title:"D",date:'16-09-99',rating:10},
        {title:"E",date:'30-05-98',rating:5},
    ]
}
const selectMovieReducer=(state=null,action)=>{
    switch(action.type){
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}
export default combineReducers({movies:moviesReducer,selected:selectMovieReducer});