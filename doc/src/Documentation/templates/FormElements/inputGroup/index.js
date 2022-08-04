import React from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors, InputGroup } from 'react-webpack-lib';
import SampleCode from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const InputGroupNotes = ()=>{
   const Note1 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Basic Input Group:</b></div>
       <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4T15']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['18']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleCode />
  </>} />
      </>);
   };

   return (<Order data={[<Note1 />]} />);
}; //

export const InputGroupPage = () =>{
 return (<><SimpleHeader title="InputGroup" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<InputGroupNotes /> }]
 ]} />
 </>);
};