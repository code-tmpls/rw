import React from 'react';
import annyang from 'annyang';

export const SpeechListener = (mode, func) =>{
    if(mode==='init'){  
    annyang.addCommands({
        '*variable': function(variable) {
            func(variable);
        }
    });
    annyang.setLanguage('en-US');
    annyang.start({ autoRestart: true, continuous: true });
     return 'Speech Initialized';
    }
    if(mode==='pause'){  
        annyang.pause(); 
        return 'Speech Paused';
    }
    if(mode==='resume'){ 
         annyang.resume(); 
        return 'Speech Resumed';
    }
    if(mode==='stop'){  
        annyang.abort(); 
        return 'Speech Stopped';
    }

};


 