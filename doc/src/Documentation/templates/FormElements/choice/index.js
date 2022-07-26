import React from 'react';
import { Highlight } from '@LibCodeEditorsViewers/Highlight/index.js';
import { Grid } from '@LibLayout/Grid/index.js';
import CheckBox from './components/checkbox.js';
import Radio from './components/radio.js';
import { default as CheckBoxJS }  from '!!raw-loader!./components/checkbox.js';
import { default as RadioJS }  from '!!raw-loader!./components/radio.js';
import { Card } from '@LibComponents/Card/index.js';

const CheckBoxChoice = ()=>{
 return (<Card component={<Grid data={[
        [{ sm:1, md:1, lg:1, xl:1, xxl:1, component:<CheckBox /> },
        { sm:8, md:8, lg:8, xl:8, xxl:8, component:<Highlight lang="html" content={CheckBoxJS.toString()} lines={['5T7']} /> }]
    ]} />
 }/>);
};

const RadioChoice = ()=>{
 return (<Card component={<Grid data={[
    [{ sm:1, md:1, lg:1, xl:1, xxl:1, component:<Radio /> },
     { sm:8, md:8, lg:8, xl:8, xxl:8, component:<Highlight lang="html" content={RadioJS.toString()} lines={['5T7']} /> }]
    ]} />} />);
};

const ChoiceDoc = ()=>{
 return (<>
    <CheckBoxChoice />
    <div align="center" className="pad15p"><b>CheckBox</b></div>
    <RadioChoice />
    <div align="center" className="pad15p"><b>Radio</b></div>
    </>)
};

export const ChoicePage = () =>{
 return (<>
    <Grid data={[
         [{ sm:12, md:12, lg:12, xl:12, xxl:12, component:<h5><b>Form Element : Choice</b><hr/></h5> }],
        [{ sm:12, md:12, lg:12, xl:12, xxl:12, component:<ChoiceDoc /> }]
    ]} />


    
    
    
 </>);
};