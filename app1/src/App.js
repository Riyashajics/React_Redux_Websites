import React,{Component} from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';


const API_KEY = 'b1e1219617e51086adaae668ed73d9a9';



class App extends Component{

  state={

    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const state=e.target.elements.state.value;

    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${API_KEY}`);
    const data=await api_call.json();
    if(city && state){
    console.log(data);
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      coountry:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""

    });
  }else{
    this.setState({
      

        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter the value"
      
    });

  
  }
}

  render(){
    return(

      <div>
     <h1>   hi  </h1> 
     <Title />
     <Form getWeather={this.getWeather} />
     <Weather
      temperature={this.state.temp}
      city={this.state.city}
      country={this.state.country} 
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
      </div>

    );

  }
}

export default App;
