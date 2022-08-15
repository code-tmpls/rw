import React, { useState, useEffect } from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const BadgeNotes = ()=>{

  const Note1 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Simple Badges:</b></div>
    <Card backgroundColor={Colors.grey} component={<>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2','5T12']} />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote1 />
    </>} />
    </>);
  };

  const Note2 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Rounded-Pill Badges:</b></div>
    <Card backgroundColor={Colors.grey} component={<>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2','18T25']} />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote2 />
    </>} />
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const BadgePage = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
   }, []);
   
  return (<>
   <SimpleHeader title="Badge" />
   <Grid data={[
      [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<BadgeNotes /> }]
    ]} />
  </>);
};