import React from "react";

export const Modal = ({ type, title, show, onClose, content, fullScreen })=>{

 const isFullScreen = (fullScreen!==undefined && fullScreen)? true: false;

 return (<>
    <div className={(type!==undefined)?"modal modal-"+type:"modal"} style={{ display: show?'block':'none' }}>
      <div className={isFullScreen?"modal-dialog modal-fullscreen":"modal-dialog"}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={()=>onClose(false)}></button>
          </div>
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </div>
    {(show) && <div className="modal-backdrop show"></div>}
  </>);
};