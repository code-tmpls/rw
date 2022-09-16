import React, { useEffect } from 'react';
import { SimpleHeader, Dropdown } from 'e-ui-react';

export const DropdownPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Dropdown" />
        <Dropdown />
    </>);
    
};