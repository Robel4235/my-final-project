import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import './WeatherPage.css'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai';

export default function FavouriteOperator(props){   
 const [refresh,setRefresh]=useState(false)
 const likeCheker =false;
  const addToFavouriteList=()=>{
    debugger;
        let finder =false ;

        let inxToDelete=0;
        for (let i=0; i<props.favouriteList.length;i++){
            if (props.favouriteList[i].cityName==props.cityName){
                finder=true;
                inxToDelete=i;
                break
            }
        }
        if(finder==false){
            let tempFavourite ={
                                cityKey:props.cityKey,
                                cityName:props.cityName,
                                temperature:props.temperature,
                                condition:props.condition,
                                cityInfo:props.cityInfo,
                                cityCondition:props.cityCondition,
                                forecastList:props.forecastList}
            props.favouriteList.push(tempFavourite);  
            setRefresh(!refresh)    
        }else{
            props.favouriteList.splice(inxToDelete,1);   
            setRefresh(!refresh)         
        }
    }

    const checkLiked=()=>{
        let finder =false ;
        for (let i=0; i<props.favouriteList.length;i++){
            if (props.favouriteList[i].cityName==props.cityName){
                finder=true;
                break
            }
        }
        if(finder==false){
           return false;   
        }else{
            return true;       
        }
    }
    return(
        <div >  
            {checkLiked()==true? <AiFillHeart color='red'  size='1cm'/>:<AiOutlineHeart  size='1cm'/> }        
                 <button className='btn btn-outline-secondary' onClick={()=>{addToFavouriteList()}}>Add to Favourite</button>  
        </div>
    )
}