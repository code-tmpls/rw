import React, { useState } from "react";
import { FontAwesomeIcon, FormInputValidate } from "e-ui-react";

export const Password =({ name, type, label, value, formContext, validation })=>{
 // type="password"
 // type="confirmPassword" ref="name"(This looks using formContext)
 const formName = formContext?.name;
 const form = formContext?.form;
 const [passwordValue, setPasswordValue] = useState((value === undefined) ? '' : value);
 const [validationStatus, setValidationStatus] = useState({});
 const charValidated = validationStatus?.validationSuccess?.includes("minLength") && validationStatus?.validationSuccess?.includes("maxLength");
 const lowerCaseValidation=/(?=.*[a-z])/.test(passwordValue);
 const upperCaseValidation=/(?=.*[A-Z])/.test(passwordValue);
 const numberValidation=/(?=.*\d)/.test(passwordValue);
 const symbolValidation=/(?=.*\W)/.test(passwordValue);

 const passwordValidations = (email)=>{
    let result;
      if (validation !== undefined) {
          result = FormInputValidate(validation, email);
          console.log(result);
          setValidationStatus(result);
      }
      // form Data
      formContext?.setForm(Object.assign(form, {
        [formName]: {
          [name]: {
            value: value,
            result: result
          }
        }
      }));
   };

 const onPasswordUpdate = (event)=>{
    const email = event.target.value;
    setPasswordValue(email);
    passwordValidations(email);
 };

 return (<>
 <label className={((form?.[formName]?.submitted || passwordValue.length > 0) ?
      ((validationStatus?.errorMessage?.length > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label}</b></label>
 <input type="password" className={((form?.[formName]?.submitted || passwordValue.length > 0) ?
    ((validationStatus?.errorMessage?.length > 0) ? "form-control form-control-validation-invalid" :
      "form-control form-control-validationb-valid")
    : "form-control")}
    placeholder="Enter your Password" 
    onChange={onPasswordUpdate} />
     
     {((form?.[formName]?.submitted || passwordValue.length > 0) &&
        validationStatus?.errorMessage?.length > 0 && (!charValidated || 
            !lowerCaseValidation || !upperCaseValidation || !numberValidation || !symbolValidation
        )) && (<div style={{ fontSize:'12px', fontWeight:'bold', padding:'10px' }}>
        <div style={{ padding:'3px', color:(charValidated?'green':'red') }}>
            <FontAwesomeIcon name={charValidated?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should be in between 8-12 Characters</span>
        </div>
        <div style={{ padding:'3px', color:(lowerCaseValidation?'green':'red') }}>
            <FontAwesomeIcon name={lowerCaseValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Lowercase</span>
        </div>
        <div style={{ padding:'3px', color:(upperCaseValidation?'green':'red') }}>
            <FontAwesomeIcon name={upperCaseValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Uppercase</span>
        </div>
        <div style={{ padding:'3px', color:(numberValidation?'green':'red') }}>
            <FontAwesomeIcon name={numberValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Number</span>
        </div>
        <div style={{ padding:'3px', color:(symbolValidation?'green':'red') }}>
            <FontAwesomeIcon name={symbolValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Symbol</span>
        </div>
     </div>)}
 </>);
};
