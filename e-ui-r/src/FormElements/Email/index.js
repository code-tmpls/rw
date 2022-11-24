import React, { useState } from "react";
import { FormInputValidate } from "e-ui-react";

export const Email =({ name, type, value, formContext, validation })=>{
 const formName = formContext?.name;
 const form = formContext?.form;
 const [emailValue, setEmailValue] = useState((value === undefined) ? '' : value);
 const [validationStatus, setValidationStatus] = useState({});

 // Validations
 const emailValidations = (email)=>{
  let result;
    if (validation !== undefined) {
        result = FormInputValidate(validation, email);
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

 const onEmailUpdate=(event)=>{
    const email = event.target.value;
    setEmailValue(email);
    emailValidations(email);
 };
 return (<>
 <label className={((form?.[formName]?.submitted || emailValue.length > 0) ?
      ((validationStatus?.errorMessage?.length > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>Email Address</b></label>
 <input type="text" placeholder="Enter Email Address" 
 className={((form?.[formName]?.submitted || emailValue.length > 0) ?
    ((validationStatus?.errorMessage?.length > 0) ? "form-control form-control-validation-invalid" :
      "form-control form-control-validationb-valid")
    : "form-control")}
 onChange={onEmailUpdate} />
 {((form?.[formName]?.submitted || emailValue.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}
        </div>
  }
 </>);
};
