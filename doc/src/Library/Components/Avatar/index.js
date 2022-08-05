import React from "react";

export const Avatar = ({ size, src })=>{
 return (<div><img style={{ borderRadius:'50%', border:'1px solid #ccc', width: size+'px', objectFit: 'cover', maxHeight: size+'px' }} src={src}/></div>);
};