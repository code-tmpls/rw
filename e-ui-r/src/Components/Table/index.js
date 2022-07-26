import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon, ReactJSXToOutputViewer, SortJSONArray } from 'e-ui-react';
import './index.css';
/**
 dataSettings={
  dataSequence: true/false (default: true) // if true, sequence column is visible or else it is hidden
 }
 */

export const Table = ({ title, height, columnDesc, data, dataSettings }) => {
  const isDataSequence = ((dataSettings===undefined || dataSettings?.dataSequence===undefined || 
    dataSettings?.dataSequence===true) );
  const tData = isDataSequence?(data.map((d, i) => ({ "#": (i + 1), ...d }))):data;
  let colDesc = [...columnDesc ];
   if(isDataSequence) { colDesc?.unshift({ columnName:"#", id:"#", width:"10%", sortBy: "asc" }); }
  console.log(columnDesc);
  const [tableData, setTableData] = useState(tData);
  const [sortColumns, setSortColumns] = useState(colDesc?.[0]);

  useEffect(()=>console.log(tableData),[tableData]);
  useEffect(() => {
    setTableData( SortJSONArray(tableData, sortColumns.id, sortColumns.sortBy) );
  }, [sortColumns]);

  const updateColumnSorting = (column) => {
    let sortBy = 'asc';
    if (sortColumns.sortBy === 'asc') { column.sortBy = 'desc'; }
    else if (sortColumns.sortBy === 'desc') { column.sortBy = 'asc'; }
    else {
      column.sortBy = 'asc'; 
    }
    setSortColumns({ ...sortColumns, ...column});
  };

  const SearchData = ( search )=>{
    return tData.filter(el =>{
     let colData = colDesc?.filter((col)=>{
      let columnData = ReactJSXToOutputViewer(el[col.id]);
      return columnData?.toString().toLowerCase().includes(search?.toLowerCase()) 
     });
     if(colData.length>0){
       return el;
     }
    });
  }; 

  const [ tableDataSearch, setTableDataSearch ] = useState(""); 

  /*
  useEffect(()=>{
    
  },[tableDataSearch]);
*/
  return (<>
    <div className="row">
        <div className="col-md-8">
        {title && (<label style={{ paddingLeft: '1.65%', fontSize: '14px', fontWeight: '400' }}>{title}</label>)}
        </div>
        {(dataSettings?.required?.search===true) && (<>
          <div align="right" className="col-md-1">
            <label className="table-search-label"><b>Search:</b></label>
          </div>
          <div className="col-md-3 table-search-textBox">
            <input type="text" className="form-control" placeholder="Enter your Search" value={tableDataSearch}
              onChange={(e)=>{
                setTableDataSearch(e.target.value);
                let searchedData = SearchData(e.target.value);
                setTableData(searchedData);
            }} />
        </div>
        </>
        )}
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive scroll" style={{ height:height }}>
          <table className="table table-striped table-hover" style={{ display:'table', marginBottom:'0px', backgroundColor:'#fff' }}>
            <thead>
              <tr align="center">
                {colDesc?.map((col, index) => {
                  return (
                    <th key={index} align={col?.titleAlign} style={{ width: col.width }} 
                    onClick={() => updateColumnSorting(col)}>
                      {col.columnName}
                      {(sortColumns.id === col.id) &&
                        (<span className="float-end">
                          <FontAwesomeIcon name={"fa-sort-amount-" + sortColumns.sortBy} />
                        </span>)}
                    </th>)
                })}
              </tr>
            </thead>
            <tbody>
              {tableData.map((d, i) => {
                return (<tr align="center" key={i}>
                  {colDesc?.map((col, index) => {
                    return <td key={index} align={col?.dataAlign}>{d[col.id]}</td>
                  })}
                </tr>)
              })}
            </tbody>
          </table>
          {tableData.length===0 && 
          (<div align="center" style={{ border:'1px solid #ccc', padding:'8px', backgroundColor:'#f2f2f2' }}>
            No Data found
          </div>)}
        </div>
      </div>
    </div>
  </>);
};