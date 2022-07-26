import React from 'react';
import './index.css';

export const Grid = ({ data }) =>{
 return (<div class="container-fluid">
    {data?.map((row)=>{
        return (<div className="row">
            {row.map((column)=>{
            return <div className={(column?.sm!==undefined)?' col-sm-'+column?.sm:'12'+
                                   (column?.md!==undefined)?' col-md-'+column?.md:'12'+
                                   (column?.lg!==undefined)?' col-lg-'+column?.lg:'12'+
                                   (column?.xl!==undefined)?' col-xl-'+column?.xl:'12'+
                                   (column?.xxl!==undefined)?' col-xxl-'+column?.xxl:'12'
                                 }>{column.component}</div>
        })}</div>)
    })}
 </div>);
};