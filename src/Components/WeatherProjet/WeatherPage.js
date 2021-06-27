import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'
import ForecastCard from './ForecastCard';
import FavouriteOperator from './FavouriteOperator';

export default function WeatherPage(props){   
  const [cityName,setCityName]=useState('')
  const [cityInfo,setCityInfo]=useState({})
  const [cityCondition,setCityCondition]=useState({})
  const [forecastList,setforecastList]=useState([])
  const [currentTemp,setCurrentTemp]=useState(0)
  const key ='B6njxQ66LMTlUo0IvAs0YDcIsLK4GUyc'
  const tempDefault=null;
  //get city information
 const getCity =async(city)=>{
    try {
      const base ='https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
      const query=`?apikey=${key}&q=${city}`;
      const response =await fetch(base+query);
      const data= await response.json();
      setCityInfo(data[0]);
      console.log(data)
      return (data[0]);
    } catch (error) {
       console.log(error)
    }
    
 } 
 //get weather information
 const getWeather =async(id)=>{
    try {
      const base ='https://dataservice.accuweather.com/currentconditions/v1/';
      const query=`${id}?apikey=${key}`;
      const response =await fetch(base+query);
      const data= await response.json();
      getForecasts(id)
      setCityCondition(data[0]);
      setCurrentTemp(data[0].Temperature.Metric.Value);
      console.log(data)
      return data[0];
    } catch (error) {
       console.log(error)
    }
    
 } 
 //get 5 Days of Daily Forecasts
 const getForecasts =async(id)=>{
    try {
      const base ='https://dataservice.accuweather.com/forecasts/v1/daily/5day/';
      const query=`${id}?apikey=${key}`;
      const response =await fetch(base+query);
      const data= await response.json();
      setforecastList(data.DailyForecasts);
      console.log(data)
    } catch (error) {
       console.log(error)
    }
    
 } 
 
const checkDefault =()=>{
   debugger;
   if (cityName=='' && props.choosenCityName==''&& props.choosenCityKey=='' && forecastList.length==0 &&
    Object.entries(cityInfo).length=== 0&& Object.entries(cityCondition).length=== 0){  
      getCity('tel aviv')
      getWeather('215854')
   }else{
      if(props.choosenCityName!=''&&props.choosenCityKey!=''){   
          return false;   
        //setCityName(props.choosenCityName);
       // setCurrentTemp(props.favouriteList[0].temperature);
       // setCityInfo(props.fevCityInfo);
      //  setCityCondition(props.sevCityCondition);
      //  setforecastList(props.fevForecastList);

         // getCity(props.choosenCityName)
        // getWeather(props.choosenCityKey)
      }else{
         return null;

      }
     
   }
}
//.catch(err=>console.log(err))
    return(
        <div>
            
               
                   
                <input type="text" placeholder='Enter the city here..' onChange={e=>setCityName(e.target.value)} /> 
                 <button onClick={()=>{getCity(cityName).then(data=>{getWeather(data.Key)}).then(data=>{console.log(data)})      
                 }}>Search</button>  <br /> <br />
                 <div className='mainbox'>
                    <div>
                        {checkDefault()==false?
                        <FavouriteOperator cityInfo={props.fevCityInfo} cityCondition={props.sevCityCondition}
                         forecastList={props.fevForecastList} 
                        cityKey={props.choosenCityKey} cityName={props.choosenCityName} 
                         temperature={props.favouriteList.temperature} condition={props.sevCityCondition.WeatherText}  
                         favouriteList={props.favouriteList} setFavouriteList={props.setFavouriteList}
                         liked={props.liked} setLiked={props.setLiked}/>:

                         <FavouriteOperator cityInfo={cityInfo} cityCondition={cityCondition} forecastList={forecastList} 
                       cityKey={cityInfo.Key} cityName={cityInfo.LocalizedName} 
                        temperature={currentTemp} condition={cityCondition.WeatherText}  
                        favouriteList={props.favouriteList} setFavouriteList={props.setFavouriteList}
                        liked={props.liked} setLiked={props.setLiked}/>
                        }
                      
                    </div>
                         {
                            checkDefault()==false?
                            <h3  id='cityNameBoxone' className='leftToTheBox'>{props.choosenCityName}</h3>:
                            <h3  id='cityNameBoxone' className='leftToTheBox'>{cityInfo.LocalizedName}</h3>
                         }

                         {
                            checkDefault()==false?
                            <h3 className='leftToTheBox'>{props.favouriteList[0].temperature} °C</h3>:
                            <h3 className='leftToTheBox'>{currentTemp} °C</h3>
                         }
                        
                        {
                            checkDefault()==false?
                            <h4>{props.sevCityCondition.WeatherText}</h4>:
                            <h4>{cityCondition.WeatherText}</h4>
                         }
                        
                         <br /> <br />
                    <div> 
                        {checkDefault()==false?
                        props.fevForecastList.map((element)=>(
                            <td>
                             {<ForecastCard date={element.Date} condition={element.Day.IconPhrase}
                              tempmax={element.Temperature.Maximum.Value} tempmin={element.Temperature.Minimum.Value}/>}
                         </td>    
                        )): forecastList.map((element)=>(
                            <td>
                                {<ForecastCard date={element.Date} condition={element.Day.IconPhrase}
                                 tempmax={element.Temperature.Maximum.Value} tempmin={element.Temperature.Minimum.Value}/>}
                            </td>                      
                         ))
                    }
                      {}
                   </div>
                 </div>  
        </div>
    )
}