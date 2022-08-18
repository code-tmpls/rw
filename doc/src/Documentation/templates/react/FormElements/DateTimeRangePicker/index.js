import React, { useEffect } from 'react';
import { SimpleHeader, DateTimePicker } from 'react-webpack-lib';

export const DateTimeRangePickerPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="DateTimeRangePicker" /><DateTimePicker /></>);
};

