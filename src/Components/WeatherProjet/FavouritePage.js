import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'
import ChoosenFavourite from './ChoosenFavourite'

export default function FavouritePage(props){   
  
    return(
        <div >
            {props.favouriteList.map((element)=>(     
                <td className='card'>
                    <Link to='/'>
                    <ChoosenFavourite cityInfo={element.cityInfo} cityCondition={element.cityCondition} forecastList={element.forecastList}
                     setChoosenCity={props.setChoosenCity} cityName={element.cityName}  setFevCityInfo={props.setFevCityInfo}
                     setFevCityCondition={props.setFevCityCondition} setFevForecastList={props.setFevForecastList}
                     temperature={element.temperature} condition={element.condition} cityKey={element.cityKey}/>  
                    </Link>
                </td>                
            ))}     
        </div>
    )
}