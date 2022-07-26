import React from 'react';
import { Choice } from '@LibFormElements/Choice/index.js';
import { Highlight } from '@LibCodeEditorsViewers/Highlight/index.js';
import { Grid } from '@LibLayout/Grid/index.js';
import CheckBox from './components/checkbox.js';
import Radio from './components/radio.js';
import { default as CheckBoxJS }  from '!!raw-loader!./components/checkbox.js';
import { default as RadioJS }  from '!!raw-loader!./components/radio.js';

export const ChoicePage = () =>{
 return (<>
    <Grid data={[
        [{ sm:1, md:1, lg:1, xl:1, xxl:1, component:<CheckBox /> },
         { sm:6, md:6, lg:6, xl:6, xxl:6, component:<Highlight lang="html" content={CheckBoxJS.toString()} lines={['5T7']} /> }],
        [{ sm:1, md:1, lg:1, xl:1, xxl:1, component:<Radio /> },
         { sm:6, md:6, lg:6, xl:6, xxl:6, component:<Highlight lang="html" content={RadioJS.toString()} lines={['5T7']} /> }]
    ]}/>
 </>);
};