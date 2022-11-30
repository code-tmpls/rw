import React, { useEffect } from "react";
import { SimpleHeader, Order, Card, Highlight, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const OrderNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Order (with Bullets):</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['5']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </>} />
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Order (with Number):</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['11']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote2 />
  </>} />
  </>);
 };

 const Note3 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Order (with Number and Start Range):</b></div>
    <Card backgroundColor={Colors.grey} component={<>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['17']} />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote3 />
    </>} />
    </>);
   };

 return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
};

export const OrderPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (<div>
        <SimpleHeader title="Order" />
        <ContainerFluid>
            <Row>
                <Col><OrderNotes /></Col>
            </Row>
        </ContainerFluid>
    </div>);
};