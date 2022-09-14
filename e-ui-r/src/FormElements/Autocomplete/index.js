import React, { useState, useEffect } from "react";
import HtmlToReactParser from 'html-to-react';
import './index.css';

// const data = ["Action","Another Action","Something else here"];

export const Autocomplete = ({ id, name, label, placeholder, value, autoCompleteData }) =>{
 const [ filteredData, setFilteredData ] = useState([]);
 const [ show, setShow ] = useState(false);
 const [ autoCompleteValue, setAutoCompleteValue ] = useState((value===undefined)?'':value);

 const DataFilter = (val, status) =>{
  console.log(val);
  setAutoCompleteValue(val);
  setFilteredData(autoCompleteData.filter(n => val.length>0 && n?.toLowerCase().includes(val?.toLowerCase())));
  setShow(status);
 };

 useEffect(()=>{
  console.log(autoCompleteValue);
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
  placeholder={placeholder} id={id} data-bs-toggle="dropdown" aria-expanded="false" 
  value={autoCompleteValue} 
 onChange={(e)=>{ DataFilter(e.target.value, true); }} />
 {show && filteredData.length>0 && (
  <ul className="dropdown-menu autocomplete-dropdown show" aria-labelledby={id}>
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