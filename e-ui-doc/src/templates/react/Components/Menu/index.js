import React, { useEffect } from 'react';
import { SimpleHeader, Menu } from 'e-ui-react';

export const MenuPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
     <SimpleHeader title="Menu (Navbars, Tabs and Pills)" />

     <Menu type="tab" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
    
    <Menu type="pill" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
            
     <Menu type="nav" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>

     <Menu type="nav" align="center"  list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>

     <Menu type="nav" align="end"  list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>

    <Menu type="nav" layout="vertical" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />

    <Menu type="nav" layout="vertical" align="center" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />

     <Menu type="nav" layout="vertical" align="end" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />

     
    </>);
};