"use client";

import { createContext, useContext, ReactNode } from "react";
import {
  RegionalContentData,
  getRegionalContent,
  isSupportedRegion,
} from "./regional-content";

interface RegionContextValue {
  regionCode: string | null;
  isSupported: boolean;
  regionData: RegionalContentData | null;
}

const RegionContext = createContext<RegionContextValue>({
  regionCode: null,
  isSupported: false,
  regionData: null,
});

/**
 * Hook to access the current region context
 * Returns regionCode, isSupported flag, and regionData (if supported)
 */
export function useRegion() {
  return useContext(RegionContext);
}

interface RegionProviderProps {
  children: ReactNode;
  regionCode: string | null;
}

/**
 * Provider component that wraps the app and provides region info
 * Should be used in the root layout with regionCode from middleware headers
 */
export function RegionProvider({ children, regionCode }: RegionProviderProps) {
  const isSupported = isSupportedRegion(regionCode);
  const regionData = getRegionalContent(regionCode);

  return (
    <RegionContext.Provider value={{ regionCode, isSupported, regionData }}>
      {children}
    </RegionContext.Provider>
  );
}
