import React, { useState, useEffect } from 'react';
import { SimpleHeader, Toast } from 'e-ui-react';

export const ToastPage = () => {
 const [ viewToast, setViewToast ] = useState(true); 

 const [ toastList, setToastList ] = useState([]);
 const toastData = { title:'Bootstrap', mesaage:'Hello, world! This is a toast message.'};

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 useEffect(()=>{
  console.log( toastList );
 },[toastList]);

 return (<><SimpleHeader title="Toast" />
    <button type="button" className="btn btn-primary" id="liveToastBtn" 
 onClick={()=>{
    setToastList([...toastList, toastData])
 }}>View Toast</button>
    { viewToast && <Toast data={toastList} display={viewToast} onClose={()=>setViewToast(false)}/>}
    </>);
};