import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      salary:"",
      age:""

    }
  }

  submit(){
    

    let url="http://dummy.restapiexample.com/api/v1/create";
    let data=this.state;
    fetch(url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp",resp)
      })
    })
  }

  render(){
    return(
      <div>
      <input type="text"
      name="name"
      value={this.state.name}
      placeholder="name"
      onChange={(data)=>{this.setState({name:data.target.value})}}/>
      <input type="text"
      name="salary"
      value={this.state.salary}
      placeholder="salary"
      onChange={(data)=>{this.setState({salary:data.target.value})}}/>
      <input type="text"
      name="age"
      placeholder="age"
      value={this.state.age}
      onChange={(data)=>{this.setState({age:data.target.value})}}/>
      <button onClick={()=>{this.submit()}}>On submit </button>
      </div>
    )

  }
}



export default App;
