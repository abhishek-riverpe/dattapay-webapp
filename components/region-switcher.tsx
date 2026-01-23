"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";
import { REGIONAL_CONTENT, SupportedRegion, SUPPORTED_REGIONS } from "@/lib/regional-content";

export function RegionSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<SupportedRegion | "Global">("Global");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Determine current region from pathname
    const region = SUPPORTED_REGIONS.find((r) => 
      pathname.startsWith(REGIONAL_CONTENT[r].path)
    );
    setCurrentRegion(region || "Global");
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRegionChange = (region: SupportedRegion | "Global") => {
    if (region === "Global") {
      router.push("/");
    } else {
      router.push(REGIONAL_CONTENT[region].path);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center gap-2 h-9 px-3 rounded-full hover:bg-accent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline text-xs font-medium">
          {currentRegion === "Global" ? "Global" : REGIONAL_CONTENT[currentRegion].country}
        </span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[180px] origin-top-right rounded-xl border border-border bg-popover p-1 shadow-lg ring-1 ring-black/5 focus:outline-none z-[100]">
          <button
            className="flex w-full items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
            onClick={() => handleRegionChange("Global")}
          >
            <span className="mr-3">🌐</span> Global (English)
          </button>
          <div className="my-1 h-px bg-border/50" />
          {SUPPORTED_REGIONS.map((regionCode) => (
            <button
              key={regionCode}
              className="flex w-full items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              onClick={() => handleRegionChange(regionCode)}
            >
              <span className="mr-3">{REGIONAL_CONTENT[regionCode].flag}</span>
              {REGIONAL_CONTENT[regionCode].country}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
