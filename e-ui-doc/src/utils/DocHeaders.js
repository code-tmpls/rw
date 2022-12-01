import React, { useState } from "react";
import { SimpleHeader, Button, Modal, Table } from 'e-ui-react';

export const DocumentHeader = ({ title, componentAttributesTable })=>{
 const [ showModel, setShowModal ] = useState(false);

 const ComponentAttributes = ()=>{
  return (<div>
    <Table height="400px" columnDesc={componentAttributesTable?.columns} data={componentAttributesTable?.data} />
   </div>);
 };

 return (<>
 <Modal type="xl" title={title+" Component Attributes"}
    show={showModel} 
    onClose={setShowModal} content={<ComponentAttributes />}  />
    <SimpleHeader title={title}
    rightContent={<Button type="primary" label="Component Attributes" size={11} onClick={()=>setShowModal(true)} />} />
 </>);
};