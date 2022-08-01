import React from 'react';
import { SimpleHeader, Grid, Highlight } from 'react-webpack-lib';

const HelloWorld = ()=>{
 return <div style={{ border:'1px solid #ccc'}}>HelloWorld</div>
};
export const GridPage = () =>{
 return (<>
 <SimpleHeader title="Grid" />
 <Grid data={[
    [{ sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:4, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> },
    { sm:2, md:'', lg:'', xl:'', xxl:'', component:<HelloWorld /> }],

    [{ component:<HelloWorld /> }],
 ]}/>
 </>);
};