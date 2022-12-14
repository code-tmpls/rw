import React, { useState, useEffect } from "react";
import { FormInputValidate, getForm } from "e-ui-react";

export const Select = ({ name, label, placeholder, value, validation, options, className, width, fontSize, onChange }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState((value === undefined) ? '' : value);
  const [validationStatus, setValidationStatus] = useState({});

  useEffect(()=>{
    if(form?.[formName]?.reset===true){
      setSelectValue('');
    }
  }, [form]);

  const DataFilter = (val, status) => {
    setSelectValue(val);
    setShow(status);
  };

  useEffect(() => {
    console.log( selectValue );
    // validation
    let result = { value: selectValue };
    if (validation !== undefined) {
      result = FormInputValidate(validation, selectValue);
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
    
  }, [selectValue]);

  let sClassName = (className===undefined)?'':className;
  let sWidth = (width===undefined)?'':width;
  let sfontSize = (fontSize===undefined)?'':fontSize;

  return (<>
    {label && (<label className={((form?.[formName]?.submitted || selectValue.length > 0) ?
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
      <select className={((form?.[formName]?.submitted || selectValue.length > 0) ?
          ((validationStatus?.errorMessage?.length > 0) ? "form-select form-control-validation-invalid "+sClassName :
            "form-select form-control-validation-valid "+sClassName)
          : "form-select "+sClassName)}
        style={{ width: sWidth+'px',fontSize: sfontSize+'px' }} 
      onChange={(event)=>{ onChange(event);DataFilter(e.target.value, true); }}>
     <option value="">{placeholder}</option>
     {options.map((option, index)=><option selected={option.value===selectValue} key={index} id={option.id} value={option.value}>{option.label}</option>)}
    </select>
      
      {((form?.[formName]?.submitted || selectValue.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}</div>
      }

    </div>
  </>);
};