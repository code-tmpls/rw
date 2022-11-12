import React, { useState, useEffect, createContext as createFormContext, useContext as useForm } from "react";

const FormContext = createFormContext();

export const getForm = ()=> useForm(FormContext);

export const Form = ({ name, children }) =>{
  const [ form, updateForm ] = useState({});
  const setForm = (data) => {
    updateForm({ ...form, ...data } );
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


  useEffect(()=>{
    console.log( JSON.stringify(form) );
  },[form]);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      <form id={name}>
     {React.Children.map(children, child => {
            return React.cloneElement(child, { formContext:{ name, form, setForm } })
      })}
      <input type="button" value="Form Submit" onClick={()=>onSubmitForm()}/>
      <input type="button" value="Form Reset" onClick={()=>onResetForm()}/>
      </form>
    </FormContext.Provider>
  );
}