import React from 'react';
import { SimpleHeader, Grid, Order, Highlight } from 'react-webpack-lib';
import SampleCode, { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const AccordianNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mbot10p"><b>Simple Accordian that allows Toggle on Collapse:</b></div>
  <SampleNote1 />
  <div className="mtop10p mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T9']} />
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mbot10p"><b>Accordian with default Open:</b></div>
  <SampleNote2 />
  <div className="mtop10p mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['15T20']} />
  </>);
 };

 return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const AccordianPage = () =>{
 return (<>
 <SimpleHeader title="Accordian" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<AccordianNotes /> }]
  ]} />
 
 </>);
};