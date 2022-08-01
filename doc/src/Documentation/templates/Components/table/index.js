import React from 'react';
import { SimpleHeader, Table } from 'react-webpack-lib';


export const TablePage = () =>{
 return (<><SimpleHeader title="Table" />
 <Table data={[{
    "Column Name 01":"Value 01",
    "Column Name 02":"Value 02",
    "Column Name 03":"Value 03",
   },
   {
    "Column Name 01":"Value 01",
    "Column Name 02":"Value 02",
    "Column Name 03":"Value 03",
   }]}/>
   </>);
};