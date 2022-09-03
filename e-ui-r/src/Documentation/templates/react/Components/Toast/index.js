import React, { useEffect } from 'react';
import { SimpleHeader } from 'e-ui-react';

export const ToastPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Toast" /></>);
};