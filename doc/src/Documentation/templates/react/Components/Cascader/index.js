import React, { useEffect } from 'react';
import { SimpleHeader, Cascader } from 'react-webpack-lib';

export const CascaderPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Cascader" />
        <Cascader />
    </>);
    
};