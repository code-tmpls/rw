import React, { useEffect } from 'react';
import { SimpleHeader, Grid, Order, Card, Highlight, Colors } from 'react-webpack-lib';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import IndexHtml from '!!raw-loader!./components/code/index.html'; 
import IndexJS from '!!raw-loader!./components/code/index.js'; 
import IndexCSS from '!!raw-loader!./components/code/index.css'; 

const StackblitzNotes = ()=>{

 const Note1 = () =>{
  const HtmlTemplate = ()=>{
    return (<>
     <Highlight content={IndexHtml.toString()} style={{ height:'100px' }} lang="html" />
     <div align="center" className="mbot10p"><b>index.html</b></div>
    </>);
  };
  const JSTemplate = ()=>{
    return (<>
     <Highlight content={IndexJS.toString()} style={{ height:'100px' }} lang="javascript" />
     <div align="center" className="mbot10p"><b>index.js</b></div>
    </>);
  };
  const CSSTemplate = ()=>{
    return (<>
     <Highlight content={IndexCSS.toString()} style={{ height:'100px' }} lang="html" />
     <div align="center" className="mbot10p"><b>index.css</b></div>
    </>);
  };

  return (<>
  <div className="mtop10p mbot10p"><b>Simple Stackblitz Notebook ( Open in New Window ):</b></div>
  <Card backgroundColor={Colors.grey} component={<>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Grid data={[
    [{ sm:4, md:'', lg:'', xl:'', xxl:'', component:<HtmlTemplate /> },
    { sm:4, md:'', lg:'', xl:'', xxl:'', component:<JSTemplate /> },
    { sm:4, md:'', lg:'', xl:'', xxl:'', component:<CSSTemplate /> }]
   ]} />
   <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['2T4']} /> },
    { sm:12, md:'', lg:'', xl:'', xxl:'', component:<Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T25']} /> },
    { sm:12, md:'', lg:'', xl:'', xxl:'', component:<Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['29']} /> }]
   ]} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </>} />
  </>);
 };

 return (<Order data={[<Note1 />]} />);
};

export const StackblitzPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <SimpleHeader title="Stackblitz" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<StackblitzNotes /> }]
  ]} />
 
 </>);
};