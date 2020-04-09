import React from 'react'
import BoxComponent from '../component/box'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index.js'


class Box extends React.Component{
    render(){
        return(
            <BoxComponent handleClick={this.props.loadColor}color={this.props.color}></BoxComponent>
        )
    }
} 
const mapStateToProps=(state)=>{
    return state
};
export default connect(mapStateToProps,actionCreators)(Box);