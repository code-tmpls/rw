import React, { useEffect } from 'react';
import { Grid, SimpleHeader, Avatar, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const AvatarNotes = ()=>{
 
 const Note1 = () =>{
  return (<>
   <div className="mtop10p mbot10p"><b>Avatar (with Size = 50):</b></div>
   <Card backgroundColor={Colors.grey} component={<>
     <div className="mbot10p"><b>Sample Code:</b></div>
     <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5']} />
     <div className="mtop10p mbot10p"><b>Output:</b></div>
     <SampleNote1 />
   </>} />
  </>);
 };

 const Note2 = () =>{
  return (<>
   <div className="mtop10p mbot10p"><b>Avatar (with Size = 75):</b></div>
     <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['11']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote2 />
      </>} />
  </>);
 };

 const Note3 = () =>{
    return (<>
     <div className="mtop10p mbot10p"><b>Avatar (with Size = 100):</b></div>
       <Card backgroundColor={Colors.grey} component={<>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['17']} />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote3 />
        </>} />
    </>);
   };

 return (<Order data={[ <Note1 />, <Note2 />, <Note3 /> ]} />);
};

export const AvatarPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <SimpleHeader title="Avatar" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<AvatarNotes /> }]
  ]} />
 </>);
};