import React, { useEffect } from 'react';
import { SimpleHeader } from 'react-webpack-lib';

export const PieChartPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="PieChart" /></>);
};