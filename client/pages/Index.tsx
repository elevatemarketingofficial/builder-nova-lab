import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  Instagram,
} from "lucide-react";
import Header from "../components/Header";

export default function Index() {
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
      <section className="relative h-[400px] sm:h-[600px] lg:h-[799px] bg-gray-800 flex items-center justify-center overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/sbkUilXuGwI?autoplay=1&mute=1&loop=1&playlist=sbkUilXuGwI&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=1"
            title="Choice Valley Homes Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4">
          {/* Warning Icon and Text */}
          <div className="mb-4 sm:mb-8 flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-4 flex items-center justify-center"></div>
          </div>

          {/* Main Title */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-8">
            <h1 className="text-[32px] sm:text-[50px] lg:text-[78px] font-bold leading-tight text-white drop-shadow-lg">
              CHOICE VALLEY
            </h1>
            <h1 className="text-[36px] sm:text-[54px] lg:text-[84px] font-normal leading-tight text-white drop-shadow-lg">
              HOMES
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center">
            <p
              className="text-[20px] sm:text-[28px] lg:text-[35px] font-normal mb-2 sm:mb-4"
              style={{ fontFamily: "Aguafina Script, cursive" }}
            >
              Presents
            </p>
            <h2 className="text-[28px] sm:text-[40px] lg:text-[53px] font-bold leading-tight">
              PASEO
            </h2>
          </div>
        </div>
      </section>

      {/* Home Models Section */}
      <section className="bg-brand-light-gray py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Oceanside II */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78"
                  alt="Oceanside II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[28px] font-bold text-black mb-4">
                  Oceanside II
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,746 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <Link
                  to="/homes/oceanside-ii"
                  className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Skyview II */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a"
                  alt="Skyview II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[27px] font-bold text-black mb-4">
                  Skyview II
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,824 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <Link
                  to="/homes/skyview-ii"
                  className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Mountain Top II */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626"
                  alt="Mountain Top II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[27px] font-bold text-black mb-4">
                  Mountain Top II
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,890 Sq. Ft. | 5 Bed, 3 Bath
                  <br />
                  Main Floor Bedroom
                </p>
                <Link
                  to="/homes/mountain-top-ii"
                  className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Windridge */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f"
                  alt="Windridge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[27px] font-bold text-black mb-4">
                  Windridge
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,791 Sq. Ft. | 5 Bed, 2 1/2 Bath
                  <br />
                  Main Floor Bedroom
                </p>
                <Link
                  to="/homes/windridge"
                  className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Place You Will Call Home Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <div className="lg:w-1/2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1b43864218d3427b87d8535f26c560e0"
                alt="Choice Valley Homes"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                A place you will call
                <br />
                home
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed">
                Choice Valley Homes presents the Paseo Collection in Bellevue
                Ranch, located in North Merced. Paseo is adjacent to the highly
                acclaimed El Captain high school with charming rural
                surroundings which is across from the highly coveted custom acre
                homes, almond orchards and unparalleled Sierra Mountain views.
                <br />
                <br />
                Our mission is to provide you with a new home where Beauty,
                Luxury, Quality and Comfort meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Modern Living Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-6">
            <div className="lg:w-1/2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7903484f28194fc6b6723d0e5763fe2a"
                alt="Modern Interior"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                Designed for Modern
                <br />
                Living
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-6 lg:mb-8">
                Paseo is a{" "}
                <span className="font-bold">private gated community</span> built
                mindfully and artfully to deliver the necessities and importance
                of the new living trends. Our home designs allow you to express
                your personal style by allowing you to choose your custom
                touches to upgrade your home to perfection.
              </p>
              <Link
                to="/about"
                className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal rounded-sm hover:bg-opacity-90 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-brand-light-gray py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[33px] font-bold text-brand-dark-blue text-center mb-8 lg:mb-12">
              How it Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fd2598d1cddbf405eacc7ffffda3b49ee"
                    alt="Step 1"
                    className="w-[100px] h-[107px]"
                  />
                </div>
                <h3 className="text-[30px] font-bold text-brand-dark-blue mb-4">
                  Step 1
                </h3>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  Explore our homes and floor plans to see which home is right
                  for you.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa2990c8790314a83aed8d4b29f833b7c"
                    alt="Step 2"
                    className="w-[100px] h-[107px]"
                  />
                </div>
                <h3 className="text-[28px] font-bold text-brand-dark-blue mb-4">
                  Step 2
                </h3>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  Contact us to ask questions and get more information on price
                  and availability.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fd6137a0350c340e5a8227ab838f778de"
                    alt="Step 3"
                    className="w-[100px] h-[107px]"
                  />
                </div>
                <h3 className="text-[28px] font-bold text-brand-dark-blue mb-4">
                  Step 3
                </h3>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  It's time to move in! Once you've moved in, we're here to help
                  with any concerns or questions.
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
