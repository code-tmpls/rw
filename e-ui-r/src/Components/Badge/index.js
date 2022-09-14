import React from "react";

export const Badge = ({ type, model, label, size })=>{
 let m = (model===undefined)?'':model;
 let t = (type==='warning' || type==='info' || type==='light')?type+' text-dark':type;
 return (<span class={"badge "+m+" bg-"+t} style={{ margin:'3px', fontSize: size+'px' }}>{label}</span>);
};