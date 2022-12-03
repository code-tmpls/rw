import React, { useEffect } from 'react';
import { SimpleHeader, ColorPicker } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const ColorPickerPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
     <DocumentHeader title="ColorPicker" componentAttributesTable={ComponentAttributesTable} />
     <ColorPicker />
    </>);
};