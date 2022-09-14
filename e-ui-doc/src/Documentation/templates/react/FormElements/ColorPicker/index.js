import React, { useEffect } from 'react';
import { SimpleHeader, ColorPicker } from 'e-ui-react';

export const ColorPickerPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="ColorPicker" /><ColorPicker /></>);
};