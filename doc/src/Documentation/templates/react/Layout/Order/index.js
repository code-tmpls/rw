import React, { useEffect } from "react";
import { SimpleHeader } from 'react-webpack-lib';

export const OrderPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (<div><SimpleHeader title="Order" /></div>);
};