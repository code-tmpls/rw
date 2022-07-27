import React from 'react';

export const ColorPicker = ({}) =>{
 return (<div class="Colorpicker">
 <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"/>
 <label for="exampleColorInput" class="form-label">Color picker</label>
</div>);
};