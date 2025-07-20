import { Link } from "react-router-dom";
import { ChevronDown, Phone, MessageSquare, Home } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[90px] h-[73px] flex items-center">
              <svg
                width="90"
                height="73"
                viewBox="0 0 90 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_24_90)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.0781 0.380005L53.1331 8.09406V3.93367H63.6412V16.4236L85.0142 33.1426C82.7315 33.1426 80.3963 32.9348 78.0437 32.9348H73.757L42.9998 8.76155L19.3612 27.2229H22.5677V39.7386C33.0231 34.0096 53.8737 30.9152 68.2853 33.2642C49.3996 34.6279 31.2433 41.0787 15.7628 51.9249V33.94H0.000579834L43.0781 0.380005Z"
                    fill="#D19837"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M54.3964 40.2329C65.7722 36.4335 77.722 34.6156 89.7194 34.8587C82.5793 35.742 75.5433 37.3183 68.7122 39.5654C47.2257 46.6723 30.5485 59.1102 22.6722 72.38L11.1358 68.8522C19.8489 57.1339 35.1668 46.482 54.3964 40.1546V40.2329Z"
                    fill="#D19837"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.042 17.7666H42.6599V22.3517H38.042V17.7666ZM44.9426 24.51H49.5521V29.1038H44.9426V24.51ZM38.042 24.51H42.6599V29.1038H38.042V24.51ZM44.9426 17.7666H49.5521V22.3517H44.9426V17.7666Z"
                    fill="#D19837"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_24_90">
                    <rect
                      width="89.7188"
                      height="72"
                      fill="white"
                      transform="translate(0.000579834 0.380005)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-black text-[15px] font-normal uppercase"
            >
              About
            </Link>
            <Link
              to="/homes"
              className="text-black text-[15px] font-normal uppercase"
            >
              Floor Plans
            </Link>
            <Link
              to="/community"
              className="text-black text-[16px] font-normal uppercase"
            >
              Community
            </Link>
            <Link
              to="/contact"
              className="text-black text-[16px] font-normal uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* View Listings Button */}
          <Link
            to="/listings"
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-3 sm:px-5 py-2 sm:py-3 rounded-sm text-[12px] sm:text-[14px] font-medium hover:bg-opacity-90 transition-colors"
          >
            <Home className="w-4 h-4" />
            View Listings
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-brand-dark-blue mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Contact page content coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
