import React from 'react';
import './css/font-awesome.min.css';

export const FontAwesomeIcon = ( props ) =>{
 return (<i className ={"fa "+props.name} style={{ fontSize: props.size+'px', color: props.color }} {...props}></i>);
};