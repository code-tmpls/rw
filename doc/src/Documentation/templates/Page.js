import React from 'react';
import { Select } from '@LibComponents/Forms/index.js';
import { NavBarTabs } from '@LibComponents/Tabs/NavBarTabs.js';
import { SideWrapperNavbar } from '@LibComponents/Navbar/components/sidewrapper/index.js';

import { AccordianListItems } from '@LibComponents/AccordianListItems/index.js';
import { Colors } from '../../Utils/GlobalStyles.js';
import { SideWrapperData } from '@DocConfig/SideWrapperData.js';
import { urlParams } from '@LibUtils/AppConfig.js';

export const Page = ({ content }) =>{
 
 const ChooseTheme = () =>{
  return (<Select 
            label="Select Theme" 
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

 const NavMenuHeader = [{
                            xs:12, 
                            md:6, 
                            component:<NavBarTabs 
                                        menulinks={[{ id:'javascript', url:'#', label:'Javascript' },
                                                    { id:'react', url:'#', label:'React' },
                                                    { id:'reactNative', url:'#', label:'React Native' }]} 
                                        activeId="react" 
                                      /> 
                        },
                        { 
                            xs:12, 
                            md:6, 
                            component:<ChooseTheme /> 
                        }];

// const baseUrl = window.location.protocol+'//'+window.location.host+'/';
// const basePath = window.location.href.replaceAll(baseUrl,'').replaceAll('#','');

 return (<>
 <SideWrapperNavbar 
            barTheme="outline-primary" 
            title="Documentation" 
            sideWrapperContent={<AccordianListItems 
                highlightColor={Colors.primary} 
                data={SideWrapperData} 
                selectKey="url" 
                selectValue={urlParams().basePath} />  }
            headerContent={NavMenuHeader} 
            bodyContent={content} 
            />
 </>);
};
