"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'BWP' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Server and first client render both use 'BWP', so hydration matches;
  // the stored preference is applied after mount. Children must always
  // render here, or the server sends an empty page to crawlers.
  const [currency, setCurrencyState] = useState<Currency>('BWP');

  // Load currency preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('preferred-currency');
    if (stored === 'BWP' || stored === 'USD') {
      setCurrencyState(stored);
    }
  }, []);

  // Save currency preference to localStorage when it changes
  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('preferred-currency', newCurrency);
  };

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
