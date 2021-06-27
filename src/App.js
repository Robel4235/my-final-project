import './App.css';
import React, { useState,useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WeatherPage from './Components/WeatherProjet/WeatherPage';
import FavouritePage from './Components/WeatherProjet/FavouritePage'


function App() {
  const [favouriteList,setFavouriteList]=useState([])
  const [choosenCity,setChoosenCity]=useState({choosenName:'',choosenKey:''})
  const [fevCityInfo,setFevCityInfo]=useState({});
  const [sevCityCondition,setFevCityCondition]=useState({});
  const [fevForecastList,setFevForecastList]=useState([]);

  return (
    <div className="App">        
        <Router>    
          <br />
         <Link to='/'><button onClick={()=>setChoosenCity({choosenName:'',choosenKey:''})}>Home</button></Link>  <Link to='/favouritepage'><button>Favourite</button> </Link>
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
     
          <Switch>
             <Route exact path='/' component={() => (<WeatherPage setChoosenCity={setChoosenCity} fevCityInfo={fevCityInfo}
             sevCityCondition={sevCityCondition} fevForecastList={fevForecastList}
             choosenCityKey={choosenCity.choosenKey}  choosenCityName={choosenCity.choosenName} favouriteList={favouriteList}/>)}/> 
             <Route exact path='/favouritepage' component={() => (<FavouritePage setChoosenCity={setChoosenCity} 
             setFevCityInfo={setFevCityInfo} setFevCityCondition={setFevCityCondition} setFevForecastList={setFevForecastList}
              favouriteList={favouriteList}/>)}/>   
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;