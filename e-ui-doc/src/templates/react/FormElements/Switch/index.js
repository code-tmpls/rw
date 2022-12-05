import React, { useEffect } from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const SwitchNotes = () => {

    const Note1 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Switch :</b></div>
        <Card backgroundColor={Colors.grey} component={<>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6T25']} />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card backgroundColor={Colors.light} component={<SampleNote1 />} />
        </>} />
      </>);
    };

    return (<Order data={[<Note1 />]} />);
  };

export const SwitchPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Switch" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><SwitchNotes /></Col>
      </Row>
    </ContainerFluid>
    </>);
};