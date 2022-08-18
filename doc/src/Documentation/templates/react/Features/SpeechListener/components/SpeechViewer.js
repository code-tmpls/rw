import React, { useState } from 'react';
import { Button, FontAwesomeIcon, SpeechListener } from 'react-webpack-lib';
import './SpeechViewer.css';

const SpeechViewer = () =>{
    const [ speechState, setSpeechState ] = useState();
    const [ speechText, setSpeechText ] = useState();
   
    return (<>
           <div>
               <Button type="primary" 
                   label={<><span className="speechLabel">Start</span><FontAwesomeIcon name="fa fa-play"/></>} 
                   onClick={()=>{ 
                       SpeechListener('init', (variable)=>{ setSpeechText(variable);}) 
                       setSpeechState(<><FontAwesomeIcon name="fa fa-play"/> Recording Initiated</>);
                   }} /> 
               <Button type="warning" 
                   label={<><span className="speechLabel">Pause</span><FontAwesomeIcon name="fa fa-pause"/></>}  
                   onClick={()=>SpeechListener('pause')} />
               <Button type="success" 
                   label={<><span className="speechLabel">Resume</span><FontAwesomeIcon name="fa fa-play"/></>} 
                   onClick={()=>SpeechListener('resume')} />
               <Button type="danger" 
                   label={<><span className="speechLabel">Stop</span><FontAwesomeIcon name="fa fa-stop"/></>} 
                   onClick={()=>SpeechListener('stop')} />
               <div align="right" className="speechLabel"><b>{speechState}</b></div>
           </div>
           <div className="speechViewer"><b>{speechText}</b></div>
           </>);
};

export default SpeechViewer;