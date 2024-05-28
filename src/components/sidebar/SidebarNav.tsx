import React from "react";

import SidebarNavSection from "./SidebarNavSection";
import { SidebarItemsType } from "./interfaces/sidebar";

interface SidebarNavProps {
  items: {
    title: string;
    pages: SidebarItemsType[];
  }[];
}

const SidebarNav = ({ items }: SidebarNavProps) => {
  return (
    <ul className="sidebar-nav">
      {items &&
        items.map((item) => (
          <SidebarNavSection
            key={item.title}
            pages={item.pages}
            title={item.title}
          />
        ))}
    </ul>
  );
};

export default SidebarNav;
