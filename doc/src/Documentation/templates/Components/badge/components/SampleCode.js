import React from "react";
import { Badge } from 'react-webpack-lib';

export const SampleNote1 = () =>{
 return (<>
  <Badge type="primary" label="Primary Badge" size="12" />
  <Badge type="secondary" label="Secondary Badge" size="12" />
  <Badge type="success" label="Success Badge" size="12" />
  <Badge type="danger" label="Danger Badge" size="12" />
  <Badge type="warning" label="Warning Badge" size="12" />
  <Badge type="info" label="Info Badge" size="12" />
  <Badge type="light" label="Light Badge" size="12" />
  <Badge type="dark" label="Dark Badge" size="12" />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
  <Badge type="primary" model="rounded-pill" label="Primary Badge" size="12" />
  <Badge type="secondary" model="rounded-pill" label="Secondary Badge" size="12" />
  <Badge type="success" model="rounded-pill" label="Success Badge" size="12" />
  <Badge type="danger" model="rounded-pill" label="Danger Badge" size="12" />
  <Badge type="warning" model="rounded-pill" label="Warning Badge" size="12" />
  <Badge type="info" model="rounded-pill" label="Info Badge" size="12" />
  <Badge type="light" model="rounded-pill" label="Light Badge" size="12" />
  <Badge type="dark" model="rounded-pill" label="Dark Badge" size="12" />
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;