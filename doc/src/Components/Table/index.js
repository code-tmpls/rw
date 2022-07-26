import React from 'react';
import './index.css';

export const Table = ({ data }) =>{
 console.log(data);
 const Headers = Object.keys(data?.[0]);

 return (<div className="table-responsive">
 <table className="table table-striped table-hover">
   <thead>
     <tr align="center">
        <th>#</th>
        {Headers.map((header, index)=><th key={index}>{header}</th>)}
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
</div>);
};