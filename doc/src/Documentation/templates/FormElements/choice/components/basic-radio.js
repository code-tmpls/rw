import React from 'react';
import { Choice } from 'react-webpack-lib';

const Radio = () =>{
 return (<>
 <Choice id="numbers" name="numbers" label="One" value="1" type="radio" disabled={false} />
 <Choice id="numbers" name="numbers" label="Two" value="2" type="radio" disabled={false} />
 <Choice id="numbers" name="numbers" label="Three" value="3" type="radio" disabled={false} />
 </>);
};

export default Radio;