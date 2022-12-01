import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const TableNotes = ()=>{

 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings is not defined:</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T6']} />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['10']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </>} />
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and Empty:</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T6']} />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['16']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote2 />
  </>} />
  </>);
 };

 const Note3 = () =>{
   return (<>
   <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and it is true:</b></div>
   <Card backgroundColor={Colors.grey} component={<>
   <div className="mbot10p"><b>Sample Code:</b></div>
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T6']} />
   <Highlight content={SampleCodeJS.toString()} lang="html" lines={['22']} />
   <div className="mtop10p mbot10p"><b>Output:</b></div>
   <SampleNote3 />
   </>} />
   </>);
 };

 const Note4 = () =>{
   return (<>
   <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and it is false:</b></div>
   <Card backgroundColor={Colors.grey} component={<>
   <div className="mbot10p"><b>Sample Code:</b></div>
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T6']} />
   <Highlight content={SampleCodeJS.toString()} lang="html" lines={['28']} />
   <div className="mtop10p mbot10p"><b>Output:</b></div>
   <SampleNote4 />
   </>} />
   </>);
  };

  const Note5 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and with Search Required:</b></div>
    <Card backgroundColor={Colors.grey} component={<>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T6']} />
    <Highlight content={SampleCodeJS.toString()} lang="html" lines={['34T36']} />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote5 />
    </>} />
    </>);
   };

 return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />,<Note5 />]} />);
};

export const TablePage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <SimpleHeader title="Table" />
 <ContainerFluid>
  <Row>
    <Col><TableNotes /></Col>
  </Row>
 </ContainerFluid>
 </>);
};