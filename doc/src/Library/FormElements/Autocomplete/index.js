import React, { useState, useEffect } from "react";
import './index.css';

// const data = ["Action","Another Action","Something else here"];

export const Autocomplete = ({ id, name, label, placeholder, value, autoCompleteData }) =>{
 const [ filteredData, setFilteredData ] = useState([]);
 const [ show, setShow ] = useState(false);
 const [ autoCompleteValue, setAutoCompleteValue ] = useState((value===undefined)?'':value);

 const DataFilter = (val) =>{
  setAutoCompleteValue(val);
  setFilteredData(autoCompleteData.filter(n => val.length>0 && n?.toLowerCase().includes(val?.toLowerCase())));
 };

 return (<>
 <label className="form-label"><b>{label} :</b></label>
 <div className="dropdown">
 <input type="type" name={name} className="form-control  dropdown-toggle" placeholder={placeholder}
 id={id} data-bs-toggle="dropdown" aria-expanded="false" value={autoCompleteValue} 
 onChange={(e)=>{ DataFilter(e.target.value);setShow(true); }} />
 {show && filteredData.length>0 && (
  <ul className="dropdown-menu show" aria-labelledby={id}>
  {filteredData.map((d, i)=>{
    return (<li key={i} onClick={()=>{DataFilter(d);setShow(false); }}>
     <a className="dropdown-item" href="#">{d}</a>
    </li>);
  })}
 </ul>
 )}
 
</div>
</>);
};