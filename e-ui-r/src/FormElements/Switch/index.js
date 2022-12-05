import React, { useState, useEffect } from 'react';

export const Switch = ({ id, name, label, value, type }) =>{
 const [ switchValue, setSwitchValue ] = useState(
    value.map((v)=>{
        let check = (v?.checked===undefined)?false:v?.checked;
        let disable = (v?.checked===undefined)?false:v?.disabled;
        return {...v, checked: check, disabled: disable };
    })
 );

 useEffect(()=>{
  console.log(switchValue);
 },[switchValue]);
    /*
 const [ check, setCheck ] = useState( (checked===undefined)?false:checked );
 useEffect(()=>{
    console.log( check );
 },[check]);
 let disable = (disabled===undefined)?false:disabled;
 return (<div className="form-check form-switch">
 <input className="form-check-input" type={type} name={name} value={value} id={id} checked={check} 
    disabled={disable}  onChange={()=>setCheck(!check)}/>
 <label className="form-check-label">{label}</label>
</div>);
*/
const handleClick=(type, e, id)=>{
 if(type==='checkbox'){ handleCheckClick(e, id); }
 if(type==='radio'){ handleRadioClick(e, id); }
};

const handleCheckClick = (e, id)=>{
    const newState = switchValue.map(obj => {
        if (obj.id === id) { return { ...obj, checked: e.target.checked };  }
        else { return {...obj }; }
    });
    console.log( switchValue, newState );
    setSwitchValue(newState);
};

const handleRadioClick=(e, id)=>{
 const newState = switchValue.map(obj => {
  if (obj.id === id) { return { ...obj, checked: e.target.checked };  }
  else { return {...obj, checked: false }; }
 });
 console.log( switchValue, newState );
 setSwitchValue(newState);
};

return (<>
 {switchValue.map((v,i)=>{
    return (<div key={i} className="form-check form-switch">
        <input className="form-check-input" type={type} name={name} value={v?.value} id={v?.id} checked={v?.checked} 
        disabled={v?.disabled} onChange={(event)=>handleClick(type, event, v?.id)} />
        <label className="form-check-label">{v?.label}</label>
    </div>);
 })}
</>);
};