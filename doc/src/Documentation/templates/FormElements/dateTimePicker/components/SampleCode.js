import React from "react";
import { DateTimePicker } from 'react-webpack-lib';

export const SampleNote1 = () =>{
 return (<>
 <DateTimePicker type="datePicker" id="date" name="date" />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
 <DateTimePicker type="timePicker" id="time" name="time" />
 </>);
};

export const SampleNote3 = () =>{
 return (<>
 <DateTimePicker type="dateTimePicker" id="dateTime" name="dateTime" />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;