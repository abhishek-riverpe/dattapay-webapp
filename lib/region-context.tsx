"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  RegionalContentData,
  getRegionalContent,
  isSupportedRegion,
  SUPPORTED_REGIONS,
  REGIONAL_CONTENT,
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
export function RegionProvider({ children, regionCode: initialRegionCode }: RegionProviderProps) {
  const pathname = usePathname();
  const [regionCode, setRegionCode] = useState<string | null>(initialRegionCode);

  useEffect(() => {
    // Check if current path matches a supported region
    const pathRegion = SUPPORTED_REGIONS.find((r) => 
      pathname.startsWith(REGIONAL_CONTENT[r].path)
    );

    if (pathRegion) {
      setRegionCode(pathRegion);
    } else {
      setRegionCode(initialRegionCode);
    }
  }, [pathname, initialRegionCode]);

  const isSupported = isSupportedRegion(regionCode);
  const regionData = getRegionalContent(regionCode);

  return (
    <RegionContext.Provider value={{ regionCode, isSupported, regionData }}>
      {children}
    </RegionContext.Provider>
  );
}
