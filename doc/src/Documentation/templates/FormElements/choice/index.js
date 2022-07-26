import React from 'react';
import { Choice } from '@LibFormElements/Choice/index.js';

export const ChoicePage = () =>{
 return (<>
 <Choice id="numbers" name="numbers" label="One" value="1" type="radio" disabled={false} />
 <Choice id="numbers" name="numbers" label="Two" value="2" type="radio" disabled={false} />
 <Choice id="numbers" name="numbers" label="Three" value="3" type="radio" disabled={false} />

 <Choice id="numbers" name="numbers" label="One" value="1" type="checkbox" disabled={false} />
 <Choice id="numbers" name="numbers" label="Two" value="2" type="checkbox" disabled={false} />
 <Choice id="numbers" name="numbers" label="Three" value="3" type="checkbox" disabled={false} />
 </>);
};