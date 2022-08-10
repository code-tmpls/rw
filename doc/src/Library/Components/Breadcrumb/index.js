import React from "react";

export const Breadcrumb = ({ backgroundColor })=>{
 return (<div><nav aria-label="breadcrumb" style={{ padding:'8px', border:'1px solid #ccc', backgroundColor: backgroundColor, borderRadius:'5px' }}>
 <ol class="breadcrumb" style={{ marginBottom:'0px' }}>
   <li class="breadcrumb-item"><a href="#">Home</a></li>
   <li class="breadcrumb-item"><a href="#">Library</a></li>
   <li class="breadcrumb-item" aria-current="page">Data</li>
 </ol>
</nav></div>);
};