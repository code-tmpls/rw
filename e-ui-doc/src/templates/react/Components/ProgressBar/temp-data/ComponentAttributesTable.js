import React from "react";
import { Highlight, Badge, ReactJSXToOutputViewer, Autocomplete } from 'e-ui-react';

export const ComponentAttributesTable = {
    "columns": [{ "columnName": "Attribute Name", "id": "attributeName", "dataAlign":"left",  "width": "20%" },
        { "columnName": "Description", "id": "description", "dataAlign":"left", "width": "30%" },
        { "columnName": "Example", "id": "example", "dataAlign":"left", "width": "40%" }
    ],
    "data": [{
        "attributeName": (<div>type <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>progress <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>height <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>value <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    }]
};