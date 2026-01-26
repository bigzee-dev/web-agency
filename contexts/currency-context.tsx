"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'BWP' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('BWP');
  const [isHydrated, setIsHydrated] = useState(false);

  // Load currency preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('preferred-currency');
    if (stored === 'BWP' || stored === 'USD') {
      setCurrencyState(stored);
    }
    setIsHydrated(true);
  }, []);

  // Save currency preference to localStorage when it changes
  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('preferred-currency', newCurrency);
  };

  // Prevent hydration mismatch by rendering children only after hydration
  if (!isHydrated) {
    return null;
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
