import React from 'react';
import { Highlight } from 'react-webpack-lib';

const SampleCode = () =>{
 return (
  <Highlight content={'<div>Hello World</div>'} lang="html" />
 );
};

export default SampleCode;