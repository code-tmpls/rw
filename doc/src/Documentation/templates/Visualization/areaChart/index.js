import React, { useEffect } from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';

const AreaChartNotes = () => {
  const Note1 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote1 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4T10']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['12T15']} />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Simple Area Chart:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <Grid data={[
          [{ sm: 5, md: '', lg: '', xl: '', xxl: '', component: <NoteChart /> },
          { sm: 7, md: '', lg: '', xl: '', xxl: '', component: <NoteCode /> }]
        ]} />
      </>} />

    </>);
  };

  const Note2 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote2 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['20T26']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['28T31']} />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Percentage Area Chart:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <Grid data={[
          [{ sm: 5, md: '', lg: '', xl: '', xxl: '', component: <NoteChart /> },
          { sm: 7, md: '', lg: '', xl: '', xxl: '', component: <NoteCode /> }]
        ]} />
      </>} />

    </>);
  };

  const Note3 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote3 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['36T42']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['44T45']} />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>FillByValue Area Chart:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <Grid data={[
          [{ sm: 5, md: '', lg: '', xl: '', xxl: '', component: <NoteChart /> },
          { sm: 7, md: '', lg: '', xl: '', xxl: '', component: <NoteCode /> }]
        ]} />
      </>} />

    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
};

export const AreaChartPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <SimpleHeader title="AreaChart" />
    <Grid data={[
      [{ sm: 12, md: '', lg: '', xl: '', xxl: '', component: <AreaChartNotes /> }]
    ]} />
  </>);
};