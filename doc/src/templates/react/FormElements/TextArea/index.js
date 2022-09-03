import React, { useEffect } from 'react';
import { SimpleHeader, TextArea } from 'e-ui-react';

export const TextAreaPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="TextArea" /><TextArea /></>);
};