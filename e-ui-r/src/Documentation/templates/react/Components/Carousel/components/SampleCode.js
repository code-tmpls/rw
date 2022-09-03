
import React from "react";
import { Carousel, Card, Colors } from 'e-ui-react';
import './SampleCode.css';

export const SampleNote1 = () =>{
 
 const Component1 = ()=>{
   return (<div className="section1Component">
    <h4>Section #1</h4>
    <div>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
    molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
    viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </div>
   </div>);
 };

 const Component2 = ()=>{
  return (<div className="section2Component">
    <h4>Section #2</h4>
    <div>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
    molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
    viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </div>
  </div>);
 };

 const Component3 = ()=>{
  return (<div className="section3Component">
    <h4>Section #2</h4>
    <div>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
    molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
    viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
   </div>
  </div>);
 };

 let data = [<Card className="section1" component={<Component1 />} />,
    <Card className="section2" component={<Component2 />} />,
    <Card className="section3" component={<Component3 />} />];
 
 return (<>
 <Carousel data={data} />
 </>);

};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;
