import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Colors } from '@LibUtils/GlobalStyles.js';
import './index.css';


export const NavBarTabs = ({ menulinks, activeColor, defaultColor, activeId }) => {
  let activeShowColor = (activeColor === undefined) ? Colors.primary : activeColor;
  let defaultShowColor = (defaultColor === undefined) ? Colors.secondary : activeColor;
  const [currentActiveId, setCurrentActiveId] = useState(activeId);
  return (<ul className="navbar-nav" style={{ paddingTop: '5px', flexDirection: 'row' }}>
    {menulinks.map((data, index) => {
      let activeStyle = { padding: '10px', color: activeShowColor, background: 'none', textDecoration: 'none', borderBottom: '2px solid ' + activeShowColor, fontWeight: 'bold' };
      let defaultStyle = { padding: '10px', textDecoration: 'none', background: 'none', color: defaultShowColor, fontWeight: 'bold' };
      return (<li key={index}>
        <NavLink style={((currentActiveId === undefined && index === 0) || (currentActiveId === data.id)) ? activeStyle : defaultStyle}
          aria-current={data.id} to={data.url} onClick={() => setCurrentActiveId(data.id)}>{data.label}</NavLink>
      </li>);
    })}
  </ul>);
};

export const Menu = ({ type, layout, align, list }) => {

  const Nav = ({ layout, align, list }) => {

    let alignment = (align === 'center') ? "justify-content-center" : ((align === 'end') ? "justify-content-end" : "");

    const NavContent = () => {
      return (list.map((l) => {
        return (<li className="nav-item">
          <a className={(l.disabled && (l.disabled === true)) ? "nav-link disabled" : "nav-link"} href={l.link}>{l.label}</a>
        </li>);
      }));
    };

    return (<>
      {(layout === undefined || layout === 'horizontal') && (<ul className={"nav " + alignment}><NavContent /></ul>)}
      {(layout === 'vertical') && <div align={align}><ul className={"nav flex-column "}><NavContent /></ul></div>}
    </>);

  };

  const Tab = ({ list }) => {
    const [activeTab, setActiveTab] = useState(list[0].id);
    let tabList = [];
    let tabContent = [];
    list.map((l, i) => {
      tabList.push(<li className="nav-item">
        <a className={l.id === activeTab ? "nav-link active" : "nav-link"} data-bs-toggle="tab"
          href="#" onClick={() => setActiveTab(l.id)}>{l.label}</a>
      </li>);
      tabContent.push(<div className={l.id === activeTab ? "tab-pane tab-active" : "tab-pane fade"} id={l.id}>{l.component}</div>)
    })
    return (<>
      <ul className="nav nav-tabs">
        {tabList}
      </ul>
      <div className="tab-content">
        {tabContent}
      </div>
    </>);
  };

  const Pills = ({ list })=>{
    const [activePill, setActivePill] = useState(list[0].id);
    let tabList = [];
    let tabContent = [];
    list.map((l, i) => {
      tabList.push(<li className="nav-item">
        <a className={l.id === activePill ? "nav-link active" : "nav-link"} data-bs-toggle="tab"
          href="#" onClick={() => setActivePill(l.id)}>{l.label}</a>
      </li>);
      tabContent.push(<div className={l.id === activePill ? "tab-pane pill-active" : "tab-pane fade"} id={l.id}>{l.component}</div>)
    })
    return (<>
      <ul className="nav nav-pills">
        {tabList}
      </ul>
      <div className="tab-content">
        {tabContent}
      </div>
    </>);
  };

  return (<>
    {type.toLowerCase() === "nav" && <Nav layout={layout} align={align} list={list} />}
    {type.toLowerCase() === "tab" && <Tab list={list} />}
    {type.toLowerCase() === "pill" && <Pills list={list} />}
  </>);
};