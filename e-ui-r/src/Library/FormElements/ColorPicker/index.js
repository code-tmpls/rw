import React from 'react';

export const ColorPicker = ({}) =>{
 return (<div className="Colorpicker">
 <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"/>
 <label for="exampleColorInput" className="form-label">Color picker</label>
</div>);
};