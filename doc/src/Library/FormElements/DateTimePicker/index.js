import React, { useState, useEffect } from 'react';
import { InputGroup } from 'react-webpack-lib';

export const DateTimePicker = ({ type, id, name }) =>{
 const [ params, setParams ] = useState([]);

 useEffect(()=>{
  console.log(type);
  if(type==='dateTimePicker'){
    setParams([{ elementType:"datePicker",  id:id+"-date", name:name+"-date" },
    { elementType:"timePicker",  id:id+"-time", name:id+"-time" }]);
  }
 },[]);

 return (<>
 {type==='datePicker' && (<div className="mb-3"><input type="date" id={id} name={name} class="form-control"/></div>)}
 {type==='timePicker' && (<div className="mb-3"><input type="time" id={id} name={name} class="form-control"/></div>)}
 {type==='dateTimePicker' && (<InputGroup data={params} />)}
 </>);
};