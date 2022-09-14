import React, { useEffect } from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { default as SampleCodeCSS } from '!!raw-loader!./components/SampleCode.css';

const CarouselNotes = () => {
  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Card Carousel:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeCSS.toString()} lang="css" />
        <div align="center" className="mbot10p"><b>SampleCode.css</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1T3']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['7T17', '18T28', '29T38']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['40T42']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['45']} />
        <div align="center"><b>SampleCode.js</b></div>
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
      </>} />
    </>);
  };
  return (<Order data={[<Note1 />]} />);
};

export const CarouselPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <SimpleHeader title="Carousel" />
    <Grid data={[
      [{ sm: 12, md: '', lg: '', xl: '', xxl: '', component: <CarouselNotes /> }]
    ]} />
  </>);
};