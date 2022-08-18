import React from "react";
import { DateTimePicker } from 'react-webpack-lib';

export const SampleNote1 = () =>{
 return (<>
 <DateTimePicker type="datePicker" id="date" name="date" />
 <DateTimePicker type="datePicker" id="date" name="date" value="1991-10-15" />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
 <DateTimePicker type="timePicker" id="time" name="time" />
 <DateTimePicker type="timePicker" id="time" name="time" value="23:59" />
 </>);
};

export const SampleNote3 = () =>{
 return (<>
 <DateTimePicker type="dateTimePicker" id="dateTime" name="dateTime" />
 <DateTimePicker type="dateTimePicker" id="dateTime" name="dateTime" value="1991-10-15 23:59" />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;