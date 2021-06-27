import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'

export default function ForecastCard(props){   
  
    return(
        <div className='forecastcard'>
            <h6>{props.date}</h6>
            <h5>{props.condition}</h5>
            <h5>Maximum:{props.tempmax}°F</h5>
            <h5>Minimum:{props.tempmin}°F</h5>    
        </div>
    )
}