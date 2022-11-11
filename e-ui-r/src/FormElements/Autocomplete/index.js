import React, { useState, useEffect } from "react";
import HtmlToReactParser from 'html-to-react';
import { FilterArray } from "e-ui-react";
import './index.css';

// const data = ["Action","Another Action","Something else here"];

export const Autocomplete = ({ name, label, placeholder, value, autoCompleteData, formContext, validation }) =>{

 const [ filteredData, setFilteredData ] = useState([]);

 const [ show, setShow ] = useState(false);
 const [ autoCompleteValue, setAutoCompleteValue ] = useState((value===undefined)?'':value);

 const DataFilter = (val, status) =>{
  setAutoCompleteValue(val);
  setFilteredData(FilterArray(autoCompleteData, val));
  setShow(status);
 };

 useEffect(()=>{
  let formName = formContext?.name;
  let form = formContext?.form;
  formContext?.setForm(Object.assign(form, { 
    [formName] : { 
      [name]: autoCompleteValue,
      "validationSteps": validationSteps,
      "validationStatus":{

      } }
    }));
  // validationSteps
 },[autoCompleteValue]);

 return (<>
 <label className="form-label"><b>{label} :</b></label>
 <div className="dropdown"
 tabIndex={1}
 onBlur={(e) => {
   if (!e.currentTarget.contains(e.relatedTarget)) {
    setShow(false);
   }
 }}>
 <input type="type" name={name} className="form-control dropdown-toggle" 
  placeholder={placeholder} data-bs-toggle="dropdown" aria-expanded="false" 
  value={autoCompleteValue} 
 onChange={(e)=>{ DataFilter(e.target.value, true); }} 
 required={validation?.required?.value}
 />
 <div align="right" className="invalid-feedback">{validation?.required?.value}</div>
 {show && filteredData.length>0 && (
  <ul className="dropdown-menu autocomplete-dropdown show" aria-labelledby={name}>
  {filteredData.map((d, i)=>{
    const htmlToReactParser = new HtmlToReactParser.Parser();
    return (<li key={i} onClick={()=>{ DataFilter(d, false); }}>
     <a className="dropdown-item">
      { htmlToReactParser.parse( d.replace( new RegExp(autoCompleteValue, "gi"), (str)=>{return '<b>'+str+'</b>'} ) ) }</a>
    </li>);
  })}
 </ul>
 )}
 
</div>
</>);
};