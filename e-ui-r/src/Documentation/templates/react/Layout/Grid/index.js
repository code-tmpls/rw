import React, { useEffect } from 'react';
import { SimpleHeader, Grid, Highlight } from 'e-ui-react';

const HelloWorld = () => {
   return <div style={{ border: '1px solid #ccc' }}>HelloWorld</div>
};
export const GridPage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (<>
      <SimpleHeader title="Grid" />
      <Grid data={[
         [{ sm: 2, md: '', lg: '', xl: '', xxl: '', component: <HelloWorld /> },
         { sm: 2, md: '', lg: '', xl: '', xxl: '', component: <HelloWorld /> },
         { sm: 4, md: '', lg: '', xl: '', xxl: '', component: <HelloWorld /> },
         { sm: 2, md: '', lg: '', xl: '', xxl: '', component: <HelloWorld /> },
         { sm: 2, md: '', lg: '', xl: '', xxl: '', component: <HelloWorld /> }],

         [{ component: <HelloWorld /> }],
      ]} />
   </>);
};