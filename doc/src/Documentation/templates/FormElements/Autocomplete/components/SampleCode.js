import React from "react";
import { Autocomplete } from 'react-webpack-lib';

export const SampleNote1 = () =>{
 return (<>
 <Autocomplete id="Surname" name="Surname" label="Surname" placeholder="Enter your Surname"
 autoCompleteData={["Nellutla", "Nethula", "Nemalikanti"]} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;