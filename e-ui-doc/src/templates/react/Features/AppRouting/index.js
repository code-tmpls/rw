import React, { useEffect } from 'react';
import { SimpleHeader } from 'e-ui-react';
/* import Greetings  from '../speechListener/data.js';
import { default as abc }  from '!!raw-loader!../speechListener/data.js';
import styles  from '!!raw-loader!../speechListener/index.css';
import HtmlToReactParser from 'html-to-react'; */
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const AppRoutingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="AppRouting" componentAttributesTable={ComponentAttributesTable} />
    </>);
    /*   <Greetings />
        <pre><code lang="html">{abc.toString()}</code></pre>
        <pre><code lang="html">{styles.toString()}</code></pre>
     </div>); */
};