import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Instagram,
  Home,
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
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

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

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row - First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
              </div>

              {/* Second Row - Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="px-[5px]">
                <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full h-[170px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 py-2 resize-none focus:outline-none focus:border-[#D29A3A]"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="px-[5px] space-y-4">
                <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px]">
                  Accept Terms of Contacting
                </label>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="w-[13px] h-[13px] bg-[#0075FF] rounded-[2.5px] border-0 mt-1 flex-shrink-0"
                  />
                  <div className="text-[#3A4F66] text-[15px] font-normal leading-[24.75px]">
                    <p className="mb-1">
                      By pressing the Submit button, I agree to Choice Valley
                      contacting me by email and/or phone to share home
                      availability information or related opportunities. I also
                    </p>
                    <p>
                      understand that any information I've shared in this form
                      is subject to Choice Valley Homes' Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-[5px]">
                <button
                  type="submit"
                  className="w-[362px] h-[40px] bg-[#69727D] text-white rounded-[3px] text-[15px] font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#F2F4F7] py-16">
          <div className="max-w-[1270px] mx-auto px-4">
            <div className="text-center">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                  alt="Choice Valley Homes Logo"
                  className="w-[400px] h-[59px] sm:w-[600px] sm:h-[88px] lg:w-[719px] lg:h-[106px] object-cover object-center"
                  style={{
                    aspectRatio: "6.76",
                    minHeight: "20px",
                    minWidth: "20px",
                    overflow: "hidden",
                  }}
                />
              </div>

              <h3 className="text-[#3A4F66] text-[30px] leading-[49.5px] mt-8 px-4">
                Building communities throughout the Central Valley
              </h3>
              <p className="text-[#3A4F66] mt-8">
                For More Information about PASEO, Please Call or Text
              </p>
              <div className="mt-8">
                <p className="text-[#3A4F66] text-lg leading-[29.7px]">
                  <span>Stephanie Stine</span>
                  <br />
                  <span>Community Sales Manager</span>
                  <br />
                  <span>209-308-9000</span>
                  <br />
                  <span>DRE# 02189834</span>
                </p>
              </div>
              <div className="mt-8">
                <p className="text-[#3A4F66] text-lg leading-[29.7px]">
                  <span>Hours</span>
                  <br />
                  <span>Monday – Closed</span>
                  <br />
                  <span>Tuesday – Saturday 10am – 5pm</span>
                  <br />
                  <span>Sunday – 11am – 4pm</span>
                </p>
              </div>
              <p className="text-[#3A4F66] text-lg leading-[29.7px] mt-8">
                154 Montage Drive, Merced, CA 95348
              </p>

              <div className="flex justify-center items-center gap-4 mt-8">
                <a
                  href="tel:209-308-9000"
                  className="flex items-center gap-2 text-black text-lg font-bold"
                >
                  <Phone className="w-5 h-5 text-[#D29A3A]" />
                  <span>209-308-9000</span>
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#"
                  className="flex items-center gap-2 text-black text-xl font-bold"
                >
                  <MessageSquare className="w-5 h-5 text-[#D29A3A]" />
                  <span>Send Message</span>
                </a>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="https://www.instagram.com/choicevalleyhomes/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-[102px] h-[109px]"
              />
            </div>

            <div className="flex justify-center items-center gap-2 mt-8 text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
