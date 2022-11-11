import React, { useState, useEffect, createContext as createFormContext, useContext as useForm } from "react";

const FormContext = createFormContext();

export const getForm = ()=> useForm(FormContext);

export const Form = ({ name, children }) =>{
  const [ form, updateForm ] = useState({});
  const setForm = (data) => {
    updateForm({ ...form, ...data } );
  };
  const onSubmitForm = ()=>{
    document.getElementById(name).className = "was-validated";
  };
  useEffect(()=>{
    console.log( form );
  },[form]);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      <form id={name}>
     {React.Children.map(children, child => {
            return React.cloneElement(child, { formContext:{ name, form, setForm } })
      })}
      <input type="button" value="Form Submit" onClick={()=>onSubmitForm()}/>
      </form>
    </FormContext.Provider>
  );
}