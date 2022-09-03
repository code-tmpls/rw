import React from "react";
import { Colors } from 'e-ui-react';

export const SimpleHeader = ({ title, backgroundColor, color })=>{
 let bgColor = (backgroundColor===undefined)?'none':backgroundColor;
 let fontColor = (color===undefined)?Colors.dark:color ;
 return (<div><h5 className="pageTitle" style={{ backgroundColor: bgColor, color: color }}><b>{title}</b><hr/></h5></div>);
};

export const FilledHeader = ({ title, backgroundColor, color })=>{
 return (<div style={{ fontSize:'18px', backgroundColor: backgroundColor, padding:'15px', color: color, letterSpacing:2, fontWeight:400 }}>
    {title}
 </div>);
};