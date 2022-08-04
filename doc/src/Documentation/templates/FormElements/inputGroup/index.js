import React from 'react';
import { Grid, SimpleHeader, InputGroup } from 'react-webpack-lib';

const inputGroupData = [{ elementType:"button", type:"primary", label:"Primary Button"  },
{ elementType:"checkbox", id:"element1", name:"element3", value:"hello1" },
{ elementType:"radio", id:"element2", name:"element4", value:"hello2" },
{ elementType:"switch", id:"element5", name:"element6", value:"hello3" },
{ elementType:"span", label:"@" },
{ elementType:"datepicker",  id:"lastName", name:"lastName" },
{ elementType:"textbox", id:"firstName", name:"firstName", placeholder:"Enter your FirstName" },
{ elementType:"select", label:"Select Theme", options:[{ id:'light', label:'Light Theme', value:'Light' },
          { id:'dark', label:'Dark Theme', value:'Dark' }],
className:"navbar-layout",
width:"130",
fontSize:"12" }
];

export const InputGroupPage = () =>{
 return (<><SimpleHeader title="InputGroup" />
 <Grid data={[
    [{ sm:12, md:'', lg:'', xl:'', xxl:'', component:<InputGroup data={inputGroupData} /> }]
 ]} />
 </>);
};