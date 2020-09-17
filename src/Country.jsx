import React from 'react';



const Country = (props) =>{
 return(
    <div className="container">
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
           props.cont.map( (user, index) => 
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
