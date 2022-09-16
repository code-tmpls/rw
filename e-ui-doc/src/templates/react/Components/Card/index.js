import React, { useEffect } from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';

const CardNotes = () => {
  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Simple Card:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T7']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['10']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
      </>} />
    </>);
  };
  return (<Order data={[<Note1 />]} />);
};

export const CardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <SimpleHeader title="Card" />
    <Grid data={[
      [{ sm: 12, md: '', lg: '', xl: '', xxl: '', component: <CardNotes /> }]
    ]} />
  </>);
};