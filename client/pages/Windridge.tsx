import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Bath,
  Bed,
  Square,
  Mouse,
  Instagram,
} from "lucide-react";
import Header from "../components/Header";

export default function Windridge() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedElevation, setSelectedElevation] = useState("A");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const images = [
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbd78c7151fcc446b8c115111f9fcdcbf",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2d919ddeaf084b68a209eec777ec65b7",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-black mb-8">Windridge</h1>
            </div>
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="Windridge Home"
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Selector */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Choose Your Elevation
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSelectedElevation("A")}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                selectedElevation === "A"
                  ? "bg-brand-gold text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:border-brand-gold"
              }`}
            >
              Elevation A
            </button>
            <button
              onClick={() => setSelectedElevation("B")}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                selectedElevation === "B"
                  ? "bg-brand-gold text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:border-brand-gold"
              }`}
            >
              Elevation B
            </button>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Bed className="w-8 h-8 text-brand-gold mb-2" />
                <h3 className="text-xl font-bold text-gray-800">5 Bedrooms</h3>
              </div>
              <div className="flex flex-col items-center">
                <Bath className="w-8 h-8 text-brand-gold mb-2" />
                <h3 className="text-xl font-bold text-gray-800">
                  2.5 Bathrooms
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <Square className="w-8 h-8 text-brand-gold mb-2" />
                <h3 className="text-xl font-bold text-gray-800">
                  1,791 Sq. Ft.
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <Mouse className="w-8 h-8 text-brand-gold mb-2" />
                <h3 className="text-xl font-bold text-gray-800">
                  2 Car Garage
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Virtual Tour
          </h2>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://my.matterport.com/show/?m=example"
              width="100%"
              height="100%"
              allowFullScreen
              title="Windridge Virtual Tour"
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Floor Plan</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f"
            alt="Windridge Floor Plan"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Interested in Windridge?
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mt-1 mr-3"
                required
              />
              <p className="text-sm text-gray-600">
                I agree to be contacted about this home and future
                opportunities.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold text-white py-3 px-6 rounded-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Submit Interest
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc4fda5d5de5e4c6b86b95cf3a4a5b4c9"
              alt="Choice Valley Homes"
              className="h-16 mx-auto"
            />
          </div>

          <h3 className="text-gray-600 text-lg mb-6">
            Building communities throughout the Central Valley
          </h3>

          <div className="text-gray-600 mb-6">
            <p>For More Information about PASEO, Please Call or Text</p>
            <div className="mt-4">
              <p className="font-semibold">Stephanie Stine</p>
              <p>Community Sales Manager</p>
              <p>209-308-9000</p>
              <p>DRE# 02189834</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Hours</p>
              <p>Monday – Closed</p>
              <p>Tuesday – Saturday 10am – 5pm</p>
              <p>Sunday – 11am – 4pm</p>
            </div>
            <p className="mt-4">154 Montage Drive, Merced, CA 95348</p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-6">
            <a
              href="tel:209-308-9000"
              className="text-blue-600 hover:underline"
            >
              209-308-9000
            </a>
            <span>|</span>
            <a href="#" className="text-blue-600 hover:underline">
              Send Message
            </a>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="https://www.instagram.com/choicevalleyhomes/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center"
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

          <div className="text-gray-600 text-sm">
            <span>® All Rights Reserved</span>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
