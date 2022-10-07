import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon, ReactJSXToOutputViewer } from 'e-ui-react';
import './index.css';
/**
 dataSettings={
  dataSequence: true/false (default: true) // if true, sequence column is visible or else it is hidden
 }
 */

export const Table = ({ title, data, dataSettings }) => {
  const tData = ((dataSettings===undefined || dataSettings?.dataSequence===undefined || dataSettings?.dataSequence) )?(data.map((d, i) => ({ "#": (i + 1), ...d }))):data;
  const [tableData, setTableData] = useState(tData);
  const ColumnDetails = Object.keys(tData[0]);
  const [sortColumns, setSortColumns] = useState({ columnName: ColumnDetails[0], sortBy: 'asc' });

  useEffect(() => {
    setTableData([...tableData].sort(sortColumnData(sortColumns.columnName, sortColumns.sortBy)));
  }, [sortColumns]);

  const sortColumnData = (prop, type) => {
    return (a, b) => {
      if (a[prop] > b[prop]) {
        if (type === 'asc') { return 1; }
        else if (type === 'desc') { return -1; }
      } else if (a[prop] < b[prop]) {
        if (type === 'asc') { return -1; }
        else if (type === 'desc') { return 1; }
      }
      return 0;
    };
  };

  const updateColumnSorting = (columnName) => {
    let columnJson = {};
    columnJson.columnName = columnName;
    if (sortColumns.columnName === columnName) {
      if (sortColumns.sortBy === 'asc') { columnJson.sortBy = 'desc'; }
      else if (sortColumns.sortBy === 'desc') { columnJson.sortBy = 'asc'; }
    } else {
      columnJson.sortBy = 'asc';
    }
    setSortColumns(columnJson);
  };

  const SearchData = ( search )=>{
    console.log(tData);
    return tData.filter(el =>{
     let colData = ColumnDetails.filter((col)=>{
      let columnData = ReactJSXToOutputViewer(el[col]);
      console.log( 'columnData: ', columnData );
      console.log( 'searchData: ', search );
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
        <label style={{ paddingTop: '1%', paddingLeft: '1.65%', fontSize: '14px', fontWeight: '400' }}>{title}</label>
      </div>
      <div align="right" className="col-md-1">
        <label className="table-search-label"><b>Search:</b></label>
      </div>
      <div className="col-md-3 table-search-textBox">
        <input type="text" className="form-control" placeholder="Enter your Search" value={tableDataSearch}
        onChange={(e)=>{
          setTableDataSearch(e.target.value);
          let searchedData = SearchData(e.target.value);
          console.log('searchedData', searchedData);
          setTableData(searchedData);
        }} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped table-hover" style={{ marginBottom:'0px' }}>
            <thead>
              <tr align="center">
                {ColumnDetails.map((colName, index) => {
                  return (
                    <th key={index} style={{ border: '1px solid #ccc' }} onClick={() => updateColumnSorting(colName)}>
                      {colName}
                      {(sortColumns.columnName === colName) &&
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
                  {ColumnDetails?.map((colName, index) => {
                    return <td key={index}>{d[colName]}</td>
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