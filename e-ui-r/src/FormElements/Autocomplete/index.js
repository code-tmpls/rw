import React, { useState, useEffect } from "react";
import HtmlToReactParser from 'html-to-react';
import { FilterArray, FormInputValidate, KeyPressValidate } from "e-ui-react";
import './index.css';

// const data = ["Action","Another Action","Something else here"];

export const Autocomplete = ({ name, label, placeholder, value, autoCompleteData, formContext, validation }) => {
  
  const formName = formContext?.name;
  const form = formContext?.form;
  const [filteredData, setFilteredData] = useState([]);

  const [show, setShow] = useState(false);
  const [autoCompleteValue, setAutoCompleteValue] = useState((value === undefined) ? '' : value);
  const [validationStatus, setValidationStatus] = useState({});

  useEffect(()=>{
    setAutoCompleteValue('');
  }, [form?.[formName]?.reset]);

  const DataFilter = (val, status) => {
    setAutoCompleteValue(val);
    setFilteredData(FilterArray(autoCompleteData, val));
    setShow(status);
  };

  useEffect(() => {
    // validation
    let result = {};
    if (validation !== undefined) {
      result = FormInputValidate(validation, autoCompleteValue);
      console.log(result);
      setValidationStatus(result);
    }
    // form Data
    formContext?.setForm(Object.assign(form, {
      [formName]: {
        [name]: {
          value: autoCompleteValue,
          result: result
        }
      }
    }));
  }, [autoCompleteValue]);

  return (<>
    <label className={((form?.[formName]?.submitted || autoCompleteValue.length > 0) ?
      ((validationStatus?.errorMessage?.length > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>
    <div className="dropdown"
      tabIndex={1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShow(false);
        }
      }}>
      <input type="type" name={name}
        className={((form?.[formName]?.submitted || autoCompleteValue.length > 0) ?
          ((validationStatus?.errorMessage?.length > 0) ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")}
        placeholder={placeholder} data-bs-toggle="dropdown" aria-expanded="false"
        value={autoCompleteValue}
        onChange={(e) => { DataFilter(e.target.value, true); }}
        onKeyPress={(e) => KeyPressValidate(e, validation?.pattern?.value)}
      />
      {show && filteredData.length > 0 && (
        <ul className="dropdown-menu autocomplete-dropdown show" aria-labelledby={name}>
          {filteredData.map((d, i) => {
            const htmlToReactParser = new HtmlToReactParser.Parser();
            return (<li key={i} onClick={() => { DataFilter(d, false); }}>
              <a className="dropdown-item">
                {htmlToReactParser.parse(d.replace(new RegExp(autoCompleteValue, "gi"),
                  (str) => { return '<b>' + str + '</b>' }))}</a>
            </li>);
          })}
        </ul>
      )}
      
      {((form?.[formName]?.submitted || autoCompleteValue.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}</div>
      }

    </div>
  </>);
};