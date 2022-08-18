import React, { useEffect } from "react";
import { SimpleHeader } from 'react-webpack-lib';

export const RxJSPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <SimpleHeader title="RxJS" />
        <div>This RxJS is used to make a Live Communication between a Component to another Component. This Library acts as a Messaging Queue between the React Components.</div>
        <div>npm install rxjs</div>
    </>);
};