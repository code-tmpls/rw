import React, { useState, useEffect } from "react";
import { FormInputValidate, getForm } from "e-ui-react";

export const TextArea = ({ name, label, placeholder, value, lines, validation }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [show, setShow] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState((value === undefined) ? '' : value);
  const [validationStatus, setValidationStatus] = useState({});

  useEffect(()=>{
    if(form?.[formName]?.reset===true){
      setTextAreaValue('');
    }
  }, [form]);

  const DataFilter = (val, status) => {
    setTextAreaValue(val);
    setShow(status);
  };

  useEffect(() => {
    console.log( textAreaValue );
    // validation
    let result = { value: textAreaValue };
    if (validation !== undefined) {
      result = FormInputValidate(validation, textAreaValue);
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
    
  }, [textAreaValue]);

  return (<>
    {label && (<label className={((form?.[formName]?.submitted || textAreaValue.length > 0) ?
      ((validationStatus?.errorMessage?.length > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>)}
    <div className="dropdown"
      tabIndex={1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShow(false);
        }
      }}>
      <textarea name={name}  rows={lines} 
        className={((form?.[formName]?.submitted || textAreaValue.length > 0) ?
          ((validationStatus?.errorMessage?.length > 0) ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")}
        placeholder={placeholder} data-bs-toggle="dropdown" aria-expanded="false"
        value={textAreaValue}
        onChange={(e) => { DataFilter(e.target.value, true); }}
      ></textarea>
      
      {((form?.[formName]?.submitted || textAreaValue.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}</div>
      }

    </div>
  </>);
};