import React, { useState } from "react";

const initialState = {
  isOpen: true,
  setIsOpen: (open: boolean) => { },
};

const SidebarContext = React.createContext(initialState);

interface SidebarProviderType {
  children: React.ReactNode;
}

function SidebarProvider({ children }: SidebarProviderType) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
