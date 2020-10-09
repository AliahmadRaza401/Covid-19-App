import React from 'react';
import 'semantic-ui-css/semantic.min.css';


const Global = (props) =>{
   
  const {NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = props;

 return ( 
    <div className="container ">
       <h1 className="title"> COVID-19 updates</h1>
      <table class="table  text-center " id="gobalTable">
  <thead className="gt1">
    <tr>
      <th scope="col text-center" id="c1" className="t1"> 
        <h4>NewConfirmed</h4>
        <span>{NewConfirmed}</span>
      </th>
      <th scope="col text-center" id="c2"> 
        <h4>TotalConfirmed</h4>
        <span>{TotalConfirmed}</span>
      </th>
      <th scope="col text-center" id="c3"> 
        <h4>NewDeaths</h4>
        <span>{NewDeaths}</span>
      </th>
      <th scope="col text-center" id="c4"> 
        <h4>TotalDeaths</h4>
        <span>{TotalDeaths}</span>
      </th>
      <th scope="col text-center" id="c5"> 
        <h4>NewRecovered</h4>
        <span>{NewRecovered}</span>
      </th>
      <th scope="col text-center" id="c6"> 
        <h4>TotalRecovered</h4>
        <span>{TotalRecovered}</span>
      </th>
    </tr>
  </thead>
</table>
   


    </div>
 );
};

export default Global;
