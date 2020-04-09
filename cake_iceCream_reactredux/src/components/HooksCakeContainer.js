import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buy_cake} from '../redux'
function HooksCakeContainer(){
   const num_Of_Cakes= useSelector(state=>state.cake.num_Of_Cakes)
   const dispatch=useDispatch()
    return(
        <div>
        <h2>Num of cakes-{num_Of_Cakes}
        </h2>
        <button onClick={()=>dispatch(buy_cake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer