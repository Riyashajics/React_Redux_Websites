import React from 'react'

class BoxComponent extends React.Component{
    render(){
        return(
            <div className="wrapper">
            <div style={{backgroundColor:`${this.props.color}`}}
            className="box">
            <button onClick={()=>{this.props.handleClick()}}>Change Color</button>
            </div>
            </div>
        )
    }
}
export default BoxComponent;