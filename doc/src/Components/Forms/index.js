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

/*
<Select label="Select Theme" 
    options={[{ id:'light', label:'Light Theme', value:'Light' },
        { id:'dark', label:'Dark Theme', value:'Dark' }]}
className="navbar-layout float-md-end float-xs-start" width="130" fontSize="12" onChange={(event)=>{
        let option = event.target.value;
        let bgColor = (option==='Dark')?'#282a36':'#fff';
        let color = (option==='Dark')?'#fff':'#282a36';
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = color;
    }}  />
*/