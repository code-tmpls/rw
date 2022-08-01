import React from 'react';

export const Card = ({ component, backgroundColor }) =>{
 let bgColor = (backgroundColor===undefined)?'none':backgroundColor;
 return (<div className="card">
 <div className="card-body" style={{ backgroundColor: bgColor }}>{component}</div>
</div>);
}
