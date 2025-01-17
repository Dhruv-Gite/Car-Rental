import React from 'react';
import { NavLink } from "react-router-dom";
import navLinks from '../../assets/dummy-data/navLinks';
import "./sidebar.css";

const Sidebar = () => {
  return <div className="sidebar">
    <div className="sidabar__top">
      <h2>
        <span><i className="ri-taxi-line"></i></span> UberX
      </h2>
    </div>

    <div className="sidebar__content">
      <div className="menu">
        <ul className="nav__list">
          {
            navLinks.map((item,index)=>(
              <li className="nav__item" key={index}>
              <NavLink to="/dashboard" className={navClass => navClass.isActive ? 'nav__active nav__link' : 'nav__link'}>
                
                  <i className={item.icon}></i>
                
                 {item.display}
              </NavLink></li>
            ))
          }
        </ul>
      </div>

      <div className="sidebar__bottom">
        <span><i className="ri-logout-circle-r-line"></i>Logout</span>
      </div>
    </div>
  </div>
}

export default Sidebar;
