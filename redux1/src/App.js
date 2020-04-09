import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    age:state.age
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    onAgeUp:()=>dispatch({type:'AGE_UP'}),
    onAgeDown:()=>dispatch(
      {type:'AGE_DOWN'})

  }
}





export default connect(mapStateToProps,mapDispatchToProps) (App);