
const MOVIE_SELECTED='MOVIE_SELECTED'


export const selectMovie=(movie)=>{
    return{
        type:MOVIE_SELECTED,
        payload:movie
    }
}