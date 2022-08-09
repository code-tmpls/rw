import React, { useState } from 'react';
import { Grid, Choice, Select } from "react-webpack-lib";

export const InputGroup = ({ data }) =>{

 const ButonElement = ({ index, type, label })=>(<button key={index} type="button" className={"btn btn-"+type}>{label}</button>);

 const CheckBoxRadioElement = ({ index, id, name, type, value, checked, disabled })=>{
    const [ check, setCheck ] = useState( (checked===undefined)?false:checked );
    let disable = (disabled===undefined)?false:disabled;
    return (<div key={index} className="input-group-text">
    <input className="form-check-input mt-0" aria-label={id} id={id} type={type} name={name} value={value} 
     checked={check} disabled={disable} onChange={()=>setCheck(!check)} />
  </div>);
 };

 const SwitchElement = ({ index, id, name, type, value, checked, disabled })=>{
    const [ check, setCheck ] = useState( (checked===undefined)?false:checked );
    let disable = (disabled===undefined)?false:disabled;
    return (<div key={index} className="input-group-text">
    <Choice aria-label={id} id={id} type={type} name={name} value={value} 
     checked={check} disabled={disable} onChange={()=>setCheck(!check)} />
  </div>);
 };

 const SpanLabelElement = ({ index, label }) =>{ return (<span key={index} className="input-group-text">{label}</span>); }

 const TextBoxElement = ({ index, id, name, placeholder, value })=>{
  return (<input key={index} type="type" id={id} name={name} className="form-control" value={value} placeholder={placeholder} aria-label={placeholder} />);
 };
 const DatePickerElement = ({ index, id, name, value })=>{
  return (<input key={index} type="date" id={id} name={name} className="form-control" value={value} placeholder="dd-mm-yyyy" aria-label="dd-mm-yyyy" />);
 };
 const TimePickerElement = ({ index, id, name, value })=>{
  return (<input key={index} type="time" id={id} name={name} className="form-control" value={value} placeholder="dd-mm-yyyy" aria-label="dd-mm-yyyy" />);
 };
 
 const SelectElement = ({ index, label, options, className, width, fontSize, onChange }) =>{
    return (<Select key={index} label={label} options={options} className={className} width={width} fontSize={fontSize} onChange={onChange} />);
 }

 return (<div className="input-group mb-3">
 {data?.map((d,i)=>{
    const eType = d.elementType.toLowerCase().trim();
    if(eType==='button') { return (<ButonElement key={i} type={d.type} label={d.label} />) }
    if(eType==='checkbox')  { return (<CheckBoxRadioElement key={i} type="checkbox" id={d.id} name={d.name} value={d.value}  />) }
    if(eType==='radio') { return (<CheckBoxRadioElement key={i} type="radio" id={d.id} name={d.name} value={d.value} />) }
    if(eType==='switch') { return (<SwitchElement key={i} type="checkbox" id={d.id} name={d.name} value={d.value}  />) }
    if(eType==='span') { return (<SpanLabelElement key={i} label={d.label} />) }
    if(eType==='datepicker') { return (<DatePickerElement key={i} id={d.id} name={d.name} value={d.value} />) }
    if(eType==='timepicker') { return (<TimePickerElement key={i} id={d.id} name={d.name} value={d.value} />) }
    if(eType==='textbox') { return (<TextBoxElement key={i} id={d.id} name={d.name} placeholder={d.placeholder} />) }
    if(eType==='select') { return (<SelectElement key={i} label={d.label} options={d.options} className={d.className}
        width={d.width} fontSize={d.fontSize} onChange={d.onChange} />) }

 })}
</div>);
};