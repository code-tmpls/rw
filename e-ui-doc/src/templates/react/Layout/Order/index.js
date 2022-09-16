import React, { useEffect } from "react";
import { SimpleHeader } from 'e-ui-react';

export const OrderPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (<div><SimpleHeader title="Order" /></div>);
};