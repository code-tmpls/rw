import React, { useState } from 'react';
import './index.css';

export const Choice = ({ id, name, label, value, type, checked, disabled }) =>{
 const [ check, setCheck ] = useState( (checked===undefined)?false:checked );
 let disable = (disabled===undefined)?false:disabled;
 return (<div className="form-check form-switch">
 <input className="form-check-input" type={type} name={name} value={value} id={id} checked={check} disabled={disable}  onChange={()=>setCheck(!check)}/>
 <label className="form-check-label">{label}</label>
</div>);
};