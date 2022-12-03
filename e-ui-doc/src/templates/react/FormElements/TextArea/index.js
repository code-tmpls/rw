import React, { useEffect } from 'react';
import { SimpleHeader, TextArea } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const TextAreaPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="TextArea" componentAttributesTable={ComponentAttributesTable} />
    <TextArea /></>);
};