import React,  { useState, useEffect } from 'react';
import { FormInputValidate } from "e-ui-react";

export const TextBox = ({ name, label, placeholder, value, formContext, validation  }) =>{
 const formName = formContext?.name;
 const form = formContext?.form;
 const [textBoxValue, setTextBoxValue] = useState((value === undefined) ? '' : value);
 const [validationStatus, setValidationStatus] = useState({});

// Validations
const textBoxValidations = (textBoxValue)=>{
    let result;
      if (validation !== undefined) {
          result = FormInputValidate(validation, textBoxValue);
          console.log(result);
          setValidationStatus(result);
      }
      // form Data
      if(formName!==undefined && form?.[formName]!==undefined){
        let updatedContext = {};
        updatedContext[formName] = Object.assign(form?.[formName],{
          [name]: result
        });
        formContext?.setForm(updatedContext);
      }
   };
  
   const onTextBoxUpdate=(event)=>{
      const textBoxValue = event.target.value;
      setTextBoxValue(textBoxValue);
      textBoxValidations(textBoxValue);
   };
 return(<>
<label className={((form?.[formName]?.submitted || textBoxValue.length > 0) ?
      ((validationStatus?.errorMessage?.length > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>
 <input className={((form?.[formName]?.submitted || textBoxValue.length > 0) ?
    ((validationStatus?.errorMessage?.length > 0) ? "form-control form-control-validation-invalid" :
      "form-control form-control-validation-valid")
    : "form-control")}
    placeholder={placeholder} 
    id={name} 
    name={name} 
    value={textBoxValue}
    onChange={onTextBoxUpdate} />
 {((form?.[formName]?.submitted || textBoxValue.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}</div>
      }
</>);
};