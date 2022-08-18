import React from "react";
import { Card, Colors } from 'react-webpack-lib';

export const SampleNote1 = () =>{
 
 const Component = () =>{
    return (<div><b>Hello World</b></div>);
 };

 return (<>
  <Card component={<Component />} backgroundColor={Colors.light} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;