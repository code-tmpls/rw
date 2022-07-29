import React from 'react';
import { Choice } from '@Lib';

const CheckBox = () =>{
 return (<div>
 <Choice id="numbers" name="numbers" label="One" value="1" type="checkbox" disabled={false} />
 <Choice id="numbers" name="numbers" label="Two" value="2" type="checkbox" disabled={false} />
 <Choice id="numbers" name="numbers" label="Three" value="3" type="checkbox" disabled={false} />
 </div>);
};

export default CheckBox;