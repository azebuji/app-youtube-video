import classNames from "classnames";
import React from "react";

import useSidebar from "./sidebar/hooks/useSidebar";

interface AuthGuardType {
  className?: string;
  children: React.ReactNode;
}


const Main = ({ className, children }: AuthGuardType) => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <div onClick={() => { !isOpen && setIsOpen(true) }} className={classNames("main", className)}>{children}</div>
  )
};

export default Main;
