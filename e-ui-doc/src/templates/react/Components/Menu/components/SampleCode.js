import React from "react";
import { Menu } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
    <Menu type="tab" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
  </>);
};

export const SampleNote2 = () =>{
  return (<>
   <Menu justify={true} type="tab" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
   </>);
};

export const SampleNote3 = () =>{
  return (<>
    <Menu type="pill" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
  </>);
};

export const SampleNote4 = () =>{
  return (<>
  <Menu justify={true} type="pill" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
  </>);
};

export const SampleNote5 = () =>{
  return (<>
   <Menu type="nav" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>
  </>);
};

export const SampleNote6 = () =>{
  return (<>
   <Menu type="nav" align="center"  list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>
  </>);
};

export const SampleNote7 = () =>{
  return (<>
   <Menu type="nav" align="end"  list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

export const SampleNote8 = () =>{
  return (<>
   <Menu type="nav" layout="vertical" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

export const SampleNote9 = () =>{
  return (<>
   <Menu type="nav" layout="vertical" align="center" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

export const SampleNote10 = () =>{
  return (<>
   <Menu type="nav" layout="vertical" align="end" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;