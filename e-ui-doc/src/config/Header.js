import React from "react";
import { Select, NavBarTabs, UrlParams } from 'e-ui-react';

const url = UrlParams().basePrefix;

const ChooseTheme = () =>{
 return (<Select 
    placeholder="Select Theme"
    value="Light" 
    options={[{ id:'light', label:'Light Theme', value:'Light' },
            { id:'dark', label:'Dark Theme', value:'Dark' }]}
    className="navbar-layout float-md-end float-xs-start" 
    width="130" 
    fontSize="12" 
    onChange={(event)=>{
     let option = event.target.value;
     let bgColor = (option==='Dark')?'#282a36':'#fff';
     let color = (option==='Dark')?'#fff':'#282a36';
     document.body.style.backgroundColor = bgColor;
     document.body.style.color = color;
    }}  
 />);
};
  
export const NavMenuHeader = ( activeId ) =>[
 { xs:12, md:8, component:<NavBarTabs menulinks={[{ id:'get-started', url:'/', label:'Get Started' },
                                                { id:'javascript', url:'#', label:'Javascript' },
                                                { id:'react', url: url+'/Component/AccordianList', label:'React' },
                                                { id:'reactNative', url:'#', label:'React Native' },
                                                { id:'backend', url:url+'/CloudStorage/SelfFileUpload', label:'Backend Services' }
						/*{ id:'dsalgo', url:'#', label:'Data Structure & Algorithms' },
                                                        +   { id:'databases', url:'#', label:'Databases' }*/
                                        ]} 
                                        activeId={activeId} /> 
 },
 {  xs:12, md:4, component:<ChooseTheme /> }
];