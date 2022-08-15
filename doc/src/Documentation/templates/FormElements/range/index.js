import React, { useEffect } from 'react';
import { SimpleHeader, Range } from 'react-webpack-lib';

export const RangePage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Range" /><Range /></>);
};