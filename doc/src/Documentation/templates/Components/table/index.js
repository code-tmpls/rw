import React from 'react';
import { Table } from '@LibComponents/Table/index.js';


export const TablePage = () =>{
 return (<Table data={[{
    "Column Name 01":"Value 01",
    "Column Name 02":"Value 02",
    "Column Name 03":"Value 03",
   },
   {
    "Column Name 01":"Value 01",
    "Column Name 02":"Value 02",
    "Column Name 03":"Value 03",
   }]}/>);
};