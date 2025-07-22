import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Phone, MessageSquare, ExternalLink } from "lucide-react";
import Header from "../components/Header";

export default function Contact() {
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
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-[#D29A3A] py-[55px] lg:py-[80px]">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-[400px]">
            <div className="text-white">
              <p className="text-base font-normal mb-6">How can we help?</p>
              <h1 className="text-[32px] lg:text-[64px] font-extrabold leading-none">
                GET IN TOUCH
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div className="bg-white">
          <div className="max-w-[1920px] mx-auto px-4 lg:px-[400px] py-[55px] lg:py-[85px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[93px]">
              {/* Profile Image */}
              <div className="lg:w-[470px] h-auto flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                  alt="Contact"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Get in Touch Heading */}
              <div className="flex-1">
                <h2 className="text-[24px] lg:text-[30px] font-bold text-[#1B365C] mb-8">
                  Get in Touch
                </h2>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Row - First Name & Last Name */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-normal text-[#5A7496] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full h-[50px] bg-white border-b border-[#D8D8D8] focus:outline-none focus:border-[#D29A3A] px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-normal text-[#5A7496] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full h-[50px] bg-white border-b border-[#D8D8D8] focus:outline-none focus:border-[#D29A3A] px-3"
                      />
                    </div>
                  </div>

                  {/* Second Row - Email & Phone */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-normal text-[#5A7496] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-[50px] bg-white border-b border-[#D8D8D8] focus:outline-none focus:border-[#D29A3A] px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-normal text-[#5A7496] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-[50px] bg-white border-b border-[#D8D8D8] focus:outline-none focus:border-[#D29A3A] px-3"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-base font-normal text-[#5A7496] mb-2">
                      How can we help you?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-white border-b border-[#D8D8D8] focus:outline-none focus:border-[#D29A3A] px-3 py-2 resize-none"
                    />
                  </div>

                  {/* Terms & Conditions */}
                  <div className="space-y-4">
                    <label className="block text-base font-normal text-[#5A7496]">
                      Accept Terms of Contacting
                    </label>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="w-3 h-3 mt-1 bg-blue-600 rounded"
                      />
                      <div className="text-base font-normal text-[#5A7496] leading-[25px]">
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#5A7496] text-white px-12 py-3 text-base font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#5A7496] py-8 sm:py-12 lg:py-16">
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

            <h3 className="text-[20px] sm:text-[24px] lg:text-[30px] text-white font-normal px-4">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="text-center">
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white leading-relaxed">
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
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white leading-relaxed">
                Hours
                <br />
                Monday – Closed
                <br />
                Tuesday – Saturday 10am – 5pm
                <br />
                Sunday – 11am – 4pm
              </p>
            </div>

            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white">
              154 Montage Drive, Merced, CA 95348
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <a
                href="tel:209-308-9000"
                className="flex items-center gap-2 text-white font-bold text-[16px] lg:text-[18px]"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#D29A3A]" />
                209-308-9000
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 text-white font-bold text-[16px] lg:text-[21px]"
              >
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 text-[#D29A3A]" />
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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] text-white">
              <span>® All Rights Reserved</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="#" className="hover:text-[#D29A3A] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
