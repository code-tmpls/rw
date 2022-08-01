import React from 'react';
import { Button, Highlight } from 'react-webpack-lib';

const m5p = { paddingTop:'15px' };
export const ButtonPage = ()=>{
    return (<>
       <span style={{ padding:'5px' }}><b>Buttons (Political Brief):</b><br/></span>
       <table className="table table-borderless">
       <tbody>
       <tr>
           <td><Button type="primary" label="primary" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="primary" label="primary" size={11} />`} /></td>
           <td><Button type="outline-primary" label="outline-primary" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-primary" label="outline-primary" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="secondary" label="secondary" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="secondary" label="secondary" size={11} />`} /></td>
           <td><Button type="outline-secondary" label="outline-secondary" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-secondary" label="outline-secondary" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="success" label="success" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="success" label="success" size={11} />`} /></td>
           <td><Button type="outline-success" label="outline-success" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-success" label="outline-success" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="danger" label="danger" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="danger" label="danger" size={11} />`} /></td>
           <td><Button type="outline-danger" label="outline-danger" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-danger" label="outline-danger" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="warning" label="warning" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="warning" label="warning" size={11} />`} /></td>
           <td><Button type="outline-warning" label="outline-warning" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-warning" label="outline-warning" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="info" label="info" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="info" label="info" size={11} />`} /></td>
           <td><Button type="outline-info" label="outline-info" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-info" label="outline-info" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="dark" label="dark" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="dark" label="dark" size={11} />`} /></td>
           <td><Button type="outline-dark" label="outline-dark" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-dark" label="outline-dark" size={11} />`} /></td>
       </tr>
       <tr>
           <td><Button type="light" label="light" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="light" label="light" size={11} />`} /></td>
           <td><Button type="outline-light" label="outline-light" size={11} /></td>
           <td style={m5p}><Highlight lang="html" content={`<Button type="outline-light" label="outline-light" size={11} />`} /></td>
    </tr>
       </tbody>
       </table>
       </>);
};