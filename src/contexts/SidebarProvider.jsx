import React, { useState } from 'react';
import { SidebarContext } from './SidebarContext';

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    return (
      <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
        {children}
      </SidebarContext.Provider>
    );
  };
  
  export default SidebarProvider;