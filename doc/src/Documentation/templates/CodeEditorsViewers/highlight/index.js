import React from 'react';
import { Highlight } from '@LibCodeEditorsViewers/Highlight/index.js';
import SampleCode from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

export const HighlightPage = () =>{
 return (<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <h5 className="pageTitle"><b>Highlight</b><hr/></h5>
        </div>
    </div>
    <div className="row pageContent">
        <div className="col-md-6">
         <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
         <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5']} />
         <div className="outputTitle"><b>Output :</b></div>
         <SampleCode />
        </div>
        <div className="col-md-6">
         <div style={{ fontSize:'18px', backgroundColor:'#0d6efd', padding:'15px', color:'#fff', letterSpacing:2, fontWeight:400 }}>{'<Highlight />'} Attributes</div>
        </div>
    </div>
 </div>);
};