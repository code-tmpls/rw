import React from 'react';
import './index.css';

export const Choice = ({ id, name, label, value, type, checked, disabled }) =>{
 return (<div class="form-check form-switch">
 <input class="form-check-input" type={type} name={name} value={value} id={id} checked={checked} disabled={disabled} />
 <label class="form-check-label" for={id}>{label}</label>
</div>);
};