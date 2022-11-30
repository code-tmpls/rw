import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const ReactContextNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Implementing Redux on Root Component:</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T16']} />
  <div className="mtop10p mbot10p"><b>ContextProvider</b> should be the Root Component of the App</div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['19']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </>} />
  </>);
 };

 return (<Order data={[<Note1 />]} />);
};

export const ReduxPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <SimpleHeader title="Redux" />
 <ContainerFluid>
  <Row>
    <Col><ReactContextNotes /></Col>
  </Row>
 </ContainerFluid>
 </>);
};