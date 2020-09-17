import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Global from './Global';
import Country from './Country';


const Detail = () =>{
 
 const [global, setGlobal] = useState ([]);
 const [cont, setCont] = useState([]);

 useEffect( () =>{
  loadData();

}, []);

 const loadData = async () =>{
   const result = await Axios.get("https://api.covid19api.com/summary");
   console.log(result);
   setGlobal(result.data.Global); 
   setCont(result.data.Countries);
   console.log(cont.Country);
 };
 

 return ( 
    <div className="container"> 
    <h1> COVID-19 updates</h1>
      <Global
          NewConfirmed={global.NewConfirmed}
          TotalConfirmed={global.TotalConfirmed}
          NewDeaths={global.NewDeaths}
          TotalDeaths={global.TotalDeaths}
          NewRecovered={global.NewRecovered}
          TotalRecovered={global.TotalRecovered}
      />
      <Country cont={cont} />


    </div>
 );
};

export default Detail;
