import React, { useState, useEffect } from "react";
import { SimpleHeader, Button, ContainerFluid, Row, Col, Order, Card, Highlight, Colors, Modal, Table  } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';


const AutocompleteNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete (With Static Data):</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6']} />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['9']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card backgroundColor={Colors.light} component={<SampleNote1 />} />
      </>} />
    </>);
  };

  const Note2 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete (From API):</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['14']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['16T26']} />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['30']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card backgroundColor={Colors.light} component={<SampleNote2 />} />
      </>} />
    </>);
  };

  const Note3 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete with Form:</b></div>
      <Card backgroundColor={Colors.grey} component={<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1', '2']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['36']} />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['38T52']} />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card backgroundColor={Colors.light} component={<SampleNote3 />} />
      </>} />
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
};

export const AutocompletePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ showModel, setShowModal ] = useState(false);

  const ComponentAttributes = ()=>{
    const tableData = [{  "attributeName": "Hyderabad", "description": "India", "example":"Asia" },
                  {  "attributeName": "Tokyo", "description": "Japan", "example":"Asia"  },
                  {  "attributeName": "Sydney", "description": "Australia", "example":"Australia"  },
                  {  "attributeName": "New York", "description": "USA", "example":"North America"  }];

    const columnDesc = [{ "columnName":"Attribute Name", "id":"attributeName", "width":"20%" },
            { "columnName":"Description", "id":"description", "width":"30%" },
            { "columnName":"Example", "id":"example", "width":"40%" }];

    return (<div>
      <Table columnDesc={columnDesc} data={tableData} />
    </div>);
   };
  return (<>
    <Modal type="xl" title="AutoComplete Component Attributes" 
    show={showModel} 
    onClose={setShowModal} content={<ComponentAttributes />}  />
    <SimpleHeader title="Autocomplete" 
    rightContent={<Button type="primary" label="Component Attributes" size={11} onClick={()=>setShowModal(true)} />} />
    <ContainerFluid>
      <Row>
        <Col><AutocompleteNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};

