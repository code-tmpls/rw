import React, { useState } from 'react';
import { Choice } from "react-webpack-lib";
// Input Groups - Input, Select, Button
export const InputGroup = () =>{

 const ButonElement = ({ type, label })=>(<button type="button" className={"btn btn-"+type}>{label}</button>);

 const CheckBoxRadioElement = ({ id, name, type, value, checked, disabled })=>{
    const [ check, setCheck ] = useState( (checked===undefined)?false:checked );
    let disable = (disabled===undefined)?false:disabled;
    return (<div className="input-group-text">
    <input className="form-check-input mt-0" aria-label={id} id={id} type={type} name={name} value={value} 
     checked={check} disabled={disable} onChange={()=>setCheck(!check)} />
  </div>);
 };

 const SwitchElement = ({ id, name, type, value, checked, disabled })=>{
    const [ check, setCheck ] = useState( (checked===undefined)?false:checked );
    let disable = (disabled===undefined)?false:disabled;
    return (<div className="input-group-text">
    <Choice aria-label={id} id={id} type={type} name={name} value={value} 
     checked={check} disabled={disable} onChange={()=>setCheck(!check)} />
  </div>);
 };

 const SpanLabelElement = ({ label }) =>{ return (<span className="input-group-text">{label}</span>); }

 const TextBoxLabel = ({ id, name, placeholder, value })=>{
  return (<input type="type" id={id} name={name} className="form-control" value={value} placeholder={placeholder} aria-label={placeholder} />);
 };
 const DatePickerLabel = ({ id, name, value })=>{
    return (<input type="date" id={id} name={name} className="form-control" value={value} placeholder="dd-mm-yyyy" aria-label="dd-mm-yyyy" />);
   };

 return (<div className="input-group mb-3">
 <ButonElement type="primary" label="Primary Button" />
 <CheckBoxRadioElement type="radio" id="element1" name="element3" value="hello1"  />
 <CheckBoxRadioElement type="checkbox" id="element2" name="element4" value="hello1"  />
 <SwitchElement type="checkbox" id="element2" name="element4" value="hello1"  />
 <SpanLabelElement label="@" />
 <DatePickerLabel id="lastName" name="lastName" />
 <TextBoxLabel id="firstName" name="firstName" placeholder="Enter your FirstName" />
 <TextBoxLabel id="lastName" name="lastName" placeholder="Enter your LastName" />
</div>);
};