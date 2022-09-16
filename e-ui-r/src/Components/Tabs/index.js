import React, { useState } from 'react';
import { NavLink   } from 'react-router-dom';
import { Colors } from '@LibUtils/GlobalStyles.js';

export const NavBarTabs = ({ menulinks, activeColor, defaultColor, activeId}) =>{
 let activeShowColor = (activeColor===undefined)?Colors.primary:activeColor;
 let defaultShowColor = (defaultColor===undefined)?Colors.secondary:activeColor;
 const [currentActiveId, setCurrentActiveId ] = useState(activeId);
 return (<ul className="navbar-nav" style={{ paddingTop:'5px',flexDirection: 'row' }}>
  {menulinks.map((data, index)=>{
    let activeStyle = { padding:'10px', color: activeShowColor, background:'none', textDecoration:'none', borderBottom: '2px solid '+activeShowColor, fontWeight:'bold'  };
    let defaultStyle = { padding:'10px', textDecoration:'none', background:'none', color:defaultShowColor, fontWeight:'bold'  };
    return (<li key={index}>
     <NavLink style={((currentActiveId===undefined && index===0) || (currentActiveId===data.id))?activeStyle:defaultStyle} 
        aria-current={data.id} to={data.url} onClick={()=>setCurrentActiveId(data.id)}>{data.label}</NavLink>
      </li>);
  })}
    </ul>);
   };