import React, { useState } from "react";
import { InputGroup, FontAwesomeIcon, Colors } from "e-ui-react";

const data = [{ }];
const Icon = ()=><FontAwesomeIcon name="fa-search" size="12" color={Colors.light} /> 
const inputGroupData = [
    { elementType:"textbox", id:"firstName", name:"firstName", placeholder:"Enter your FirstName" }, // For TextBox
    { elementType:"button", type:"secondary", label:<Icon /> }, // For Button
];

export const Dropdown = ()=>{
 const [status, setStatus] = useState(false);
 return (<div tabIndex={1}
  onBlur={(e) => {
   if (!e.currentTarget.contains(e.relatedTarget)) { setStatus(false); }
  }} >
    <div className="dropdown">
     <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" 
     onClick={()=>setStatus(!status)}>Select your Dropdown</button>
     <ul className={status?"dropdown-menu show":"dropdown-menu"} style={{ paddingBottom:'0px' }}>
      <div style={{ padding:'5px' }}>
      
        <InputGroup data={inputGroupData} />
      </div>
      <li><hr className="dropdown-divider" style={{ marginTop:'8px', marginBottom:'0px' }} /></li>
      <div className="scroll" style={{ maxHeight:'300px', overflowY:'scroll' }}>
      <li><h5 className="dropdown-header">Dropdown header 1</h5></li>
      <li><span className="dropdown-item" onClick={()=>console.log('true')}>Link 1</span></li>
      <li><span className="dropdown-item">Link 2</span></li>
      <li><span className="dropdown-item">Link 3</span></li>
      <li><h5 className="dropdown-header">Dropdown header 2</h5></li>
      </div>
     </ul>
  </div>
  
      </div>
    );
  }