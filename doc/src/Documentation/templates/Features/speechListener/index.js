import React from 'react';
import { Highlight } from 'react-webpack-lib';
import SpeechViewer from './components/SpeechViewer.js';
import { default as SpeechViewerJs }  from '!!raw-loader!./components/SpeechViewer.js';
import { default as SpeechViewerStyles }  from '!!raw-loader!./components/SpeechViewer.css';

export const SpeechListenerPage = () =>{
 
 return (<div className="container-fluid">
    <div className="row">
        <div className="col-md-12 pad15p">
            <h5><b>Speech Listener</b></h5><hr/>
        </div>
    </div>
   <div className="row">
    <div className="col-md-8 pad15p">
        <Highlight lang="javascript" content={SpeechViewerJs.toString()} />
        <div align="center" className="mbot15p"><b>SpeechViewer.js</b></div>
        <Highlight lang="css" content={SpeechViewerStyles} />
        <div align="center"  className="mbot15p"><b>SpeechViewer.css</b></div>
     </div>
     <div className="col-md-4 pad15p">
        <SpeechViewer />
    </div>
   </div>
 </div>); 

};