import React, { useState, useEffect } from 'react';
import { FormSwitchValidate, getForm } from 'e-ui-react';

export const Switch = ({ name, value, type, validation }) =>{
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const [validationStatus, setValidationStatus] = useState({});
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

const handleValidation = (switchValue)=>{
    // validation
    let result = { value: switchValue };
    if (validation !== undefined) {
       result = FormSwitchValidate( validation, switchValue.filter((v)=>(v?.checked===true)) );
       console.log(result);
       setValidationStatus(result);
    }
     // form Data
     if(formName!==undefined && form?.[formName]!==undefined){
       /*let updatedContext = {};
       updatedContext[formName] = Object.assign(form?.[formName],{
         [name]: result
       });*/
        formContext?.setForm(formName, { [name]: result });
     }
};

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
    handleValidation(newState);
    setSwitchValue(newState);
};

const handleRadioClick=(e, id)=>{
 const newState = switchValue.map(obj => {
  if (obj.id === id) { return { ...obj, checked: e.target.checked };  }
  else { return {...obj, checked: false }; }
 });
 console.log( switchValue, newState );
 handleValidation(newState);
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