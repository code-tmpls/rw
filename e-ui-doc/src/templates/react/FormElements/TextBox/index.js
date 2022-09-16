import React, { useEffect } from 'react';
import { SimpleHeader, TextBox } from 'e-ui-react';

export const TextBoxPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="TextBox" /><TextBox /></>);
};