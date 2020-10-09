import React, {useState} from 'react';
import { Search } from 'semantic-ui-react';



const Country = (props) =>{

  const [filter, setfilter] = useState("");
   
  const onchange = (e) => {
    console.log(e.target.value);
    setfilter(e.target.value);
 }

  const filterCountry = props.cont.filter(item => {
     return filter !== "" ? item.Country.toLowerCase() === filter.toLowerCase() : item;
  });

 return(
    <div className="container">
        <div class="ui icon input">
         <input type="text"
             placeholder="Enter Country Name..."
             value={filter}
             onChange={onchange}
             />
      </div>
        <table class="table border shadow text-center">
      <thead className="thead-dark ">
        <tr>
        <th scope="col">#</th>
          <th scope="col">Country</th>
          <th scope="col">NewConfirmed</th>
          <th scope="col">NewDeaths</th>
          <th scope="col">NewRecovered</th>
          <th scope="col">TotalConfirmed</th>
          <th scope="col">TotalDeaths</th>
          <th scope="col">TotalRecovered</th>
        </tr>
      </thead>
      <tbody className="ct1">
         {
           filterCountry.map( (user, index) => 
             (
               <tr>
                 <th scope="row"> {index + 1} </th>
                 <td> {user.Country} </td>
                 <td> {user.NewConfirmed} </td>
                 <td> {user.NewDeaths} </td>
                 <td> {user.NewRecovered} </td>
                 <td> {user.TotalConfirmed} </td>
                 <td> {user.TotalDeaths} </td>
                 <td> {user.TotalRecovered} </td>

               </tr>
             )
           )
         }
  </tbody>
</table>
    </div>
 );
};

export default Country;
