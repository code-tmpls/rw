import React, { useEffect } from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const RowNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Row, Col with ContainerFluid:</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T15']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </>} />
  </>);
 };

 const Note2 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Row, Col with Container:</b></div>
    <Card backgroundColor={Colors.grey} component={<>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['21T31']} />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote2 />
    </>} />
    </>);
   };

 return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const GridSystemPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <SimpleHeader title="GridSystem" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<RowNotes /> }]
  ]} />
 
 </>);
};