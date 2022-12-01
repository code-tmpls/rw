import React from "react";

export const ComponentAttributesTable = {
    "columns": [
        {
            "columnName": "Attribute Name",
            "id": "attributeName",
            "width": "20%"
        },
        {
            "columnName": "Description",
            "id": "description",
            "dataAlign":"left",
            "width": "30%"
        },
        {
            "columnName": "Example",
            "id": "example",
            "dataAlign":"left",
            "width": "40%"
        }
    ],
    "data": [
        {
            "attributeName": "name",
            "description": "Name of the Autocomplete Form Field which is used to identify when we have group of Form Fields within a Form",
            "example": "-"
        },
        {
            "attributeName": "label",
            "description": "It is the Title of the Form Field",
            "example": "-"
        },
        {
            "attributeName": "placeholder",
            "description": "It provides the Suggestion to the Customer - What to be entered within the Field",
            "example": "-"
        },
        {
            "attributeName": "autoCompleteData",
            "description": "It is an Array of data that provides the Suggestions to the Customer to Select while entering the data within the Autocomplete FormField",
            "example": "-"
        },
        {
            "attributeName": "validation",
            "description": (<div>It contains following Fields:
                <ul>
                    <li>required</li>
                    <li>minLength</li>
                    <li>maxLength</li>
                    <li>pattern</li>
                    <li>validate</li>
                </ul>
            </div>),
            "example": "-"
        }
    ]
};