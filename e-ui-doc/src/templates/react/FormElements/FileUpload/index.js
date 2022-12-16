import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const FileUploadPage = () =>{
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
   return (<>
   <DocumentHeader title="FileUpload" componentAttributesTable={ComponentAttributesTable} />
   <ContainerFluid>
    <Row>
      <Col></Col>
    </Row>
   </ContainerFluid>
   </>);
  };
  