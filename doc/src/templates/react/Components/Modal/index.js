import React, { useEffect } from 'react';
import { SimpleHeader } from 'e-ui-react';

export const ModalPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Modal" /></>);
};