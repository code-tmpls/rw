import React, { useEffect } from 'react';
import { SimpleHeader, Range } from 'e-ui-react';

export const RangePage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Range" /><Range /></>);
};