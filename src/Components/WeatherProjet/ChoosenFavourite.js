import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'

export default function ChoosenFavourite(props){   
   const setTheChoosenCity =(cityName,cityKey)=>{
        props.setChoosenCity({choosenName:cityName,choosenKey:cityKey})
        props.setFevCityInfo(props.cityInfo);
        props.setFevCityCondition(props.cityCondition);
        props.setFevForecastList(props.forecastList);
    }
    return(
        <div className='card'>   
                <button className='card' onClick={()=>{setTheChoosenCity(props.cityName,props.cityKey)}}>
                    <h6>{props.cityName}</h6>
                    <h5>{props.temperature}°C</h5>
                    <h5>{props.condition} </h5>
                </button>   
        </div>
    )
}