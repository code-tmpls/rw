import React, { useState } from "react";
import { FontAwesomeIcon, Colors } from "e-ui-react";
import './index.css';

export const Dropdown = ({ id, placeholder, searchLabel, menu }) => {

  const Icon = () => <FontAwesomeIcon name="fa-search" size="12" color={Colors.light} />

  const SearchData = (filterData) => {
    return menu.filter((m) =>
    (m?.options?.filter((o) => o?.label.toLowerCase().includes(filterData.toLowerCase())).length > 0 ||
      m?.header.toLowerCase().includes(filterData.toLowerCase())));
  };

  const buildMenuOptions = (menu, lvl) => {
    return (menu.map((m) => {
      ++lvl;
      return (<div key={lvl}>
        <li>
          {m?.header && <h5 className="dropdown-header">{m.header}</h5>}
          {m?.label && <span className="dropdown-item" onClick={m?.onClick}>{m.label}</span>}
        </li>
        {m?.options && buildMenuOptions(m.options, lvl)}
      </div>)
    }));
  };

  const [menuOptions, setMenuOptions] = useState(buildMenuOptions(menu, 0));
  const [status, setStatus] = useState(false);

  return (<div tabIndex={1}
    onBlur={(e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) { setStatus(false); }
    }} >
    <div className="dropdown">
      <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
        onClick={() => setStatus(!status)}>{placeholder}</button>
      <ul className={status ? "dropdown-menu show" : "dropdown-menu"}>
        <div className="input-group mb-0">
          <input className="form-control" placeholder={searchLabel} onChange={(event) => setMenuOptions(buildMenuOptions(SearchData(event.target.value), 0))} />
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