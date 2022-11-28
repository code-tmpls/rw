import React, { useEffect } from 'react';
import { SimpleHeader, TextBox } from 'e-ui-react';

export const TextBoxPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <SimpleHeader title="TextBox" />
        <TextBox name="Sample" label="Sample" placeholder="Enter your Sample"
        validation={{}} />
    </>);
};