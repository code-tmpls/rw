import React from 'react';
import { Grid, Highlight } from '@Lib';

const HelloWorld = ()=>{
 return <div style={{ border:'1px solid #ccc'}}>HelloWorld</div>
};
export const GridPage = () =>{
 return (<Grid data={[
    [{ sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:4, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> }],

    [{ component:<HelloWorld /> }],
 ]}/>);
};