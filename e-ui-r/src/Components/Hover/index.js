import React from "react";
import './index.css';

export const Hover = ({ type, placement, component, hoverContent })=>{

 return (<>
 {type==='tooltip' && (
      <span className="tooltipComponent">{component}
      <span className={"tooltiptext tooltiptext-"+placement}>{hoverContent}</span></span>
 )}
 
 
 </>);
};