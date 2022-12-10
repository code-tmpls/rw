import React, { useState } from 'react';
import { FormInputValidate, getForm } from "e-ui-react";

export const ColorPicker = ({ name, label, value, validation }) =>{
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const [colorPickerValue, setColorPickerValue] = useState(value);
 const [validationStatus, setValidationStatus] = useState({});
 console.log("colorPickerValue: ",colorPickerValue);
 const ColorPickerChange = (value)=>{
    console.log(value);
    setColorPickerValue(value);
    // validation
    let result = { value: value };
    if (validation !== undefined) {
    result = FormInputValidate(validation, value);
    console.log(result);
    setValidationStatus(result);
    }
    // form Data
    if(formName!==undefined && form?.[formName]!==undefined){
    /* let updatedContext = {};
    updatedContext[formName] = Object.assign(form?.[formName],{
        [name]: result
    }); */
    formContext?.setForm(formName, { [name]: result });
    }
 };

 return (<div className="Colorpicker">
    <label className="form-label"><b>{label} :</b></label>
    <input type="color" className="form-control form-control-color" id={name} name={name} value={colorPickerValue}
    title="Choose your color" 
    onChange={(event)=>ColorPickerChange(event.target.value)} />
</div>);
};