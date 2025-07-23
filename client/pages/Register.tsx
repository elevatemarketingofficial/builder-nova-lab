import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Instagram } from "lucide-react";
import Header from "../components/Header";

export default function Register() {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [formData, setFormData] = useState({
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    zipCode: "",
    timeframe: "",
  });

  const models = [
    {
      id: "1691",
      name: "1691",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78",
    },
    {
      id: "1724",
      name: "1724",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a",
    },
    {
      id: "1794",
      name: "1794",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f",
    },
    {
      id: "1874",
      name: "1874",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { selectedModel, ...formData });
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] sm:h-[500px] lg:h-[690px] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff6b9bad3bd5743f58ef87414df684e73') lightgray 0px 0px / 100% 156.522% no-repeat",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-[36px] sm:text-[50px] lg:text-[67px] font-bold leading-tight mb-6">
            Register Your Interest
          </h1>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
            Stay in the know about upcoming events, exclusive new home releases,
            builder incentives, and more.
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Model Selection */}
            <div>
              <label className="block text-[18px] font-bold text-brand-dark-blue mb-6">
                What model are you interested in?{" "}
                <span className="text-red-500">*</span>
              </label>

              {/* Model Options Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-4 border-2 rounded-lg transition-colors ${
                      selectedModel === model.id
                        ? "border-brand-gold bg-brand-gold bg-opacity-10"
                        : "border-gray-300 hover:border-brand-gold"
                    }`}
                  >
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <span className="text-[16px] font-medium text-brand-dark-blue">
                      {model.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                Tell us more about your interest
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                placeholder="Share any specific questions or requirements..."
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[16px] font-medium text-brand-dark-blue mb-2">
                  Timeframe for Purchase
                </label>
                <select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                >
                  <option value="">When are you looking to buy?</option>
                  <option value="immediate">Immediate (0-3 months)</option>
                  <option value="short-term">Short-term (3-6 months)</option>
                  <option value="medium-term">Medium-term (6-12 months)</option>
                  <option value="long-term">Long-term (12+ months)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-brand-gold text-white px-12 py-4 rounded-sm text-[16px] font-medium hover:bg-opacity-90 transition-colors"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-light-gray py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc4fda5d5de5e4c6b86b95cf3a4a5b4c9"
                alt="Choice Valley Homes"
                className="h-[60px] lg:h-[80px]"
              />
            </div>

            <h3 className="text-[#3A4F66] text-[24px] lg:text-[30px] leading-tight px-4">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-[#3A4F66] text-[16px]">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="space-y-4">
              <div className="text-[#3A4F66] text-[16px] lg:text-[18px]">
                <div className="font-bold">Stephanie Stine</div>
                <div>Community Sales Manager</div>
                <div>209-308-9000</div>
                <div>DRE# 02189834</div>
              </div>

              <div className="text-[#3A4F66] text-[16px]">
                <div className="font-bold">Hours</div>
                <div>Monday – Closed</div>
                <div>Tuesday – Saturday 10am – 5pm</div>
                <div>Sunday – 11am – 4pm</div>
              </div>
            </div>

            <p className="text-[#3A4F66] text-[16px]">
              154 Montage Drive, Merced, CA 95348
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="https://www.instagram.com/choicevalleyhomes/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-20 h-24"
              />
            </div>

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
