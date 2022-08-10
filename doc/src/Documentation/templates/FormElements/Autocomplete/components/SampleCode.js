import React, { useState, useEffect } from "react";
import { Autocomplete } from 'react-webpack-lib';

export const SampleNote1 = () =>{

 const data = ["Nellutla", "Nethula", "Nemalikanti"];

 return (<>
 <Autocomplete id="surname" name="surname" label="Surname" placeholder="Enter your Surname" autoCompleteData={data} />
 </>);
};

export const SampleNote2 = () =>{
 const [ data, setData ] = useState([]);

 useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => setData(json.map((d)=>d.name)));

  // Results:
  // ["Leanne Graham","Ervin Howell","Clementine Bauch","Patricia Lebsack","Chelsey Dietrich","Mrs. Dennis Schulist","Kurtis Weissnat","Nicholas Runolfsdottir V",
  // "Glenna Reichert","Clementina DuBuque"]

 },[]);

   
 return (<>
  <Autocomplete id="surname" name="surname" label="Surname" placeholder="Enter your Surname" autoCompleteData={data} />
 </>);

};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;