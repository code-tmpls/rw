import React, { useState, useEffect } from "react";
import { Switch } from 'e-ui-react';
import { ContainerFluid, Row, Col } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
    <ContainerFluid>
        <Row>
            <Col xl={4}>
                <div><b>Switch</b></div>
                <Switch type="checkbox" id="numbers" name="numbers" label="One" 
                    value={[{ id:1, label:"One", value:"1"},
                            { id:2, label:"Two", value:"2" },
                            { id:3, label:"Three", value:"3" }]} 
                    disabled={false} />
            </Col>
            <Col xl={4}>
                <div><b>Radio</b></div>
                <Switch type="radio" id="numbers" name="numbers" label="One" 
                    value={[{ id:1, label:"One", value:"1"},
                            { id:2, label:"Two", value:"2" },
                            { id:3, label:"Three", value:"3" }]} 
                    disabled={false} />
            </Col>
        </Row>
    </ContainerFluid>
 </>); 
};

export const SampleNote2 = () =>{
 return (<></>);

};

export const SampleNote3 = () =>{
 return (<></>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;