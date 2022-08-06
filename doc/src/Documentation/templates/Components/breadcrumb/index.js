import React from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const BreadcrumbNotes= ()=>{
 const Note1 = ()=>{
  return (<>
    <div className="mtop10p mbot10p"><b>Simple Breadcrumb:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2','5']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
        </>} />
  </>);
 };
 return (<Order data={[<Note1 />]} />);
};

export const BreadcrumbPage = () =>{
 return (<>
 <SimpleHeader title="Breadcrumb" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<BreadcrumbNotes /> }]
  ]} />
 </>);
};