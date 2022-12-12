import React from 'react';

export const Card = ({ children, className,  backgroundColor }) =>{
 let bgColor = (backgroundColor===undefined)?'none':backgroundColor;
 return (<div className="card">
 <div className={"card-body "+className} style={{ backgroundColor: bgColor }}>{children}</div>
</div>);
}
