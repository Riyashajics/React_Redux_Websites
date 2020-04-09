import React from 'react';
import {connect} from 'react-redux';

const MovieDetails=(props)=>{
    if(!props.selected){
        return(
        
        <div className="container"
        styles={{width:'70%'}}>
        <h2> MOVIE </h2>
        <div className="properties">
        <p>SELECT MOVIE</p>
        </div>
        </div>
        )
        
    }
    else{
        return(
            <div className="container"
        styles={{width:'70%'}}>
        <h2> MOVIE </h2>
        <div className="properties">
        <p>Title:{props.selected.title}</p>
        <p>Release Date:{props.selected.date}</p>
        <p> Ratings :{props.selected.rating}</p>


        </div>
        </div>
        )
        
    }
}






const mapStateToProps=(state)=>{
   
    return{
    selected:state.selected
}
}
export default connect(mapStateToProps)(MovieDetails)