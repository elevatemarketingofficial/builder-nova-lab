import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
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
        "https://api.builder.io/api/v1/image/assets/TEMP/1c15f03cde79434616e878a1ca5ea11dcf3bf138?width=400",
    },
    {
      id: "1724",
      name: "1724",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4dd70e36ddd2d2e5f03811954d0ab82c390815d2?width=400",
    },
    {
      id: "1794",
      name: "1794",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/717885aed07a142a4d98a0b9821420926e5452cd?width=400",
    },
    {
      id: "1874",
      name: "1874",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2f4b03399c084d7ddddcb8d1fd0163459de6b9ea?width=400",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        className="relative h-[496px] w-full"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F11df0f1a4b66417c8ae95d480b3d7ec4')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white h-full flex items-center justify-center">
          <h1 className="text-[36px] sm:text-[50px] lg:text-[67px] font-bold leading-tight">
            JOIN THE INTEREST LIST
          </h1>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Model Selection */}
            <div>
              <h2 className="text-[24px] font-bold text-brand-dark-blue mb-6">
                Which Home Model Interests You?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      selectedModel === model.id
                        ? "border-brand-gold bg-brand-gold/10"
                        : "border-gray-300 hover:border-brand-gold"
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-center font-medium">{model.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[15px] text-brand-medium-blue mb-2">
                Tell us more about your interest
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-white border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-brand-gold resize-none"
                placeholder="What draws you to this community? Any specific features you're looking for?"
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 bg-white border border-gray-300 rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 bg-white border border-gray-300 rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 bg-white border border-gray-300 rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 bg-white border border-gray-300 rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border border-gray-300 rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Timeframe for Purchase
                </label>
                <select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border border-gray-300 rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                >
                  <option value="">Select timeframe...</option>
                  <option value="immediate">Immediate (0-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-brand-gold text-white px-12 py-3 text-[15px] font-medium rounded-sm hover:bg-opacity-90 transition-colors"
              >
                Join Interest List
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
