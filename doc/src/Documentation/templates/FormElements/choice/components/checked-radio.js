import React from 'react';
import { Choice } from '@LibFormElements/Choice/index.js';

const Radio = () =>{
 return (<>
 <Choice id="numbers" name="numbers" label="One" value="1" type="radio" checked={false} />
 <Choice id="numbers" name="numbers" label="Two" value="2" type="radio" checked={true} />
 <Choice id="numbers" name="numbers" label="Three" value="3" type="radio" checked={false} />
 </>);
};

export default Radio;