import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Home } from "lucide-react";

export default function Navigation() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFloorPlansOpen, setIsFloorPlansOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {/* About Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsAboutOpen(true)}
        onMouseLeave={() => setIsAboutOpen(false)}
      >
        <Link
          to="/about"
          className="flex items-center space-x-2 text-black text-[15px] font-normal uppercase hover:text-brand-gold transition-colors"
        >
          <span>About</span>
          <ChevronDown className="w-4 h-4" />
        </Link>
        {isAboutOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50">
            <Link
              to="/homeowner-service-request"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors"
            >
              Home Server Request
            </Link>
          </div>
        )}
      </div>

      {/* Floor Plans Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsFloorPlansOpen(true)}
        onMouseLeave={() => setIsFloorPlansOpen(false)}
      >
        <Link
          to="/homes"
          className="flex items-center space-x-2 text-black text-[15px] font-normal uppercase hover:text-brand-gold transition-colors"
        >
          <span>Floor Plans</span>
          <ChevronDown className="w-4 h-4" />
        </Link>
        {isFloorPlansOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50">
            <Link
              to="/homes/home-1691-a"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors"
            >
              Oceanside
            </Link>
            <Link
              to="/homes/oceanside-ii"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors"
            >
              Oceanside II
            </Link>
            <Link
              to="/homes/skyview"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors"
            >
              Skyview
            </Link>
            <div className="px-4 py-3 text-sm text-gray-500 cursor-not-allowed">
              Skyview II
            </div>
            <div className="px-4 py-3 text-sm text-gray-500 cursor-not-allowed">
              Windridge
            </div>
            <div className="px-4 py-3 text-sm text-gray-500 cursor-not-allowed">
              Mountain Top
            </div>
            <div className="px-4 py-3 text-sm text-gray-500 cursor-not-allowed">
              Mountain Top II
            </div>
          </div>
        )}
      </div>

      {/* Community */}
      <Link
        to="/community"
        className="text-black text-[16px] font-normal uppercase hover:text-brand-gold transition-colors"
      >
        Community
      </Link>

      {/* Contact */}
      <Link
        to="/contact"
        className="text-black text-[16px] font-normal uppercase hover:text-brand-gold transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
}
