import React, { useEffect } from 'react';
import { Highlight, Table, SimpleHeader, FilledHeader } from 'react-webpack-lib';
import SampleCode from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';


const TableData = [
    {
        "Attribute": "content",
        "Type": <b><u>Mandatory</u></b>,
        "Description": "Passed HTML/JSX Content as a String"
    },
    {
        "Attribute": "lang",
        "Type": <b><u>Mandatory</u></b>,
        "Description": <div>Defines the type of content passed.<br /> For Html Content, lang="html".<br /> For JS Content,  lang="javascript"</div>
    },
    {
        "Attribute": "lines",
        "Type": <b><u>Optional</u></b>,
        "Description": ""
    }
];

export const HighlightPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <SimpleHeader title="Highlight" />
        <div className="container-fluid">
            <div className="row pageContent">
                <div className="col-md-6">
                    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
                    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5']} />
                    <div className="outputTitle"><b>Output :</b></div>
                    <SampleCode />
                </div>
                <div className="col-md-6">
                    <FilledHeader backgroundColor="#0d6efd" color="#fff" title={"<Highlight /> Attributes"} />
                    <Table data={TableData} />
                </div>
            </div>
        </div>
    </>);
};