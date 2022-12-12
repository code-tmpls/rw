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
        "attributeName": (<div>label <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>size <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>onClick <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>show <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    },
    {
        "attributeName": (<div>content <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "",
        "example": (<div align="center"><b>-</b></div>)
    }]
};