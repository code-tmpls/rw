import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from 'e-ui-react';
import './index.css';

export const Table = ({ data }) => {
  const [tableData, setTableData] = useState(data.map((d, i) => ({ "#": (i + 1), ...d })));
  const ColumnDetails = Object.keys(tableData[0]);
  const [sortColumns, setSortColumns] = useState({ columnName: '', sortBy: '' });

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
      if (sortColumns.sortBy === '') { columnJson.sortBy = 'asc'; }
      else if (sortColumns.sortBy === 'asc') { columnJson.sortBy = 'desc'; }
      else if (sortColumns.sortBy === 'desc') { columnJson.sortBy = 'asc'; }
    } else {
      columnJson.sortBy = 'asc';
    }
    setSortColumns(columnJson);
  };

  return (<>
    <div className="row">
      <div className="col-md-8">
        <label style={{ paddingTop: '1%', paddingLeft: '1.65%', fontSize: '14px', fontWeight: '400' }}>Table Title</label>
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
        </div>
      </div>
    </div>
  </>);
};