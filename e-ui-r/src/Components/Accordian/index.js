import React, { useState, useEffect } from "react";

export const Accordian = ({ id, data, defaultOpen })=>{

 const [ showAccordian, setShowAccordian ] = useState([]);

 useEffect(()=>{
  if(defaultOpen!==undefined){ toggleAccordian(defaultOpen); }
 },[]);

 const toggleAccordian = (id) =>{
  if(showAccordian.includes(id)){
    removeFromAccordianList(id);
  } else {
    addToAccordianList(id);
  }
 };
 const addToAccordianList=(id)=>{
    setShowAccordian([id, ...showAccordian]);
 };

 const removeFromAccordianList=(id)=>{
    setShowAccordian(showAccordian.filter((ids)=>{ 
        return ids != id; 
    }));
 };

 return (<>
 <div className="list-group" id={id}>
 {data.map((d, i)=>{
    console.log(showAccordian, d.id);
    let collapseDivClass = (showAccordian.includes(d.id))?"collapse show":"collapse ";
     return (<>
     <div id={"heading-"+d.id} key={i} className="list-group-item" onClick={()=>toggleAccordian(d.id)} 
     data-bs-toggle="collapse" data-bs-target={"#"+d.id} aria-expanded="true" aria-controls={d.id} 
     style={{ cursor:'pointer' }}>
      <span style={{ float:'left' }}>{d.title}</span>
      <span style={{ float:'right' }}>R</span>
    </div>
    <div id={d.id} className={"list-group-item "+collapseDivClass} aria-labelledby={"heading-"+d.id} data-bs-parent={"#"+id}>
      <div className="accordion-body">{d.component}</div>
    </div>
  </>);
 })}
 </div>
 </>);
};