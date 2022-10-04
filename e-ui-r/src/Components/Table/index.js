import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from 'e-ui-react';
import './index.css';

export const Table = ({ data }) =>{
 const buildColumnHeaders = [ '#', ...Object.keys( data?.[0]) ].map( (details)=>{
  return ({columnName: details });
});
 const [ ColumnDetails, setColumnDetails ] = useState( buildColumnHeaders );
 const [ sortColumns, setSortColumns ] = useState({ columnName:'', sort:'' });

 const updateColumnSorting=(columnName)=>{
  let columnJson = {};
  columnJson.columnName = columnName;
  if(sortColumns.columnName === columnName){
    if(sortColumns.sort === ''){ columnJson.sort = 'asc'; }
    else if(sortColumns.sort === 'asc'){ columnJson.sort = 'desc'; }
    else if(sortColumns.sort === 'desc'){ columnJson.sort = 'asc'; }
  } else {
      columnJson.sort = 'asc';
  }
  setSortColumns(columnJson);
 };

 return (<>
 <div className="row">
  <div className="col-md-8">
    <label style={{ paddingTop:'1%', paddingLeft:'1.65%', fontSize:'14px', fontWight:'400' }}>Table Title</label>
  </div>
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
            {ColumnDetails.map((details, index)=>{
              let columnName = details.columnName;
             return (
             <th key={index} style={{ border:'1px solid #ccc'}} onClick={()=>updateColumnSorting(columnName)}>
              {columnName} 
              {(sortColumns.columnName === columnName) && 
              (<span className="float-end">
                <FontAwesomeIcon name={"fa-sort-amount-"+sortColumns.sort} />
              </span>)}
              </th>)})}
          </tr>
        </thead>
        <tbody>
        {data?.map((d, i)=>{
          return (<tr align="center" key={i}>
            {ColumnDetails?.map((details, index)=>{
              if(index===0){
                  return <td key={index}>{i+1}</td>
              } else {
                  return <td key={index}>{d[details.columnName]}</td>
              } 
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