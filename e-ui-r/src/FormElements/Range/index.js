import React, { useEffect, useState } from 'react';
import { FormInputValidate, getForm, ContainerFluid, Row, Col } from "e-ui-react";
import './index.css';

export const Range = ({ name, label, value, minValue, maxValue, validation }) =>{
 const min = minValue?minValue:0;
 const max = maxValue?maxValue:100;
 const setRangePosition=(value)=>Number(((value - min) * 100) / (max - min));

 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const [rangeValue, setRangeValue] = useState((value!==undefined?value:'0'));
 const [position, setPosition ] = useState(setRangePosition(rangeValue));
 const [validationStatus, setValidationStatus] = useState({});

 useEffect(()=>{ 
  // validation
  let result = { value: rangeValue };
  if (validation !== undefined) {
  result = FormInputValidate(validation, rangeValue.toString());
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
 },[rangeValue]);

 const onRangeChange = (value)=>{
  setPosition(setRangePosition(value));
  setRangeValue(value);
 };

 return(<>
  <label className={((form?.[formName]?.submitted || rangeValue?.toString()?.length > 0) ?
    ((validationStatus?.errorMessage?.length > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid"): "form-label")}><b>{label}</b></label>
    <div className="range-wrap">
      <input type="range" className="range" id={name} name={name} value={rangeValue} min={minValue} max={maxValue}
              onChange={(e)=>onRangeChange(e.target.value)}  />
      <output className="bubble" style={{ left: `calc(${position}% + (${8 - position * 0.15}px))` }}>
        {rangeValue}</output>
    </div>

    {((form?.[formName]?.submitted || rangeValue?.toString()?.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}</div>}

 </>);
};