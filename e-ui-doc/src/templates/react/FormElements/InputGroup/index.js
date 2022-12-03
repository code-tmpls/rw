import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors, InputGroup } from 'e-ui-react';
import SampleCode from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const InputGroupNotes = () => {
   const Note1 = () => {
      return (<>
         <div className="mtop10p mbot10p"><b>Basic Input Group:</b></div>
         <Card backgroundColor={Colors.grey} component={<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4T16']} />
            <Highlight content={SampleCodeJS.toString()} lang="html" lines={['19']} />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <Card backgroundColor={Colors.light} component={<SampleCode />} />
         </>} />
      </>);
   };

   return (<Order data={[<Note1 />]} />);
}; //

export const InputGroupPage = () => {
   
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (<>
   <DocumentHeader title="InputGroup" componentAttributesTable={ComponentAttributesTable} />
   <ContainerFluid>
      <Row>
         <Col><InputGroupNotes /></Col>
      </Row>
   </ContainerFluid>
   </>);
};