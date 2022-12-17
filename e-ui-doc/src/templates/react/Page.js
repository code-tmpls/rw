import React from 'react';
import { SideWrapperNavbar, AccordianListItems, Colors, UrlParams } from 'e-ui-react';
import { SideWrapperData } from '@DocConfig/react/SideWrapperData.js';
import { NavMenuHeader }  from '@DocConfig/Header.js';

const Page = ({ content, activeId }) =>{

// const baseUrl = window.location.protocol+'//'+window.location.host+'/';
// const basePath = window.location.href.replaceAll(baseUrl,'').replaceAll('#','');

 return (<>
 <SideWrapperNavbar 
            barTheme="outline-primary" 
            // title="Documentation" 
            sideWrapperContent={<>
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
