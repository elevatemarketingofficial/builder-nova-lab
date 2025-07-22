import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Phone,
  MessageSquare,
  Instagram,
  X,
  ZoomIn,
} from "lucide-react";
import Header from "../components/Header";

export default function Community() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <style>{`
        @keyframes heroZoom {
          0% { background-size: 110%; }
          100% { background-size: 115%; }
        }
      `}</style>
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[690px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fea115177b4a7470595ac9b3a35fb6278)`,
            animation: "heroZoom 20s ease-in-out infinite alternate",
          }}
        >
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-[36px] sm:text-[50px] lg:text-[67px] font-bold leading-tight text-white">
              COMMUNITY
            </h1>
          </div>
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </section>

        {/* Community Map Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue mb-4">
                Explore the Community
              </h2>
            </div>
            <div className="relative mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1b43864218d3427b87d8535f26c560e0"
                alt="Community Map"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <div className="text-white text-center">
                  <ZoomIn className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">Click to enlarge</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1b43864218d3427b87d8535f26c560e0"
                alt="Community Map - Enlarged"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* UC Merced Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-brand-light-gray">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7903484f28194fc6b6723d0e5763fe2a"
                  alt="UC Merced"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                  UC Merced
                </h2>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed">
                  UC Merced is the first American research university
                  established in the 21st century. UC Merced has upheld their
                  legacy for innovative, interdisciplinary research. From
                  Quantitative and Systems Biology to Mechanical Engineering,
                  Dynamic curriculums and commitment to diversity, and
                  leadership programs are bounded by student success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff6b9bad3bd5743f58ef87414df684e73"
                  alt="Outdoor Activities"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                  Outdoor
                </h2>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-6">
                  Explore the most popular biking paths, hiking trails, walking
                  paths, Parks and other attractions surrounding Merced
                </p>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed">
                  Merced is well known for the beautiful Yosemite Lake & Merced
                  River.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-brand-light-gray">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1b43864218d3427b87d8535f26c560e0"
                  alt="Community Attractions"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                  Explore and enjoy these must-visit locations
                </h2>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed">
                  The popular & historic majesty of Yosemite National Park's
                  landscape living within our community puts numerous scenic
                  escapes within driving distance. The Merced County Courthouse
                  Museum gives an appreciation of our community's rich history,
                  while the Merced National Wildlife Refuge and Applegate Zoo
                  house some wonderful and exotic species.
                </p>
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
                    onChange={handleInputChange}
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
      </main>

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
