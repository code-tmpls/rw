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
 <div className="accordion" id={id}>
 {data.map((d, i)=>{
    console.log(showAccordian, d.id);
    let collapseDivClass = (showAccordian.includes(d.id))?"accordion-collapse collapse show":"accordion-collapse collapse ";
    let collapseTitleClass = (showAccordian.includes(d.id))?"accordion-button":"accordion-button collapsed";
    return (<div key={i} className="accordion-item">
    <h2 className="accordion-header" id={"heading-"+d.id} onClick={()=>toggleAccordian(d.id)}>
      <button className={collapseTitleClass} type="button" data-bs-toggle="collapse" data-bs-target={"#"+d.id} aria-expanded="true" aria-controls={d.id}>
       {d.title}
      </button>
    </h2>
    <div id={d.id} className={collapseDivClass} aria-labelledby={"heading-"+d.id} data-bs-parent={"#"+id}>
      <div className="accordion-body">{d.component}</div>
    </div>
  </div>);
 })}
 </div>
 </>);
};