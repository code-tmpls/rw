import React, { useState, useEffect } from "react";
import './index.css';

export const Carousel = ({ data })=>{
 const [slideIndex, setSlideIndex ] = useState(0);

 const increment = ()=>{
  if(slideIndex<=0){ setSlideIndex(data.length-1); } 
  else { setSlideIndex(slideIndex-1); }
 };

 const decrement = ()=>{
  if(slideIndex>=(data.length-1)){ setSlideIndex(0); } 
  else { setSlideIndex(slideIndex+1); }
 }

 return (<div className="slideshow-container">
{data.map((d,i)=>{
 return (<div key={i} className={(i===slideIndex)?'':'fade'} style={{ display:(i===slideIndex)?'block':'none' }}>
  {d}
 </div>);
})}
 <span className="prev" onClick={()=>increment()}>❮</span>
 <span className="next" onClick={()=>decrement()}>❯</span>
 </div>);
};