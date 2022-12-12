import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const CardNotes = () => {
  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Simple Card:</b></div>
      <Card backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T7']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['10']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
      </Card>
    </>);
  };
  return (<Order data={[<Note1 />]} />);
};

export const CardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="Card" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><CardNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};