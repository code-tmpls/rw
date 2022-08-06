import React from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const CalendarNotes= ()=>{
 const Note1 = () =>{
        const NoteOutput = ()=>{
          return (<>
           <SampleNote1 />
          </>);
        };
    
        const NoteCode = ()=>{
          return (<>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5']} />
          </>);
        };
    
        return (<>
        <div className="mtop10p mbot10p"><b>Simple Calendar:</b></div>
        <Card backgroundColor={Colors.grey} component={<>
          <Grid data={[
            [{ sm:5, md:'', lg:'', xl:'', xxl:'', component:<NoteOutput /> },
            { sm:7, md:'', lg:'', xl:'', xxl:'', component:<NoteCode /> }]
          ]} />
        </>} />
        
        </>);
      };
 return (<Order data={[<Note1 />]} />);
};

export const CalendarPage = () =>{
 return (<>
 <SimpleHeader title="Calendar" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<CalendarNotes /> }]
  ]} />
 </>);
};