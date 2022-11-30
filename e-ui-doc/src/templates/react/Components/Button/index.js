import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';

const ButtonNotes = () => {
  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Filled Buttons:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1', '2', '5T12']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
      </>} />
    </>);
  };

  const Note2 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Outlined Buttons:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1', '2', '18T25']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote2 />
      </>} />
    </>);
  }
  return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const ButtonPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <SimpleHeader title="Button" />
    <ContainerFluid>
      <Row>
        <Col><ButtonNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};