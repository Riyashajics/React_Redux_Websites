import React,{Component} from 'react';


class Form  extends Component{
    render(){
        return(
   <form onSubmit={this.props.getWeather}>
   <input type="text"
   name="city"
   placeholder="CITY...."/>
   <input type="text"
   name="state"
   placeholder="STATE ...."/>
   
   <button> CHECK THE WEATHER</button>
   </form>


        );

    }
}

export default Form;