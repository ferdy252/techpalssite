import React, { createContext, useContext, useEffect, useState } from 'react';

interface PerformanceContextType {
  isLowPerfDevice: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({ isLowPerfDevice: false });

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);

  useEffect(() => {
    // Check if device is low performance
    const checkPerformance = () => {
      const isLowEnd: boolean = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4);
      
      setIsLowPerfDevice(isLowEnd);
    };

    checkPerformance();
  }, []);

  return (
    <PerformanceContext.Provider value={{ isLowPerfDevice }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => useContext(PerformanceContext);
