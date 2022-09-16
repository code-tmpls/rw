import React, { useEffect } from 'react';
import { SimpleHeader, Dropdown } from 'e-ui-react';

export const DropdownPage = () => {
 const menu = [{ header :"Andhra Pradesh", 
  options:[{ label:"Hyderabad", value:"Hyderabad" },
    { label:"Secunderabad", value:"Secunderabad" }] 
 },
 { header :"Arunachal Pradesh", 
 options:[{ label:"Itanagar", value:"Itanagar" },
   { label:"Vikaspur", value:"Vikaspur" }] 
},
{ header :"Assam", 
  options:[{ label:"Dispur", value:"Dispur" },
    { label:"Vilaspur", value:"Vilaspur" }] 
 },
];
    
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<><SimpleHeader title="Dropdown" />
  <Dropdown id="StatesCities" placeholder="Select your Dropdown" menu={menu} searchLabel="Search a Location" />
 </>);
   
};