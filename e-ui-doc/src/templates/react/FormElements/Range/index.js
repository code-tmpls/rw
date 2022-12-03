import React, { useEffect } from 'react';
import { SimpleHeader, Range } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const RangePage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Range" componentAttributesTable={ComponentAttributesTable} />
    <Range /></>);
};