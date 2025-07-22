import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  ExternalLink,
  Bed,
  Bath,
  Car,
  Square,
} from "lucide-react";
import Header from "../components/Header";

export default function Listings() {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    homeType: "",
  });

  const listings = [
    {
      id: 1,
      title: "Oceanside II",
      address: "154 Montage Drive, Merced, CA 95348",
      price: "$520,000",
      beds: 4,
      baths: 2.5,
      sqft: 1746,
      garage: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78",
      floorPlan: "/homes/oceanside-ii",
    },
    {
      id: 2,
      title: "Skyview II",
      address: "154 Montage Drive, Merced, CA 95348",
      price: "$535,000",
      beds: 4,
      baths: 2.5,
      sqft: 1824,
      garage: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a",
      floorPlan: "/homes/skyview-ii",
    },
    {
      id: 3,
      title: "Mountain Top II",
      address: "154 Montage Drive, Merced, CA 95348",
      price: "$565,000",
      beds: 5,
      baths: 3,
      sqft: 1890,
      garage: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626",
      floorPlan: "/homes/mountain-top-ii",
    },
    {
      id: 4,
      title: "Windridge",
      address: "154 Montage Drive, Merced, CA 95348",
      price: "$545,000",
      beds: 5,
      baths: 2.5,
      sqft: 1791,
      garage: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f",
      floorPlan: "/homes/windridge",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[356px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff6b9bad3bd5743f58ef87414df684e73')`,
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-[36px] sm:text-[50px] lg:text-[67px] font-bold leading-tight">
              Available Homes
            </h1>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white py-6 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-[20px] font-bold text-brand-dark-blue">
                  {listings.length} Homes Available
                </h2>
                <p className="text-[14px] text-brand-medium-blue">
                  Find your perfect home in Paseo
                </p>
              </div>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 bg-brand-gold text-white px-4 py-2 rounded-sm text-[14px] font-medium hover:bg-opacity-90 transition-colors"
              >
                Filter Options
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Filter Panel */}
            {filterOpen && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-brand-dark-blue mb-2">
                      Price Range
                    </label>
                    <select
                      value={selectedFilters.priceRange}
                      onChange={(e) =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          priceRange: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                    >
                      <option value="">Any Price</option>
                      <option value="500-550">$500K - $550K</option>
                      <option value="550-600">$550K - $600K</option>
                      <option value="600+">$600K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-brand-dark-blue mb-2">
                      Bedrooms
                    </label>
                    <select
                      value={selectedFilters.bedrooms}
                      onChange={(e) =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          bedrooms: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                    >
                      <option value="">Any Bedrooms</option>
                      <option value="3">3+ Bedrooms</option>
                      <option value="4">4+ Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-brand-dark-blue mb-2">
                      Bathrooms
                    </label>
                    <select
                      value={selectedFilters.bathrooms}
                      onChange={(e) =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          bathrooms: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                    >
                      <option value="">Any Bathrooms</option>
                      <option value="2">2+ Bathrooms</option>
                      <option value="2.5">2.5+ Bathrooms</option>
                      <option value="3">3+ Bathrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-brand-dark-blue mb-2">
                      Home Type
                    </label>
                    <select
                      value={selectedFilters.homeType}
                      onChange={(e) =>
                        setSelectedFilters((prev) => ({
                          ...prev,
                          homeType: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                    >
                      <option value="">All Types</option>
                      <option value="single-story">Single Story</option>
                      <option value="two-story">Two Story</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 rounded-sm text-[14px] font-medium">
                      {listing.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[24px] font-bold text-brand-dark-blue mb-2">
                      {listing.title}
                    </h3>
                    <p className="text-[14px] text-brand-medium-blue mb-4">
                      {listing.address}
                    </p>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4 text-brand-medium-blue" />
                        <span className="text-[14px] text-brand-medium-blue">
                          {listing.beds} Beds
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4 text-brand-medium-blue" />
                        <span className="text-[14px] text-brand-medium-blue">
                          {listing.baths} Baths
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4 text-brand-medium-blue" />
                        <span className="text-[14px] text-brand-medium-blue">
                          {listing.sqft} Sq Ft
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-4 h-4 text-brand-medium-blue" />
                        <span className="text-[14px] text-brand-medium-blue">
                          {listing.garage} Car
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={listing.floorPlan}
                        className="flex-1 bg-brand-gold text-white text-center py-3 px-4 rounded-sm text-[14px] font-medium hover:bg-opacity-90 transition-colors"
                      >
                        View Floor Plan
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border-2 border-brand-gold text-brand-gold text-center py-3 px-4 rounded-sm text-[14px] font-medium hover:bg-brand-gold hover:text-white transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-brand-light-gray py-12">
          <div className="max-w-[800px] mx-auto px-4 text-center">
            <h2 className="text-[28px] lg:text-[35px] font-bold text-brand-dark-blue mb-4">
              Ready to Make Paseo Your Home?
            </h2>
            <p className="text-[16px] text-brand-medium-blue mb-8">
              Schedule a tour or contact our sales team to learn more about
              available homes and financing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand-gold text-white px-8 py-3 rounded-sm text-[15px] font-medium hover:bg-opacity-90 transition-colors"
              >
                Schedule Tour
              </Link>
              <Link
                to="/register"
                className="border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-sm text-[15px] font-medium hover:bg-brand-gold hover:text-white transition-colors"
              >
                Join Interest List
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
