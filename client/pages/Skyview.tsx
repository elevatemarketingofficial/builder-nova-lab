import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, MessageSquare, Home } from "lucide-react";
import Header from "../components/Header";

const PhotoCarouselSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5bb85330dae74c2bba136c7a6f69c8be?format=webp&width=800",
      alt: "Skyview Property Photo 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F327c51f784bf42298cc5f617f48ef412?format=webp&width=800",
      alt: "Skyview Property Photo 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F882bc128bba844de822ea465bdaa14e8?format=webp&width=800",
      alt: "Skyview Property Photo 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F42b1cbcef69d41c3b064a36fb86bc777?format=webp&width=800",
      alt: "Skyview Property Photo 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc5f2dee1c05b4e04be6b080898ee7879?format=webp&width=800",
      alt: "Skyview Property Photo 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F021dd80773e445a08cb5b185c9cf877e?format=webp&width=800",
      alt: "Skyview Property Photo 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5856abe53335488f9224a17f450e092b?format=webp&width=800",
      alt: "Skyview Property Photo 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F04cceae3c0b64da8b3ab096e0f9c49d1?format=webp&width=800",
      alt: "Skyview Property Photo 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4506630d17ca439ca2e435145de53589?format=webp&width=800",
      alt: "Skyview Property Photo 9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F709c2c347e2247dab5a834d63673fa92?format=webp&width=800",
      alt: "Skyview Property Photo 10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5b3d31a1478346f3815aa29671b42fbc?format=webp&width=800",
      alt: "Skyview Property Photo 11",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F94047416a0a54b0982f8e997f0cb50b9?format=webp&width=800",
      alt: "Skyview Property Photo 12",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ffdc7e23dcffe436aa9a864328944e5f0?format=webp&width=800",
      alt: "Skyview Property Photo 13",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F3f4d8ffb72a04d9a901735083187fc17?format=webp&width=800",
      alt: "Skyview Property Photo 14",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fcd5aa9c9cc5f477d8a1414c4b7b2bc3d?format=webp&width=800",
      alt: "Skyview Property Photo 15",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc58e2aa6a5d14d05bf050cbcf759c0dc?format=webp&width=800",
      alt: "Skyview Property Photo 16",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F92752a9976e045b38058b42c53440000?format=webp&width=800",
      alt: "Skyview Property Photo 17",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F94c63e415d194178a50a5337850b2616?format=webp&width=800",
      alt: "Skyview Property Photo 18",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5b13a9dededa45468c23ea9272ec7168?format=webp&width=800",
      alt: "Skyview Property Photo 19",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0d83ac448f2c4a65ba959902f1690cb3?format=webp&width=800",
      alt: "Skyview Property Photo 20",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7a0a87fb796d4feea801d57c0a85b0a4?format=webp&width=800",
      alt: "Skyview Property Photo 21",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F85fff8d79dac4d83a1d96679674a4d3e?format=webp&width=800",
      alt: "Skyview Property Photo 22",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb1ca4cd604a244dfb2fe9515c5a5ca27?format=webp&width=800",
      alt: "Skyview Property Photo 23",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbe9e5fd419ef47bfb02d20a884d261a1?format=webp&width=800",
      alt: "Skyview Property Photo 24",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2575d5739133437ab6823e5d29400ed1?format=webp&width=800",
      alt: "Skyview Property Photo 25",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F13e7961b2eec43beab8973ad69d670ac?format=webp&width=800",
      alt: "Skyview Property Photo 26",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc72377bc784447949a9487cc4808dace?format=webp&width=800",
      alt: "Skyview Property Photo 27",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa53eee6de7994d4ebeac34b5af0ac3bb?format=webp&width=800",
      alt: "Skyview Property Photo 28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F9b8e85764cb249ee96327e34cccdaabe?format=webp&width=800",
      alt: "Skyview Property Photo 29",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F81834af5d318440e9220b2c542047aca?format=webp&width=800",
      alt: "Skyview Property Photo 30",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F254a4bd2ff7f4bf8974d9bea3c761a16?format=webp&width=800",
      alt: "Skyview Property Photo 31",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2b7e4781a6e448238e6f920cb53925e2?format=webp&width=800",
      alt: "Skyview Property Photo 32",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F60fd7f4ac15a4225bdbee87e31e99e48?format=webp&width=800",
      alt: "Skyview Property Photo 33",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1411acd414114eb094c602f27e8b3e38?format=webp&width=800",
      alt: "Skyview Property Photo 34",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F8136b431ccf348538e830318d08998ef?format=webp&width=800",
      alt: "Skyview Property Photo 35",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc9bf03259a2c4f68a3974880fd8a252a?format=webp&width=800",
      alt: "Skyview Property Photo 36",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= carouselImages.length - 2 ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= carouselImages.length - 2 ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? carouselImages.length - 3 : nextIndex;
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="relative">
          <div className="grid grid-cols-3 gap-4">
            {carouselImages
              .slice(currentImageIndex, currentImageIndex + 3)
              .map((image, index) => (
                <div key={currentImageIndex + index} className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-colors z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-700"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-colors z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-700"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Skyview() {
  const [activeElevation, setActiveElevation] = useState("A");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-[#EDEDED] py-12 lg:py-16">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Heading */}
              <div className="text-center lg:text-left">
                <h1 className="text-[64px] font-bold text-black leading-[68px] mb-8">
                  Skyview
                </h1>
              </div>

              {/* Hero Image */}
              <div className="relative w-full lg:w-[774px] h-[600px] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a"
                  alt="Skyview home exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Elevation Selector */}
        <section className="relative -mt-6 z-10">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg flex overflow-hidden">
                <button
                  onClick={() => setActiveElevation("A")}
                  className={`px-8 py-3 font-normal text-[21px] transition-colors ${
                    activeElevation === "A"
                      ? "bg-[#D29A3A] text-white"
                      : "bg-white text-[#D29A3A] hover:bg-gray-50"
                  }`}
                >
                  Elevation A
                </button>
                <button
                  onClick={() => setActiveElevation("B")}
                  className={`px-8 py-3 font-normal text-[21px] transition-colors ${
                    activeElevation === "B"
                      ? "bg-[#D29A3A] text-white"
                      : "bg-white text-[#D29A3A] hover:bg-gray-50"
                  }`}
                >
                  Elevation B
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Bedrooms */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">🛏️</div>
                <h3 className="text-[#192A3D] text-[15px] font-bold uppercase mb-2">
                  Bedrooms
                </h3>
                <p className="text-[#D29A3A] text-[20px] font-bold">4</p>
              </div>

              {/* Bathrooms */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">🚿</div>
                <h3 className="text-[#192A3D] text-[15px] font-bold uppercase mb-2">
                  Bathrooms
                </h3>
                <p className="text-[#D29A3A] text-[19px] font-bold">2.5</p>
              </div>

              {/* Square Footage */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">📐</div>
                <h3 className="text-[#192A3D] text-[15px] font-bold uppercase mb-2">
                  Square Footage
                </h3>
                <p className="text-[#D29A3A] text-[20px] font-bold">
                  1,724 sq. ft
                </p>
              </div>

              {/* Garage */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">🚗</div>
                <h3 className="text-[#192A3D] text-[16px] font-bold uppercase mb-2">
                  Garage
                </h3>
                <p className="text-[#D29A3A] text-[21px] font-bold">
                  2 Car Garage
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-[1266px] mx-auto mb-8">
              <p className="text-[#3A4F66] text-[21px] leading-[34.65px] mb-6">
                This inviting two-story home provides a foyer that leads to an
                open floorplan with a spacious living room, dining area and half
                bath designed for convenience and perfect for gatherings. The
                kitchen features a walk-in pantry, granite countertops and
                plenty of cabinet space. The second floor you are met with the
                laundry room, 3 bedrooms, a full bath and a luxurious owner's
                suite that offers beautiful dual vanities.
              </p>
              <p className="text-[#3A4F66] text-[21px] leading-[34.65px]">
                Call today to schedule a tour of the SKYVIEW home at Paseo!
              </p>
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1280px] mx-auto px-8">
            <h2 className="text-gray-800 text-[30px] font-bold leading-9 mb-8">
              Virtual Tour
            </h2>
            <div className="flex flex-col relative mt-5">
              <div>
                <iframe
                  src="https://app.lapentor.com/sphere/1791-a"
                  frameBorder="0"
                  width="100%"
                  height="500px"
                  scrolling="no"
                  allow="vr,gyroscope,accelerometer"
                  allowFullScreen={true}
                  className="w-full h-[500px]"
                />
              </div>
            </div>
            <div className="flex items-center text-gray-600 justify-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <rect x="5" y="2" width="14" height="20" rx="7" />
                <path d="M12 6v4" />
              </svg>
              <span>Use mouse to drag and scroll to zoom</span>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <PhotoCarouselSection />

        {/* Floor Plan */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <h2 className="text-[#192A3D] text-[34px] font-bold mb-8">
              Floor Plan
            </h2>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fceaae636b948446caa7266921478ef25"
                alt="Skyview floor plan"
                className="max-w-[1080px] w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Join Interest List */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="bg-[#D29A3A] rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-white text-[32px] font-bold leading-[35px] mb-4">
                  Join the
                  <br />
                  Interested List
                </h2>
                <p className="text-white text-[16px] leading-[26.4px] max-w-[540px]">
                  Sign-up to stay in the loop with new home releases, builder
                  incentives, special events & more!
                </p>
              </div>
              <Link
                to="/register"
                className="bg-white text-black px-10 py-4 text-[18px] font-normal hover:bg-gray-100 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <section className="bg-white py-24">
        <div className="max-w-[768px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                alt="Contact"
                className="w-[112px] h-[112px] rounded-full"
              />
            </div>
            <h2 className="text-gray-800 text-[30px] font-bold leading-9">
              Get in Touch
            </h2>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-[14px] leading-5 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full h-[40px] border-b border-gray-500 rounded px-3"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-[14px] leading-5 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full h-[40px] border-b border-gray-500 rounded px-3"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-600 text-[14px] leading-5 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-[40px] border-b border-gray-500 rounded px-3"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-[14px] leading-5 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full h-[40px] border-b border-gray-500 rounded px-3"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-600 text-[14px] leading-5 mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full border-b border-gray-500 rounded px-3 py-2 resize-none"
              />
            </div>
            <div className="mt-6">
              <label className="block text-gray-600 text-[14px] leading-5 mb-4">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start">
                <input type="checkbox" className="w-3 h-3 bg-blue-600 mt-1" />
                <div className="text-gray-600 text-[14px] leading-[23px] ml-3">
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
              className="bg-gray-500 text-white text-[14px] font-medium leading-5 mt-6 rounded px-12 py-3 hover:bg-opacity-90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-[1024px] mx-auto px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                alt="Choice Valley Homes Logo"
                className="h-24"
              />
            </div>
            <h3 className="text-gray-600 text-[30px] leading-9 mb-8 px-4">
              Building communities throughout the Central Valley
            </h3>
            <p className="text-gray-600 mb-8">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="mb-8">
              <p className="text-gray-600 text-[18px] leading-[29px]">
                <span>Stephanie Stine</span>
                <br />
                <span>Community Sales Manager</span>
                <br />
                <span>209-308-9000</span>
                <br />
                <span>DRE# 02189834</span>
              </p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600 text-[18px] leading-[29px]">
                <span>Hours</span>
                <br />
                <span>Monday – Closed</span>
                <br />
                <span>Tuesday – Saturday 10am – 5pm</span>
                <br />
                <span>Sunday – 11am – 4pm</span>
              </p>
            </div>
            <p className="text-gray-600 text-[18px] leading-7 mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>
            <div className="flex items-center justify-center mb-8">
              <a
                href="tel:209-308-9000"
                className="flex items-center text-[18px] font-bold leading-7"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#D29A3A] mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-bold ml-2">209-308-9000</span>
              </a>
              <span className="text-gray-300 ml-4">|</span>
              <a
                href="/contact"
                className="flex items-center text-[20px] font-bold leading-7 ml-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#D29A3A] mr-2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="font-bold ml-2">Send Message</span>
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-20 h-24"
              />
            </div>
            <div className="flex items-center justify-center text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300 ml-2">|</span>
              <a
                href="#"
                className="ml-2 hover:text-[#D29A3A] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
