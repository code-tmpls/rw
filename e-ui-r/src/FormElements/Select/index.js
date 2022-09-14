import React from 'react';

export const Select = ({ label, options, className, width, fontSize, onChange }) =>{
    let sClassName = (className===undefined)?'':className;
    let sWidth = (width===undefined)?'':width;
    let sfontSize = (fontSize===undefined)?'':fontSize;
    return (<select className={"form-select "+sClassName} style={{ width: sWidth+'px',fontSize: sfontSize+'px' }} onChange={onChange}>
     <option value="">{label}</option>
     {options.map((option, index)=><option key={index} id={option.id} value={option.value}>{option.label}</option>)}
    </select>);
};