import React, { useEffect } from 'react';
import { SimpleHeader, TextBox } from 'react-webpack-lib';

export const TextBoxPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="TextBox" /><TextBox /></>);
};