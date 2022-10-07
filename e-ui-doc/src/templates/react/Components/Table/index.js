import React, { useEffect } from 'react';
import { SimpleHeader, Table } from 'e-ui-react';


export const TablePage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (<><SimpleHeader title="Table" />
      <Table title="1. DataSettings not defined" data={[{  "City": "Hyderabad", "Country": "India", "Continent":"Asia" },
                  {  "City": "Tokyo", "Country": "Japan", "Continent":"Asia"  },
                  {  "City": "Sydney", "Country": "Australia", "Continent":"Australia"  },
                  {  "City": <div>New York</div>, "Country": "USA", "Continent":"North America"  }
      ]} />

<Table title="2. DataSettings defined and Empty" data={[{  "City": "Hyderabad", "Country": "India", "Continent":"Asia" },
                  {  "City": "Tokyo", "Country": "Japan", "Continent":"Asia"  },
                  {  "City": "Sydney", "Country": "Australia", "Continent":"Australia"  },
                  {  "City": "New York", "Country": "USA", "Continent":"North America"  }
      ]} dataSettings={{ }}/>

   <Table title="3. DataSettings defined and it is true" data={[{  "City": "Hyderabad", "Country": "India", "Continent":"Asia" },
                  {  "City": "Tokyo", "Country": "Japan", "Continent":"Asia"  },
                  {  "City": "Sydney", "Country": "Australia", "Continent":"Australia"  },
                  {  "City": "New York", "Country": "USA", "Continent":"North America"  }
      ]} dataSettings={{ dataSequence: true }}/>

<Table title="4. DataSettings defined and it is false" data={[{  "City": "Hyderabad", "Country": "India", "Continent":"Asia" },
                  {  "City": "Tokyo", "Country": "Japan", "Continent":"Asia"  },
                  {  "City": "Sydney", "Country": "Australia", "Continent":"Australia"  },
                  {  "City": "New York", "Country": "USA", "Continent":"North America"  }
      ]} dataSettings={{ dataSequence: false }}/>
   </>);
   
};