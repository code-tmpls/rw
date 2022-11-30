import React, { useEffect } from 'react';
import { SimpleHeader, Card, ContainerFluid, Row, Col, Highlight, Order } from 'e-ui-react';
import CheckBoxBasic from './components/basic-checkbox.js';
import RadioBasic from './components/basic-radio.js';
import CheckBoxChecked from './components/checked-checkbox.js';
import RadioChecked from './components/checked-radio.js';
import { default as CheckBoxBasicJS } from '!!raw-loader!./components/basic-checkbox.js';
import { default as RadioBasicJS } from '!!raw-loader!./components/basic-radio.js';
import { default as CheckBoxCheckedJS } from '!!raw-loader!./components/checked-checkbox.js';
import { default as RadioCheckedJS } from '!!raw-loader!./components/checked-radio.js';


const CheckBoxChoice = ({ component, stringComponent }) => {
  return (<Card component={
    <ContainerFluid>
      <Row>
        <Col sm={1} md={1} lg={1} xl={1} xxl={1}>{component}</Col>
        <Col sm={10} md={10} lg={10} xl={10} xxl={10}>{stringComponent}</Col>
      </Row>
    </ContainerFluid>
  } />);
};

const RadioChoice = ({ component, stringComponent }) => {
  return (<Card component={
  <ContainerFluid>
    <Col sm={1} md={1} lg={1} xl={1} xxl={1}>{component}</Col>
    <Col sm={10} md={10} lg={10} xl={10} xxl={10}>{stringComponent}</Col>
  </ContainerFluid>
   } />);
};

const Point1 = () => {
  return (<>
    <div className="mbot15p"><b>Implementing Basic CheckBox and Basic Radio Elements:</b></div>
    <CheckBoxChoice component={<CheckBoxBasic />} stringComponent={<Highlight lang="html" content={CheckBoxBasicJS.toString()} lines={['5T7']} />} />
    <div align="center" className="pad15p"><b>CheckBox</b></div>
    <RadioChoice component={<RadioBasic />} stringComponent={<Highlight lang="html" content={RadioBasicJS.toString()} lines={['5T7']} />} />
    <div align="center" className="pad15p"><b>Radio</b></div>
  </>);
}

const Point2 = () => {
  return (<>
    <div className="mbot15p"><b>Implementing CheckBox and Radio Elements with Checked/UnChecked Options:</b></div>
    <CheckBoxChoice component={<CheckBoxChecked />} stringComponent={<Highlight lang="html" content={CheckBoxCheckedJS.toString()} lines={['5T7']} />} />
    <div align="center" className="pad15p"><b>CheckBox</b></div>
    <RadioChoice component={<RadioChecked />} stringComponent={<Highlight lang="html" content={RadioCheckedJS.toString()} lines={['5T7']} />} />
    <div align="center" className="pad15p"><b>Radio</b></div>
  </>);
}

export const ChoicePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <SimpleHeader title="Choice" />
    <ContainerFluid>
      <Row>
        <Col><Order type="number" data={[<Point1 />, <Point2 />]} /></Col>
      </Row>
    </ContainerFluid>
  </>);
};