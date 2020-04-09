import React from 'react';
import ImageSearch from './ImageSearchs/ImageSearch'
import ImageList from './ImageList/ImageList'


const API_KEY="15725530-c87dde76494557028f57d00a2"




class App extends React.Component{


  state={
    images:[],
    error:null
  }

  handleGetRequest = async (e) => {
    e.preventDefault()
    const searchValue=e.target.elements.searchValue.value
    const url=`https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo`
    const request=await fetch(url)
    const response=await request.json()
    if(!searchValue){
    this.setState({error:"please provide a value!"})
    }
    else{
      this.setState({images:response.hits,error:null})
    }
    console.log(searchValue)
    console.log(this.state.images)
    }
 

  

  render(){
    return(
      <div>
      App Component
      <ImageSearch  handleGetRequest={this.handleGetRequest}/>
      {
        this.state.error !==null?
     <div style={{color:"white",
    textAlign:"center"}}>
    {this.state.error}</div>:
    <ImageList images={this.state.images}/>
      }
      
      </div>
    )
  }

}
export default App;





