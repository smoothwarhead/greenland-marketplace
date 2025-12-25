import { useState } from "react";
import "./sidebar.scss";
import NavLogo from "../../../assets/logos/G-LOGO-CLEAN-LIGHT.png";
import AGENT from "../../../assets/others/agent.jpg";
import { navLinks } from "../../../utils/data";
import { Link, NavLink } from "react-router-dom";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline, IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { useAuth } from "../../../context/AuthContext";

const Sidebar = () => {

  const { user, logout }= useAuth();

  return (
    <aside className="agent-sidebar">
      <div className="sidebar-logo">
        <div className="logo-dot">
          <img src={NavLogo} alt="company-logo" />
        </div>
        <span className="side-logo-text">Greenland Enterprise</span>
      </div>

      {/* <div className="search-bar">
        <input
          className="side-search-input"
          type="text"
          value=""
          placeholder="Search"
        />
      </div> */}

      <nav className="sidebar-nav">
        {navLinks.map((item, index) => (
          <li key={item.title} className={`nav-item`}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                (isActive && item.id === index + 1 ) ? "nav-label--active" : ""
              }
              end
            >
              <item.icon />
              {item.title}
            </NavLink>
          </li>
        ))}
      </nav>

      <div className="sidebar-profile">
        <NavLink 
          className={({ isActive }) => (isActive ? "profile profile--active" : "profile")}
          to="/dashboard/profile">
          <div className="side-profile-pic">
            <img src={AGENT} alt="agent-img" />
          </div>
          <div className="side-profile-content">
            <span className="agent-name">{user.name}</span>
            <span className="position">Agent</span>
          </div>
        </NavLink>

        {/* <div className="profile-nav notifications">
          <NavLink
            to="/dashboard/notifcation"
            className={({ isActive }) => (isActive ? "nav-label--active" : "")}
          >
            <IoMdNotificationsOutline />
            Notifications
          </NavLink>
        </div> */}

        {/* <div className="profile-nav setings">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) => (isActive ? "nav-label--active" : "")}
          >
            <IoSettingsOutline />
            Settings
          </NavLink>
        </div> */}

        <div className="profile-nav logout">
          <NavLink
            to="/dashboard/logout"
            className={({ isActive }) => (isActive ? "nav-label--active" : "")}
            onClick={logout}
          >
            <IoLogOutOutline />
            Logout
          </NavLink>
        </div>
      </div>

      <Link className="sidebar-footer" to="/dashboard/help">
        <IoIosHelpCircleOutline />
        Help
      </Link>

    </aside>
  );
};

export default Sidebar;
