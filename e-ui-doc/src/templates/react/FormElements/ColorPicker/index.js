import React, { useEffect } from 'react';
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors  } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const ColorPickerNotes = () => {

    const Note1 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Simple Color Picker:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6']} />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card backgroundColor={Colors.light} component={<SampleNote1 />} />
        </>} />
      </>);
    };
  
    const Note2 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Color Picker with Form and a Validation:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']} />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['12T19']} />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card backgroundColor={Colors.light} component={<SampleNote2 />} />
        </>} />
      </>);
    };

    return (<Order data={[<Note1 />, <Note2 />]} />);
  };

export const ColorPickerPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
     <DocumentHeader title="ColorPicker" componentAttributesTable={ComponentAttributesTable} />
     <ContainerFluid>
      <Row>
        <Col><ColorPickerNotes /></Col>
      </Row>
    </ContainerFluid>
    </>);
};