import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  Instagram,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import Header from "../components/Header";

export default function Homes() {
  const floorPlans = [
    {
      id: 1,
      name: "Oceanside",
      sqft: "1,691 Sq. Ft.",
      details: "4 Bed, 2 1/2 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78",
      link: "/homes/home-1691-a",
    },
    {
      id: 2,
      name: "Oceanside II",
      sqft: "1,746 Sq. Ft.",
      details: "4 Bed, 2 1/2 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78",
      link: "/homes/oceanside-ii",
    },
    {
      id: 3,
      name: "Skyview",
      sqft: "1,724 Sq. Ft.",
      details: "4 Bed, 2 1/2 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a",
      link: "/homes/skyview",
    },
    {
      id: 4,
      name: "Skyview II",
      sqft: "1,824 Sq. Ft.",
      details: "4 Bed, 2 1/2 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a",
      link: "/homes/skyview-ii",
    },
    {
      id: 5,
      name: "Windridge",
      sqft: "1,791 Sq. Ft.",
      details: "5 Bed, 2 1/2 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f",
      link: "/homes/windridge",
    },
    {
      id: 6,
      name: "Mountain Top",
      sqft: "1,874 Sq. Ft.",
      details: "5 Bed, 3 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626",
      link: "/homes/mountain-top",
    },
    {
      id: 7,
      name: "Mountain Top II",
      sqft: "1,890 Sq. Ft.",
      details: "5 Bed, 3 Bath",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626",
      link: "/homes/mountain-top-ii",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] sm:h-[500px] lg:h-[690px] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff6b9bad3bd5743f58ef87414df684e73') lightgray 0px 0px / 100% 156.522% no-repeat",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-[36px] sm:text-[50px] lg:text-[67px] font-bold leading-tight text-white">
            Floor Plans
          </h1>
        </div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
              Discover Your Perfect Home
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed max-w-[800px] mx-auto">
              Explore our collection of thoughtfully designed floor plans, each
              crafted to provide the perfect balance of comfort, functionality,
              and modern living. From cozy family homes to spacious layouts with
              room to grow, find the plan that fits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Floor Plans Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-brand-light-gray">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {floorPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[24px] font-bold text-brand-dark-blue mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4 text-brand-medium-blue" />
                      <span className="text-[14px] text-brand-medium-blue">
                        {plan.sqft}
                      </span>
                    </div>
                    <span className="text-[14px] text-brand-medium-blue">
                      {plan.details}
                    </span>
                  </div>
                  <Link
                    to={plan.link}
                    className="block w-full bg-brand-gold text-white text-center py-3 px-4 rounded-sm text-[15px] font-medium hover:bg-opacity-90 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue mb-4">
            Ready to See More?
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-8">
            Schedule a tour to see our model homes or contact our sales team to
            learn more about customization options, pricing, and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-gold text-white px-8 py-3 rounded-sm text-[15px] font-medium hover:bg-opacity-90 transition-colors"
            >
              Schedule Tour
            </Link>
            <Link
              to="/listings"
              className="border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-sm text-[15px] font-medium hover:bg-opacity-90 transition-colors"
            >
              View Available Homes
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-light-gray py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Company Logo */}
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc4fda5d5de5e4c6b86b95cf3a4a5b4c9"
                alt="Choice Valley Homes"
                className="h-[60px] lg:h-[80px]"
              />
            </div>

            {/* Contact & Message Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-8">
              <a
                href="tel:+12093089000"
                className="flex items-center gap-2 text-black font-bold text-[16px] lg:text-[21px]"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-brand-gold" />
                209-308-9000
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 text-black font-bold text-[16px] lg:text-[21px]"
              >
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 text-brand-gold" />
                Send Message
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/choicevalleyhomes/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Equal Housing Logo */}
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-[90px] h-[96px]"
              />
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] text-black">
              <span>® All Rights Reserved</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
