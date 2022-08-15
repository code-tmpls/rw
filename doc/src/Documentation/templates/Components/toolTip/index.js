import React, { useEffect } from 'react';
import { SimpleHeader } from 'react-webpack-lib';


export const ToolTipPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Toast" /></>);
};