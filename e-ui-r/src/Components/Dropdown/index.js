import React, { useState, useEffect } from "react";
import HtmlToReactParser from 'html-to-react';
import { FontAwesomeIcon, Colors } from "e-ui-react";
import './index.css';

export const Dropdown = ({ placeholder, searchLabel, menu, layout, value }) => {

  const Icon = () => <FontAwesomeIcon name="fa-search" size="12" color={Colors.light} />

  const SearchData = (filterData) => {
    console.log("filterData: ",filterData);
    return menu?.filter((m) =>
    (m?.options?.filter((o) => o?.label?.toLowerCase().includes(filterData?.toLowerCase())).length > 0 ||
      m?.header?.toLowerCase().includes(filterData?.toLowerCase()) ||
      m?.label?.toLowerCase().includes(filterData?.toLowerCase())));
  };

  const [dropDownValue, setDropdownValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const buildMenuOptions = (menu, lvl) => {
    const htmlToReactParser = new HtmlToReactParser.Parser();
    return (menu?.map((m) => {
      ++lvl;
      return (<div key={lvl}>
        <li>
          {m?.header && <h5 className="dropdown-header">
            { htmlToReactParser.parse(m.header.replace( new RegExp(searchValue, "gi"), (str)=>{return '<b>'+str+'</b>'} ) ) }
          </h5>}
          {m?.label && <span className="dropdown-item curpoint" onClick={()=>{ setDropdownValue(m?.label);value(m?.label);setStatus(false); }}>
            { htmlToReactParser.parse(m.label.replace( new RegExp(searchValue, "gi"), (str)=>{return '<b>'+str+'</b>'} ) ) }
          </span>}
        </li>
        {m?.options && buildMenuOptions(m.options, lvl)}
      </div>)
    }));
  };

  const [menuOptions, setMenuOptions] = useState(buildMenuOptions(menu, 0));
  const [status, setStatus] = useState(false);
  

  useEffect(()=>{
    setMenuOptions(buildMenuOptions(SearchData(searchValue), 0));
  },[searchValue]);

  return (<div tabIndex={1}
    onBlur={(e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) { setStatus(false); }
    }} >
    <div className="dropdown">
      <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
        onClick={() => setStatus(!status)}>{(dropDownValue?.length>0)?dropDownValue:placeholder}</button>
      <ul className={(status ? "dropdown-menu show" : "dropdown-menu")+
        (layout==="top"?" dropup-menu":"")} data-popper-placement="top-start">
        <div className="input-group mb-0">
          <input className="form-control" placeholder={searchLabel} onChange={(event) =>{
            setSearchValue(event.target.value);
          }} />
          <button type="button" className={"btn btn-secondary"}><Icon /></button>
        </div>
        <li><hr className="dropdown-divider" /></li>
        <div className="dropdown-scroll scroll">
          {menuOptions}
        </div>
      </ul>
    </div>
  </div>);
}