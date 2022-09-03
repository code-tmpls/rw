import React, { useEffect } from 'react';
import { SimpleHeader, DateTimePicker } from 'e-ui-react';

export const DateTimeRangePickerPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="DateTimeRangePicker" /><DateTimePicker /></>);
};

