import React from "react";
import { InputGroup } from 'react-webpack-lib';

const SampleCode = () =>{
 const inputGroupData = [
    { elementType:"button", type:"primary", label:"Primary Button"  }, // For Button
    { elementType:"checkbox", id:"element1", name:"element3", value:"hello1" }, // For Checkbox
    { elementType:"radio", id:"element2", name:"element4", value:"hello2" }, // For Radio Button
    { elementType:"switch", id:"element5", name:"element6", value:"hello3" }, // For Switch Button
    { elementType:"span", label:"@" }, // For Basic Span
    { elementType:"datepicker",  id:"lastName", name:"lastName" }, // For DatePicker
    { elementType:"textbox", id:"firstName", name:"firstName", placeholder:"Enter your FirstName" }, // For TextBox
    { elementType:"select", label:"Select Theme", options:[{ id:'light', label:'Light Theme', value:'Light' }, 
                                                           { id:'dark', label:'Dark Theme', value:'Dark' }],
      className:"navbar-layout", width:"130", fontSize:"12" } // For Select Options
 ];

 return (<>
 <InputGroup data={inputGroupData} />
 </>);

};

export default SampleCode;