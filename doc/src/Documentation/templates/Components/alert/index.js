import React from 'react';
import { SimpleHeader, FilledHeader, Alert, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5, SampleNote6, SampleNote7, SampleNote8,
 SampleNote9, SampleNote10, SampleNote11, SampleNote12, SampleNote13, SampleNote14, SampleNote15, SampleNote16 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const AlertNotes1 = ()=>{

 const Note1 = () =>{
   return (<>
    <div className="mtop10p mbot10p"><b>Primary Alert:</b></div>
    <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['5']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
    </>} />
   </>);
 };

 const Note2 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Secondary Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['11']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote2 />
        </>} />
    </>);
 };

 const Note3 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Success Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['17']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote3 />
        </>} />
    </>);
 };

 const Note4 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Danger Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['23']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote4 />
        </>} />
    </>);
 };

 const Note5 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Warning Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['29']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote5 />
        </>} />
    </>);
 };

 const Note6 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Info Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['35']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote6 />
        </>} />
    </>);
 };

 const Note7 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Dark Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['41']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote7 />
        </>} />
    </>);
 };

 const Note8 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Light Alert:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['47']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote8 />
        </>} />
    </>);
 };

 return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />, <Note7 />, <Note8 />]} />);

};

const AlertNotes2 = ()=>{

    const Note1 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Primary Alert:</b></div>
       <Card backgroundColor={Colors.grey} component={<>
           <div className="mbot10p"><b>Sample Code:</b></div>
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['53']} />
           <div className="mtop10p mbot10p"><b>Output:</b></div>
           <SampleNote9 />
       </>} />
      </>);
    };
   
    const Note2 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Secondary Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['59']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote10 />
           </>} />
       </>);
    };
   
    const Note3 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Success Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['65']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote11 />
           </>} />
       </>);
    };
   
    const Note4 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Danger Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['71']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote12 />
           </>} />
       </>);
    };
   
    const Note5 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Warning Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['77']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote13 />
           </>} />
       </>);
    };
   
    const Note6 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Info Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['83']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote14 />
           </>} />
       </>);
    };
   
    const Note7 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Dark Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['89']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote15 />
           </>} />
       </>);
    };
   
    const Note8 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Light Alert:</b></div>
           <Card backgroundColor={Colors.grey} component={<>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['95']} />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote16 />
           </>} />
       </>);
    };
   
    return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />, <Note7 />, <Note8 />]} />);
   
   };

const AlertPage = () =>{
 return (<>
  <SimpleHeader title="Alert" />
  <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<FilledHeader title="Alerts with Heading and Body" backgroundColor={Colors.primary} color={Colors.light} /> }],
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<AlertNotes1 /> }],
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<FilledHeader title="Simple Alerts without Heading" backgroundColor={Colors.primary} color={Colors.light} /> }],
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<AlertNotes2 /> }]
  ]} />
 </>);
};

export default AlertPage;