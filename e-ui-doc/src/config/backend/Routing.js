import React from 'react';
import { AccordianPage } from '@DocReactComponents/Accordian/index.js';

const ReactPage  = React.lazy( ()=>import('@DocCore/backend/Page.js') );

export const BackendRoutes = [
 { path:"Component/BackendServices", component:<ReactPage content={<div>Test</div>} activeId="backend" /> },
];