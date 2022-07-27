import React from 'react';
import { Highlight } from '@LibCodeEditorsViewers/Highlight/index.js';
import { Grid } from '@LibLayout/Grid/index.js';
import { Order } from '@LibLayout/Order/index.js';
import CheckBoxBasic from './components/basic-checkbox.js';
import RadioBasic from './components/basic-radio.js';
import CheckBoxChecked from './components/checked-checkbox.js';
import RadioChecked from './components/checked-radio.js';
import { default as CheckBoxBasicJS }  from '!!raw-loader!./components/basic-checkbox.js';
import { default as RadioBasicJS }  from '!!raw-loader!./components/basic-radio.js';
import { default as CheckBoxCheckedJS }  from '!!raw-loader!./components/checked-checkbox.js';
import { default as RadioCheckedJS }  from '!!raw-loader!./components/checked-radio.js';
import { Card } from '@LibComponents/Card/index.js';


const CheckBoxChoice = ({ component, stringComponent })=>{
 return (<Card component={<Grid data={[
      [{ sm:1, md:1, lg:1, xl:1, xxl:1, component:component },
       { sm:8, md:8, lg:8, xl:8, xxl:8, component:stringComponent }]
     ]} />
    }/>);
};
         
const RadioChoice = ({ component, stringComponent })=>{
    return (<Card component={<Grid data={[
      [{ sm:1, md:1, lg:1, xl:1, xxl:1, component:component },
      { sm:8, md:8, lg:8, xl:8, xxl:8, component:stringComponent }]
      ]} />} 
    />);
};

const Point1 = () =>{
 return (<>
  <div className="mbot15p"><b>Implementing Basic CheckBox and Basic Radio Elements:</b></div>
  <CheckBoxChoice component={<CheckBoxBasic />} stringComponent={<Highlight lang="html" content={CheckBoxBasicJS.toString()} lines={['5T7']} />} />
  <div align="center" className="pad15p"><b>CheckBox</b></div>
  <RadioChoice  component={<RadioBasic />} stringComponent={<Highlight lang="html" content={RadioBasicJS.toString()} lines={['5T7']} />} />
  <div align="center" className="pad15p"><b>Radio</b></div>
 </>);
}

const Point2 = () =>{
    return (<>
     <div className="mbot15p"><b>Implementing CheckBox and Radio Elements with Checked/UnChecked Options:</b></div>
     <CheckBoxChoice component={<CheckBoxChecked />} stringComponent={<Highlight lang="html" content={CheckBoxCheckedJS.toString()} lines={['5T7']} />} />
     <div align="center" className="pad15p"><b>CheckBox</b></div>
     <RadioChoice  component={<RadioChecked />} stringComponent={<Highlight lang="html" content={RadioCheckedJS.toString()} lines={['5T7']} />} />
     <div align="center" className="pad15p"><b>Radio</b></div>
    </>);
   }

export const ChoicePage = () =>{
 return (<>
    <Grid data={[
         [{ sm:12, md:12, lg:12, xl:12, xxl:12, component:<h5><b>Form Element : Choice</b><hr/></h5> }],
        [{ sm:12, md:12, lg:12, xl:12, xxl:12, component:<Order type="number" data={[<Point1 />,<Point2 />]} /> }]
    ]} />    
 </>);
};