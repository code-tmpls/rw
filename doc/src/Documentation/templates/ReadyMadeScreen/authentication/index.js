import React, { useEffect } from 'react';
import { SimpleHeader } from 'react-webpack-lib';

export const AuthenticationPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Authentication" /></>);
};