import React, { useState, useEffect } from "react";
import { Button } from 'e-ui-react';
import './index.css';

export const Drawer = ({ type, label, colors, content }) =>{
 const [ displayWidth, setDisplayWidth ] = useState( false );

 return (<>
<Button type={type} label={label} size={11} onClick={()=>setDisplayWidth(true)} />
 <div id="mySidenav" className="drawer" style={{ width: displayWidth?'100%':'0%', backgroundColor: colors[0] }}>
 <a href="#" className="closebtn" onClick={()=>setDisplayWidth(false)} style={{ color: colors[1] }}>&times;</a>
 {content}
</div>
</>);
};