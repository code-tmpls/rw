import React from "react";
import { AppThemes, ContainerFluid, Row, Col, Card, Accordian } from 'e-ui-react';

const Header = ()=>{
 return (<ContainerFluid className="mb-1">
  <Row>
    <Col xl={12}>
      <div style={{ fontSize:'14px', paddingBottom:'5px',color:'#555', borderBottom:'1px solid #ccc' }}>
         <b>Choose your Theme</b>
       </div>
    </Col>
  </Row>
</ContainerFluid>);
};

const ThemeSettings = ()=>{
 const ThemeTitle = ({ title })=>{
   return (<div style={{ fontSize:'14px', paddingBottom:'5px',color:'#555' }}><b>{title}</b></div>);
 };
 const ThemeHeaders = ()=>{
    return (<ContainerFluid>
        <Row>
            <Col xl={3}><b>H1</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H2</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H3</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H4</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H5</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
    </ContainerFluid>);
 };
 return (<Accordian id="AccordianExample"
 data={[{ id:"Item#1", 
          title: (<ThemeTitle title="NavBars" />), 
          component:"This is the first item's accordion body"  
        },
        { id:"Item#2", 
          title: (<ThemeTitle title="Headers" />), 
          component:<ThemeHeaders /> 
        },
        {   id:"Item#3", 
            title:(<ThemeTitle title="Body" />), 
            component:"This is the Third item's accordion body"  
        }]} 
/>);
};

export const AppThemeBuilder = ()=>{
 return (<ContainerFluid>
    <Row  className="mt-1">
        <Col xl={4}>
            <Card>
                {/** */}
                <Header />
                <ThemeSettings />
                {/** */}
            </Card>
        </Col>
    </Row>
</ContainerFluid>);
};
