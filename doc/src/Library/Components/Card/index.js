import React from 'react';

export const Card = ({ component, className,  backgroundColor }) =>{
 let bgColor = (backgroundColor===undefined)?'none':backgroundColor;
 return (<div className="card">
 <div className={"card-body "+className} style={{ backgroundColor: bgColor }}>{component}</div>
</div>);
}
