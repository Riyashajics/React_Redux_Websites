import React from 'react'
import {buy_cake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props){
    return(
        <div>
        <h2>Number of cakes-{props.num_Of_Cakes}</h2>
        <button onClick={props.buy_cake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        num_Of_Cakes:state.cake.num_Of_Cakes// could be imported in selector file
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buy_cake:()=>dispatch(buy_cake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)