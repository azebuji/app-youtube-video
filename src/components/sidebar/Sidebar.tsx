import React from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import useSidebar from "./hooks/useSidebar";

import SidebarFooter from "./SidebarFooter";
import SidebarNav from "./SidebarNav";
import logo from "../../assets/img/logo.jpg";

import { SidebarItemsType } from "./interfaces/sidebar";

interface SidebarProps {
  items: {
    title: string;
    pages: SidebarItemsType[];
  }[];
  open?: boolean;
  showFooter?: boolean;
}

const Sidebar = ({ items, showFooter = true }: SidebarProps) => {
  const { isOpen } = useSidebar();

  return (
    <nav className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <PerfectScrollbar>
          <a className="sidebar-brand" href="/sistema">
            <img src={logo} alt="Logo" className="d-block" height={30} />
          </a>

          <SidebarNav items={items} />
          {!!showFooter && <SidebarFooter />}
        </PerfectScrollbar>
      </div>
    </nav>
  );
};

export default Sidebar;
