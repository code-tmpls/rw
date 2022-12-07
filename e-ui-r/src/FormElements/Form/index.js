import React, { useState, useEffect, createContext as createFormContext, useContext as useForm } from "react";
import { Button } from "e-ui-react";

const FormContext = createFormContext();

export const getForm = ()=> useForm(FormContext);

export const Form = ({ name, children, onSubmit }) =>{

  const [ form, updateForm ] = useState({[name]:{}});
  
  const setForm = (name, data) => {
    let d = { [name]: Object.assign(form[name], data) };
    updateForm({ ...form, ...d });
  };

  const onSubmitForm = ()=>{
    setForm(Object.assign(form, {
      [name]:{
        submitted: true
      }
    }));
  };

  const onResetForm = ()=>{
    setForm(Object.assign(form, {
      [name]: {
        reset: true
      }
    }));
  };

  const onSubmission = (event)=>{
    event.preventDefault();
  };

  useEffect(()=>{
    console.log("Form Values [Received]: ", JSON.stringify(form) );
  },[form]);

  return (
    <FormContext.Provider value={{ name, form, setForm }}>
      <form id={name} onSubmit={(event)=>onSubmission(event)}>
       {children}
      <div align="right" style={{ paddingTop:'5px' }}>
        <Button type="success" label="Submit" size={11} onClick={()=>onSubmitForm()} />
        <Button type="danger" label="Reset" size={11} onClick={()=>onResetForm()} />
      </div>
      </form>
    </FormContext.Provider>
  );
}