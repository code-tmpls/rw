import React, { useEffect } from "react";
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';


const AutocompleteNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete (With Static Data):</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5']} />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['8']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card backgroundColor={Colors.light} component={<SampleNote1 />} />
      </>} />
    </>);
  };

  const Note2 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete (From API):</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['13']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['15T26']} />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['29']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card backgroundColor={Colors.light} component={<SampleNote2 />} />
      </>} />
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const AutocompletePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <SimpleHeader title="Autocomplete" />
    <Grid data={[
      [{ sm: 12, md: '', lg: '', xl: '', xxl: '', component: <AutocompleteNotes /> }]
    ]} />
  </>);
};

