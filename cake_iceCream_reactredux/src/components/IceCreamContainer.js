import React from 'react'
import{buy_icecream} from '../redux'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    return(
        <div>
            <h1> Number of IceCream -{props.num_Of_Ice}</h1>
            <button onClick={props.buy_icecream}> buy ice cream</button>
        </div>
    )

    
}

const mapStateToProps=state=>{
    return{
        num_Of_Ice:state.IceCream.num_Of_Ice
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buy_icecream:()=>dispatch(buy_icecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)