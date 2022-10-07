import React from "react";
import { Table } from 'e-ui-react';

const tableData = [{  "City": "Hyderabad", "Country": "India", "Continent":"Asia" },
                  {  "City": "Tokyo", "Country": "Japan", "Continent":"Asia"  },
                  {  "City": "Sydney", "Country": "Australia", "Continent":"Australia"  },
                  {  "City": <div style={{ backgroundColor:'yellow' }}>New York</div>, "Country": "USA", "Continent":"North America"  }];

export const SampleNote1 = () =>{
 return (<>
  <Table title="Simple Table - DataSettings not defined" data={tableData} />
  </>);
};

export const SampleNote2 = () =>{
  return (<>
   <Table title="Simple Table - DataSettings defined and Empty" data={tableData} dataSettings={{ }}/>
   </>);
};

export const SampleNote3 = () =>{
  return (<>
   <Table title="Simple Table - DataSettings defined and it is true" data={tableData} dataSettings={{ dataSequence: true }}/>
   </>);
 };
 
 export const SampleNote4 = () =>{
   return (<>
    <Table title="Simple Table - DataSettings defined and it is false" data={tableData} dataSettings={{ dataSequence: false }}/>
   </>);
 };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;