import React, { useEffect } from 'react';
import { SimpleHeader, Password } from 'e-ui-react';

export const PasswordPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Password" /><Password /></>);
};