import React from "react";
import { FontAwesomeIcon, Drawer } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <Drawer 
    type="outline-primary"
    label={<><FontAwesomeIcon name="fa-bars" size="12" color="primary" /> Open Drawer</>}
    colors={['black','white']} 
    content={<div align="center">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>}
  />
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;