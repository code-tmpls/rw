import React from 'react';
import { Highlight } from '@LibCodeEditorsViewers/Highlight/index.js';

const SampleCode = () =>{
 return (
  <Highlight content={'<div>Hello World</div>'} lang="html" />
 );
};

export default SampleCode;