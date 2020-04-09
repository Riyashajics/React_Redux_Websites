import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';



function App(props) {
  console.log(props)
  return (
   
    <div className="App">
   <h1> i am a component </h1>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    myname:state.name
  }
}
export default connect()(App);
