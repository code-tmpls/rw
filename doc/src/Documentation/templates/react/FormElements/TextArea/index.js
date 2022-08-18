import React, { useEffect } from 'react';
import { SimpleHeader, TextArea } from 'react-webpack-lib';

export const TextAreaPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="TextArea" /><TextArea /></>);
};