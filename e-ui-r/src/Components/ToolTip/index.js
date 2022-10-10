import React from "react";

export const ToolTip = ({ type })=>{
 return (<>
 <span data-bs-toggle="tooltip" data-bs-placement="top" title="Hooray!">Top</span>
 <span href="#" title="Dismissible popover" data-bs-toggle="popover" data-bs-trigger="focus" 
 data-bs-content="Click anywhere in the document to close this popover">Click me</span>
 </>);
};