import React, { createContext, useContext, useState } from 'react';

type TabsContextType = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({ 
  value, 
  onValueChange, 
  children, 
  className = '' 
}: { 
  value: string; 
  onValueChange: (value: string) => void; 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ 
  value, 
  children, 
  className = '' 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }
  
  const { value: selectedValue, onValueChange } = context;
  
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selectedValue === value}
      data-state={selectedValue === value ? 'active' : 'inactive'}
      onClick={() => onValueChange(value)}
      className={className}
    >
      {children}
    </button>
  );
}

export function TabsContent({ 
  value, 
  children, 
  className = '' 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }
  
  const { value: selectedValue } = context;
  
  if (selectedValue !== value) {
    return null;
  }
  
  return (
    <div
      role="tabpanel"
      data-state={selectedValue === value ? 'active' : 'inactive'}
      className={className}
    >
      {children}
    </div>
  );
}