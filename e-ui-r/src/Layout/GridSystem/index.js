import React from "react";

export const Container = (props)=>{
 return (<div {...props} className={"container"+(props.className!==undefined?props.className:"")}>{props.children}</div>);
};

export const ContainerFluid = (props)=>{
 return (<div {...props} className={"container-fluid "+(props.className!==undefined?props.className:"")}>{props.children}</div>);
};

export const Row = (props)=>{
 return (<div {...props} className={"row "+(props.className!==undefined?props.className:"")}>{props.children}</div>);
};

export const Col = (props)=>{
 const sm = props.sm?props.sm:'12';
 const md = props.md?props.md:'12';
 const lg = props.lg?props.lg:'12';
 const xl = props.xl?props.xl:'12';
 const xxl = props.xxl?props.xxl:'12';
 return (<div {...props} className={"col-sm-"+sm+" col-md-"+md+" col-lg-"+lg+" col-xl-"+xl+" col-xxl-"+xxl
 +" "+(props.className!==undefined?props.className:"")}>{props.children}</div>);
};