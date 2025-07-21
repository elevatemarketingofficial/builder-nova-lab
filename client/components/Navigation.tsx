import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Home } from "lucide-react";

export default function Navigation() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFloorPlansOpen, setIsFloorPlansOpen] = useState(false);
  const location = useLocation();

  // Timeout refs for better hover behavior
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const floorPlansTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleFloorPlansMouseEnter = () => {
    if (floorPlansTimeoutRef.current) {
      clearTimeout(floorPlansTimeoutRef.current);
    }
    setIsFloorPlansOpen(true);
  };

  const handleFloorPlansMouseLeave = () => {
    floorPlansTimeoutRef.current = setTimeout(() => {
      setIsFloorPlansOpen(false);
    }, 300); // 300ms delay before closing
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (floorPlansTimeoutRef.current)
        clearTimeout(floorPlansTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {/* About Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleAboutMouseEnter}
        onMouseLeave={handleAboutMouseLeave}
      >
        <Link
          to="/about"
          className={`flex items-center space-x-1 text-[16px] font-normal uppercase transition-colors ${
            location.pathname === "/about" || isAboutOpen
              ? "text-brand-gold"
              : "text-black hover:text-brand-gold"
          }`}
        >
          <span>About</span>
          <ChevronDown className="w-4 h-4" />
        </Link>
        {isAboutOpen && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg border border-gray-200 z-50">
            <Link
              to="/homeowner-service-request"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100 last:border-b-0"
            >
              Home Server Request
            </Link>
          </div>
        )}
        {location.pathname === "/about" && (
          <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-gold"></div>
        )}
      </div>

      {/* Floor Plans Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleFloorPlansMouseEnter}
        onMouseLeave={handleFloorPlansMouseLeave}
      >
        <Link
          to="/homes"
          className={`flex items-center space-x-1 text-[16px] font-normal uppercase transition-colors ${
            location.pathname === "/homes" ||
            location.pathname.startsWith("/homes/") ||
            isFloorPlansOpen
              ? "text-brand-gold"
              : "text-black hover:text-brand-gold"
          }`}
        >
          <span>Floor Plans</span>
          <ChevronDown className="w-4 h-4" />
        </Link>
        {isFloorPlansOpen && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg border border-gray-200 z-50">
            <Link
              to="/homes/home-1691-a"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100"
            >
              Oceanside
            </Link>
            <Link
              to="/homes/oceanside-ii"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100"
            >
              Oceanside II
            </Link>
            <Link
              to="/homes/skyview"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100"
            >
              Skyview 1
            </Link>
            <Link
              to="/homes/skyview-ii"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100"
            >
              Skyview II
            </Link>
            <Link
              to="/homes/windridge"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100"
            >
              Windridge
            </Link>
            <Link
              to="/homes/mountain-top"
              className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-b border-gray-100"
            >
              Mountain Top
            </Link>
            <div className="px-4 py-3 text-[14px] text-gray-400 cursor-not-allowed">
              Mountain Top II
            </div>
          </div>
        )}
        {(location.pathname === "/homes" ||
          location.pathname.startsWith("/homes/")) && (
          <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-gold"></div>
        )}
      </div>

      {/* Community */}
      <div className="relative">
        <Link
          to="/community"
          className={`text-[16px] font-normal uppercase transition-colors ${
            location.pathname === "/community"
              ? "text-brand-gold"
              : "text-black hover:text-brand-gold"
          }`}
        >
          Community
        </Link>
        {location.pathname === "/community" && (
          <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-gold"></div>
        )}
      </div>

      {/* Contact */}
      <div className="relative">
        <Link
          to="/contact"
          className={`text-[16px] font-normal uppercase transition-colors ${
            location.pathname === "/contact"
              ? "text-brand-gold"
              : "text-black hover:text-brand-gold"
          }`}
        >
          Contact
        </Link>
        {location.pathname === "/contact" && (
          <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-gold"></div>
        )}
      </div>
    </nav>
  );
}
