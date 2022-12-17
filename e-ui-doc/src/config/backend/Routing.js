import React from 'react';

const BackendPage  = React.lazy( ()=>import('@DocCore/backend/Page.js') );

export const BackendRoutes = [
 { path:"CloudStorage/SelfFileUpload", component:<BackendPage content={<div>Test</div>} activeId="backend" /> },
];