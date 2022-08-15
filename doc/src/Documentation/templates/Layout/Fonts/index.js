import React, { useEffect } from "react";
import { SimpleHeader } from 'react-webpack-lib';
import './index.css';

export const FontPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Fonts" /></>);
};