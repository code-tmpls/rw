import React, { useState } from 'react';

export const Range = () =>{
 const [ value, setValue ] = useState(30);
 return(<>
    <label className="form-label">Custom range</label>
 <div className="row">
  <div className="col-10">
  <input type="range" className="form-range" id="customRange" name="points" value={value} 
    onChange={(e)=>setValue(e.target.value)} />
  </div>
  <div align="center" className="col-2">
  <span>{value}</span>
  </div>
 </div>
 
 
 </>);
};