import React from "react";

export const ProgressBar = ({ type, progress, height, value })=>{
 return (<div class="progress" style={{ height: height+'px' }}>
 <div class={"progress-bar progress-bar-striped progress-bar-animated bg-"+type} role="progressbar" 
 aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ width: progress+'%' }}>{value}</div>
</div>);
};