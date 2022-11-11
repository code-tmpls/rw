import React, { useState, useEffect, createContext as createFormContext, useContext as useForm } from "react";

const FormContext = createFormContext();

export const getForm = ()=> useForm(FormContext);

export const Form = ({ name, children }) =>{
  const [ form, updateForm ] = useState({});
  const setForm = (data) => {
    updateForm({ ...form, ...data } );
  };
  useEffect(()=>{
    console.log( form );
  },[form]);
  return (
    <FormContext.Provider value={{ form, setForm }}>
     {React.Children.map(children, child => {
            return React.cloneElement(child, { formContext:{ name, form, setForm } })
      })}
    </FormContext.Provider>
  );
}