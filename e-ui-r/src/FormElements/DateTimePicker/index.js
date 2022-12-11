import React, { useState, useEffect } from 'react';
import { InputGroup } from 'e-ui-react';

export const DateTimePicker = ({ type, id, name, value, minValue, maxValue }) =>{
 let t = (type===undefined)?'':type?.toLowerCase();
 console.log(type, t);
 const [ params, setParams ] = useState([]);

 useEffect(()=>{
  console.log(type);
  if(type==='dateTimePicker'){
    setParams([{ elementType:"datePicker",  id:id+"-date", name:name+"-date", value:value?.split(" ")[0] },
    { elementType:"timePicker",  id:id+"-time", name:id+"-time", value:value?.split(" ")[1] }]);
  }
 },[]);
console.log(t);
 return (<>

 {t==='datepicker' && 
 (<div className="mb-3">
    <input type="date" id={id} name={name} value={value} min={minValue} max={maxValue} class="form-control"/>
  </div>)}

 {t==='timepicker' && 
 (<div className="mb-3">
  <input type="time" id={id} name={name} value={value} class="form-control"/>
  </div>)}

 {t==='datetimepicker' && 
 (<InputGroup data={params} />)}

 </>);
};