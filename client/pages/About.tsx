import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  ExternalLink,
} from "lucide-react";
import Header from "../components/Header";

export default function About() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            About Paseo
          </h1>
        </div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Main Content Section */}
      <section className="relative">
        <div className="max-w-[1140px] mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            {/* Left Content Box - Positioned over hero */}
            <div className="lg:w-[570px] bg-white p-6 sm:p-8 lg:p-10 shadow-lg relative -mt-32 lg:-mt-40 z-10">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                Homes built with
                <br />
                convenience and modern
                <br />
                living in mind.
              </h2>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-6">
                Paseo collection consists of 142 homes that offers a variety of
                designs to satisfy today's life style. These two-story,
                single-family homes have an open floor concept that range from
                1691 sf to 1890 sq ft. Each style includes 4-5 bedrooms, 2.5-3.5
                bathrooms and a 2-car garage.{" "}
                <span className="font-bold">
                  All of our homes include an industry- leading home warranty.
                </span>
              </p>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-6">
                Our community features an extensive space for walking and
                biking. Paseo provides homeowners with lush and park-like
                landscaping, a playground for kids, basketball court surrounded
                by benches to celebrate the sunsets with friends and neighbors.
              </p>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed">
                Schedule a tour with our sales professionals today!
              </p>
            </div>

            {/* Right Image - positioned appropriately */}
            <div className="lg:w-[550px] lg:absolute lg:right-4 lg:top-24">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2efbe6f749384e439fa1711aa37738c4"
                alt="Choice Valley Homes"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-12"></div>

      {/* About Choice Valley Homes Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Left Image */}
            <div className="lg:w-[664px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fe4179810651a44a1be7d805befea5139"
                alt="Choice Valley Homes Building"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-[456px] bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
              {/* CVH Icon */}
              <div className="flex justify-center mb-6 lg:mb-8">
                <svg
                  width="165"
                  height="131"
                  viewBox="0 0 166 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[120px] h-[95px] lg:w-[165px] lg:h-[131px]"
                >
                  <g clipPath="url(#clip0_11_139)">
                    <mask
                      id="mask0_11_139"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="166"
                      height="133"
                    >
                      <path
                        d="M165.72 0.880005H0.279999V132.021H165.72V0.880005Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_11_139)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M78.751 0.880005L97.0684 14.9323V7.35436H116.209V30.1044L155.144 60.5615C150.986 60.5615 146.733 60.1822 142.447 60.1822H134.637L78.6098 16.1469L35.547 49.7776H41.3898V72.576C60.4356 62.1412 98.4182 56.5042 124.671 60.7834C90.2673 63.267 57.1934 75.0173 28.9919 94.7753V62.0141H0.279999L78.751 0.880005Z"
                        fill="#D29A3A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M99.3705 73.4779C120.093 66.5556 141.86 63.2448 163.715 63.6887C150.709 65.2967 137.892 68.1677 125.447 72.2613C86.3068 85.208 55.9284 107.865 41.5795 132.038L20.5645 125.612C36.4367 104.266 64.3396 84.861 99.3705 73.3346V73.4779Z"
                        fill="#D29A3A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M69.5771 32.5516H77.9904V40.9043H69.5771V32.5516ZM82.1486 44.8366H90.5457V53.2034H82.1486V44.8366ZM69.5771 44.8366H77.9904V53.2034H69.5771V44.8366ZM82.1486 32.5516H90.5457V40.9043H82.1486V32.5516Z"
                        fill="#D29A3A"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_11_139">
                      <rect
                        width="165.44"
                        height="131.141"
                        fill="white"
                        transform="translate(0.279999 0.880005)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6 text-center">
                About Choice Valley
                <br />
                Homes
              </h2>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-6 text-center">
                Your new local builder with extensive knowledge, passion and
                expertise in the building industry.
              </p>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed text-center">
                We are building homes with the utmost attention to detail and
                quality building materials. our impeccable standards are
                reflected in every home we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold text-brand-dark-blue text-center mb-8 lg:mb-12">
            Our Values
          </h2>

          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {/* Professionalism */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F42888b9f4fb345a0b7620c5d8e6cf5c6"
                alt="Professionalism"
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-[18px] lg:text-[21px] font-bold text-white mb-3">
                  Professionalism
                </h3>
                <p className="text-[14px] lg:text-[16px] text-white leading-relaxed">
                  We strive to exceed your expectations with invincible
                  professionalism during all aspects of your home buying
                  experience.
                </p>
              </div>
            </div>

            {/* Convenience */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5b1c1af36a51452fb89ab36958f58be6"
                alt="Convenience"
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-[18px] lg:text-[23px] font-bold text-white mb-3">
                  Convenience
                </h3>
                <p className="text-[14px] lg:text-[16px] text-white leading-relaxed">
                  We care about you and your comfort during the process of
                  homeownership. Making this journey pleasant for you is our
                  joyful responsibility, we deliver!
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* People First */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F999450ede1c54c2987e79c784fb7c33e"
                alt="People First"
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-[18px] lg:text-[22px] font-bold text-white mb-3">
                  People First
                </h3>
                <p className="text-[14px] lg:text-[16px] text-white leading-relaxed">
                  We don't just build houses, we build HOMES! You and your
                  satisfaction are our first priority!
                </p>
              </div>
            </div>

            {/* Flexibility */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff80bc851f09d40579641e193f7151629"
                alt="Flexibility"
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-[18px] lg:text-[22px] font-bold text-white mb-3">
                  Flexibility
                </h3>
                <p className="text-[14px] lg:text-[16px] text-white leading-relaxed">
                  We are here to assist you step by step through the entire
                  process. We will work around your schedule to accommodate your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[730px] mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <div className="mb-4 lg:mb-6 flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                alt="Contact"
                className="w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full border-3 border-brand-gold border-opacity-34"
              />
            </div>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-brand-dark-blue">
              Get in Touch
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[15px] text-brand-medium-blue mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-white border-b border-brand-text-gray rounded-sm px-3 py-2 focus:outline-none focus:border-brand-gold resize-none"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-[15px] text-brand-medium-blue">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  className="w-3 h-3 mt-1 bg-blue-600 rounded"
                />
                <div className="text-[15px] text-brand-medium-blue leading-[24.75px]">
                  <p>
                    By pressing the Submit button, I agree to Choice Valley
                    contacting me by email and/or phone
                  </p>
                  <p>
                    to share home availability information or related
                    opportunities. I also understand that any
                  </p>
                  <p>
                    information I've shared in this form is subject to Choice
                    Valley Homes' Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-brand-text-gray text-white px-12 py-3 text-[15px] font-medium rounded-sm hover:bg-opacity-90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-medium-gray py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center space-y-6 lg:space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-6 lg:mb-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                alt="Choice Valley Homes Logo"
                className="w-[300px] h-[44px] sm:w-[500px] sm:h-[74px] lg:w-[632px] lg:h-[93px] object-cover object-center"
                style={{
                  aspectRatio: "6.76",
                  minHeight: "20px",
                  minWidth: "20px",
                  overflow: "hidden",
                }}
              />
            </div>

            <h3 className="text-[20px] sm:text-[24px] lg:text-[30px] text-brand-medium-blue font-normal px-4">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="text-center">
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-brand-medium-blue leading-relaxed">
                Stephanie Stine
                <br />
                Community Sales Manager
                <br />
                209-308-9000
                <br />
                DRE# 02189834
              </p>
            </div>

            <div className="text-center">
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-brand-medium-blue leading-relaxed">
                Hours
                <br />
                Monday – Closed
                <br />
                Tuesday – Saturday 10am – 5pm
                <br />
                Sunday – 11am – 4pm
              </p>
            </div>

            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-brand-medium-blue">
              154 Montage Drive, Merced, CA 95348
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <a
                href="tel:209-308-9000"
                className="flex items-center gap-2 text-black font-bold text-[16px] lg:text-[18px]"
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
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <ExternalLink className="w-6 h-6 text-white" />
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
