import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from 'e-ui-react';
import './index.css';

export const Table = ({ data }) =>{
 const Headers = Object.keys(data?.[0]);
 const [ toggleSorting, setToggleSorting ] = useState("fa-sort-amount-asc");
 
 const sortColumns = ()=>{
  setToggleSorting(toggleSorting==='fa-sort-amount-asc'?'fa-sort-amount-desc':'fa-sort-amount-asc');
 };

 return (<>
 <div className="row">
  <div className="col-md-8"></div>
  <div align="right" className="col-md-1">
    <label className="table-search-label"><b>Search:</b></label>
  </div>
  <div className="col-md-3 table-search-textBox">
    <input type="text" className="form-control" placeholder="Enter your Search" />
  </div>
 </div>
 <div className="row">
  <div className="col-md-12">
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr align="center">
            <th># <span className="float-end" onClick={()=>sortColumns()}>
              <FontAwesomeIcon name={toggleSorting} /></span></th>
            {Headers.map((header, index)=>{
             return (<th key={index} style={{ border:'1px solid #ccc'}}>
              {header} 
              <span className="float-end" onClick={()=>sortColumns()}><FontAwesomeIcon name={toggleSorting} /></span>
              </th>)})}
          </tr>
        </thead>
        <tbody>
        {data?.map((d, i)=>{
          return (<tr align="center" key={i}>
            <td>{i+1}</td>
            {Headers?.map((header, index)=>{
              return <td key={index}>{d[header]}</td>
            })}
          </tr>)
        })}
        </tbody>
      </table>
    </div>
  </div>
 </div>
</>);
};