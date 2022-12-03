import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import {
        SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5, SampleNote6, SampleNote7,
        SampleNote8, SampleNote9, SampleNote10
} from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const MenuNotes = () => {
        console.log(SampleCodeJS.toString());
        const Note1 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Simple TabMenu with its Content:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T7']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote1 />
                        </>} />
                </>);
        };

        const Note2 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>TabMenu with justify and its Content:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['13T15']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote2 />
                        </>} />
                </>);
        };

        const Note3 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Simple PillMenu with its Content:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['21T23']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote3 />
                        </>} />
                </>);
        };

        const Note4 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>PillMenu with justify and its Content:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['29T31']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote4 />
                        </>} />
                </>);
        };

        const Note5 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Horizontal NavMenu with left Alignment:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['37T40']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote5 />
                        </>} />
                </>);
        };

        const Note6 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Horizontal NavMenu with Center Alignment:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['46T49']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote6 />
                        </>} />
                </>);
        };

        const Note7 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Horizontal NavMenu with Right Alignment:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['55T58']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote7 />
                        </>} />
                </>);
        };

        const Note8 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Left Alignment:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['64T67']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote8 />
                        </>} />
                </>);
        };

        const Note9 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Center Alignment:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['73T76']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote9 />
                        </>} />
                </>);
        };

        const Note10 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Right Alignment:</b></div>
                        <Card backgroundColor={Colors.grey} component={<>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['82T85']} />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote10 />
                        </>} />
                </>);
        };

        return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />,
        <Note7 />, <Note8 />, <Note9 />, <Note10 />]} />);
};

export const MenuPage = () => {

        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        return (<>
                <DocumentHeader title="Menu" componentAttributesTable={ComponentAttributesTable} />
                <ContainerFluid>
                 <Row>
                  <Col><MenuNotes /></Col>
                 </Row>
                </ContainerFluid>
        </>);
};