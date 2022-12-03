import React from "react";
import { Highlight, Badge, ReactJSXToOutputViewer, Autocomplete } from 'e-ui-react';

export const ComponentAttributesTable = {
    "columns": [{ "columnName": "Attribute Name", "id": "attributeName", "dataAlign":"left",  "width": "20%" },
        { "columnName": "Description", "id": "description", "dataAlign":"left", "width": "30%" },
        { "columnName": "Example", "id": "example", "dataAlign":"left", "width": "40%" }
    ],
    "data": [
        {
            "attributeName": (<div>name <Badge type="success" label="Mandatory" size="11" /></div>),
            "description": "Name of the Autocomplete Form Field which is used to identify when we have group of Form Fields within a Form",
            "example": "-"
        },
        {
            "attributeName": (<div>label <Badge type="success" label="Mandatory" size="11" /></div>),
            "description": "It is the Title of the Form Field",
            "example": "-"
        },
        {
            "attributeName": (<div>placeholder <Badge type="success" label="Mandatory" size="11" /></div>),
            "description": "It provides the Suggestion to the Customer - What to be entered within the Field",
            "example": "-"
        },
        {
            "attributeName": (<div>autoCompleteData <Badge type="success" label="Mandatory" size="11" /></div>),
            "description": "It is an Array of data that provides the Suggestions to the Customer to Select while entering the data within the Autocomplete FormField",
            "example": "-"
        },
        {
            "attributeName": (<div>validation <Badge type="warning" label="Optional" size="11" /></div>),
            "description": (<div>It contains following Fields:
                <ul>
                    <li>required</li>
                    <li>minLength</li>
                    <li>maxLength</li>
                    <li>pattern</li>
                    <li>validate</li>
                </ul>
            </div>),
            "example": (<div>
<Highlight content={`<Autocomplete
    validation={{
     required:{
        value: true,
        errorMessage:"This is a Mandatory Field"
     },
     minLength:{
        value: 2,
        errorMessage:"Message should be greator than 2"
     },
     maxLength:{
        value: 6,
        errorMessage:"Message should be less than 6"
     }
    }}
 />)`} lang="javascript" />
            </div>)
        }
    ]
};