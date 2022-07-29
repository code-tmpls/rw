import React, { useState, useEffect } from 'react';
import { Button, DeviceRecognizer, FontAwesomeIcon } from '@Lib';
import './index.css';

export const SideWrapperNavbar = (props) => {

  const [ toggle, setToggle ] = useState();
  const [ buttonToggle, setButtonToggle ] = useState(); 
  const [ buttonClass, setButtonClass ] = useState(); // fa-bars : true  fa-close : false

  useEffect(() =>{
    let deviceType = DeviceRecognizer();
    console.log(deviceType);
    if(deviceType==='xs' || deviceType==='sm') { setToggle(false);  } 
    else { setToggle(true); } 
    setButtonToggle(true);
  },[]);

  useEffect(()=>{
    setButtonClass((buttonToggle)?"fa fa-bars":"fa fa-close");
  },[buttonToggle]);

const HeaderLayout = (props) =>{
 let theme = (props.barTheme===undefined)?'outline-dark':props.barTheme;
 return (<div className="container-fluid" style={{ display:'block',paddingBottom:'5px' }}>
    <div className="row">
        <div className="col-xs-12 col-md-3">
        <a className="navbar-brand" href="#" 
          style={{ marginLeft:'15px'}} 
          onClick={()=>{ setToggle(!toggle);setButtonToggle(!buttonToggle); }}>
            <Button type={theme} style={{ marginRight:'5px' }} 
                label={<FontAwesomeIcon name={buttonClass} size="18" />} />
              <span>{props.title}</span>
        </a>
        </div>
          <div className="col-xs-12 col-md-9">
            <div className="row">
              {props.headerContent.map((data,index)=>{
                return (<div key={index} className={"col-xs-"+data.xs+" col-md-"+data.md}>{data.component}</div>);
              })}
            </div>
          </div>
    </div> 
    </div>);
};

  return (<div id="wrapper" className={(toggle!==null && toggle)?'toggled':''}>
  <div id="sidebar-wrapper">
    {(toggle!==null && !toggle) && props.sideWrapperContent}
  </div>
  <div id="page-content-wrapper">
    <nav className="navbar navbar-expand-lg bg-light">
      <HeaderLayout {...props} />
    </nav>
    {props.bodyContent}
  </div>
  </div>);

 };
