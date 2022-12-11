
export const GetCurrentTimeStamp = ()=>{
 const date = new Date();
 return (date.getDate()+"-"+(date.getMonth() + 1)+"-"+date.getFullYear()+" "
        +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
};

export const GetDurationTimeStamp = (beforeDays, afterDays)=>{

 return { beforeTimeStamp:'', currentTimeStamp:'', afterTimeSTamp:'' };
};
