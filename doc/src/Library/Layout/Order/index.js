import React from 'react';

export const Order = ({ type, data}) =>{
 return (<>
  {type==='bullet' && (<ul>{data.map(d=><li>{d}</li>)}</ul>)}
  {type==='number' && (<ol>{data.map(d=><li>{d}</li>)}</ol>)}
 </>);
};