import React,{Component} from 'react';


const Weather=(props)=>{
        return(
   <div>
   
   {props.city && 
    <p>
     Location: 
      {props.city},
      {props.country}
      </p> }
      {props.temperature &&<p>Temperature: {props.temperature} </p>}
      {props.humidity &&
      <p>Humidity: {props.humidity} </p>}
      {props.description &&
    <p> Description:{props.description}</p>} 
    {props.error &&
    <p>
    Error:{props.error} </p>}
    
     

     
      
      
   </div>

        );

    }


export default Weather;