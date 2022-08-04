import React, { useState } from 'react';
import { Grid, Choice, Select } from "react-webpack-lib";

export const InputGroup = ({ data }) =>{

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

 const TextBoxElement = ({ id, name, placeholder, value })=>{
  return (<input type="type" id={id} name={name} className="form-control" value={value} placeholder={placeholder} aria-label={placeholder} />);
 };
 const DatePickerElement = ({ id, name, value })=>{
  return (<input type="date" id={id} name={name} className="form-control" value={value} placeholder="dd-mm-yyyy" aria-label="dd-mm-yyyy" />);
 };

 const SelectElement = ({ label, options, className, width, fontSize, onChange }) =>{
    return (<Select label={label} options={options} className={className} width={width} fontSize={fontSize} onChange={onChange} />);
 }

 return (<div className="input-group mb-3">
 {data.map((d)=>{
    const eType = d.elementType.toLowerCase().trim();
    if(eType==='button'){
        return (<ButonElement type={d.type} label={d.label} />);
    } else if(eType==='checkbox') {
        return (<CheckBoxRadioElement type="checkbox" id={d.id} name={d.name} value={d.value}  />);
    } else if(eType==='radio') {
        return (<CheckBoxRadioElement type="radio" id={d.id} name={d.name} value={d.value} />);
    } else if(eType==='switch') {
        return (<SwitchElement type="checkbox" id={d.id} name={d.name} value={d.value}  />);
    } else if(eType==='span') {
        return (<SpanLabelElement label={d.label} />);
    } else if(eType==='datepicker') {
        return (<DatePickerElement id={d.id} name={d.name} />);
    } else if(eType==='textbox') {
        return (<TextBoxElement id={d.id} name={d.name} placeholder={d.placeholder} />);
    } else if(eType==='select') {
        return (<SelectElement label={d.label} options={d.options} className={d.className}
        width={d.width} fontSize={d.fontSize} onChange={d.onChange} />);
    }
 })}
</div>);
};