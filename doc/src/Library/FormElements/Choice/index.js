import React from 'react';
import './index.css';

export const Choice = ({ id, name, label, value, type, checked, disabled }) =>{
 return (<div className="form-check form-switch">
 <input className="form-check-input" type={type} name={name} value={value} id={id} checked={checked} disabled={disabled} />
 <label className="form-check-label" for={id}>{label}</label>
</div>);
};