import React, { useEffect } from 'react';
import { SimpleHeader, TextBox } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const TextBoxPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <DocumentHeader title="TextBox" componentAttributesTable={ComponentAttributesTable} />
        <TextBox name="Sample" label="Sample" placeholder="Enter your Sample"
        validation={{}} />
    </>);
};