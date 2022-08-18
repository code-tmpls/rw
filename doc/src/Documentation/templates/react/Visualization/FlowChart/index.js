import React, { useEffect } from 'react';
import { SimpleHeader, FlowChart } from 'react-webpack-lib';

export const FlowChartPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <SimpleHeader title="Flow Chart" />
        <FlowChart />
    </>);
};