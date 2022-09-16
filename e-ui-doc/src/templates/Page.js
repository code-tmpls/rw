import React from 'react';
import { SideWrapperNavbar, AccordianListItems, Colors, UrlParams } from 'e-ui-react';
import { SideWrapperData } from '@DocConfig/SideWrapperData.js';
import { NavMenuHeader }  from '@DocConfig/Header.js';

const Page = ({ content, activeId }) =>{

// const baseUrl = window.location.protocol+'//'+window.location.host+'/';
// const basePath = window.location.href.replaceAll(baseUrl,'').replaceAll('#','');

 return (<>
 <SideWrapperNavbar 
            barTheme="outline-primary" 
            title="Documentation" 
            sideWrapperContent={<>
            <div style={{ marginLeft:'30px', marginTop:'15px' }}><b>Get Started</b></div>
            <AccordianListItems 
                highlightColor={Colors.primary} 
                data={SideWrapperData} 
                selectKey="url" 
                selectValue={UrlParams().basePath} />  
            </>}
            headerContent={NavMenuHeader(activeId)} 
            bodyContent={content} 
            />
 </>);
};

export default Page;
