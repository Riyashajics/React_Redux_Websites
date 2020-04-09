import React from 'react';
import {connect} from 'react-redux'
import {selectMovie} from '../actions/index'



const MovieList =(props)=>{
    const listItems=props.movies.map((movie)=>{
        return(
            <div key={movie.title}>
            <span>{movie.title}</span>
            <button onClick={()=>props.selectMovie(movie)}> Details</button>
            </div>
        )

    })
    return(
        <div className="list-container">
        <h2>Movie List</h2>
        <ul>
        {listItems}
        </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        movies: state.movies
    }
}

const mapDispatchToProps={
    
        selectMovie:selectMovie
    
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);