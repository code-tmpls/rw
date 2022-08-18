import React, { useEffect } from 'react';
import { SimpleHeader } from 'react-webpack-lib';

export const AppColorsPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="App Colors" /></>);
};