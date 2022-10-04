import React, { useEffect } from 'react';
import { SimpleHeader, Table } from 'e-ui-react';


export const TablePage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (<><SimpleHeader title="Table" />
      <Table data={[{  "City": "Hyderabad", "Country": "India", "Continent":"Asia" },
                  {  "City": "Tokyo", "Country": "Japan", "Continent":"Asia"  },
                  {  "City": "Sydney", "Country": "Australia", "Continent":"Australia"  },
                  {  "City": "New York", "Country": "USA", "Continent":"North America"  }
      ]} />
   </>);
   
};