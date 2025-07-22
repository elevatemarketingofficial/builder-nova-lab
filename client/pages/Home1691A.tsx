import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const Home1691A = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    acceptTerms: false,
  });

  // Carousel state for property images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images with the provided 24 URLs
  const carouselImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ffd967d8db433476e9da2662709b98ee0?format=webp&width=800",
      alt: "Oceanside Property Photo 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ffa40aa04d20942828963f9879cdb6239?format=webp&width=800",
      alt: "Oceanside Property Photo 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4b27242d10b74967a266537a53a319ce?format=webp&width=800",
      alt: "Oceanside Property Photo 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb2e64a453dc04401a050250d01cd9eb5?format=webp&width=800",
      alt: "Oceanside Property Photo 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F12113bbd9b1a4d17b37483d92ed5dcd1?format=webp&width=800",
      alt: "Oceanside Property Photo 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F58917eca56c24a79b2b01a03e676d5ef?format=webp&width=800",
      alt: "Oceanside Property Photo 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5417095c189b435f91184d9a115a586f?format=webp&width=800",
      alt: "Oceanside Property Photo 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1e9d75367f49449a9a8ecb1a760f0fca?format=webp&width=800",
      alt: "Oceanside Property Photo 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa6b7bafbd20c4d47a265878f366a9531?format=webp&width=800",
      alt: "Oceanside Property Photo 9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F60372f828b3e44479256b84149545805?format=webp&width=800",
      alt: "Oceanside Property Photo 10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F44165155746643c6983881db7dc49247?format=webp&width=800",
      alt: "Oceanside Property Photo 11",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb28b9ca38e574a75baa5df1b71bd3cf1?format=webp&width=800",
      alt: "Oceanside Property Photo 12",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2d9f03bcb9df44fc956877329645cec8?format=webp&width=800",
      alt: "Oceanside Property Photo 13",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc89ced8bfa48404996dca794ba7c6116?format=webp&width=800",
      alt: "Oceanside Property Photo 14",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fe8d89f650d4342538134aaee1bc94c39?format=webp&width=800",
      alt: "Oceanside Property Photo 15",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc95fceab0cf545a09b81711fa419bf1b?format=webp&width=800",
      alt: "Oceanside Property Photo 16",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6a869c72d72745a9913bd863de003832?format=webp&width=800",
      alt: "Oceanside Property Photo 17",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F500b298f578f407f991fe09b17563c5b?format=webp&width=800",
      alt: "Oceanside Property Photo 18",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F532da2a889c744d696e50e500a004da6?format=webp&width=800",
      alt: "Oceanside Property Photo 19",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Faf879962418145a6a2dd95dc0029cc9c?format=webp&width=800",
      alt: "Oceanside Property Photo 20",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb18cc3320bff4092b82e78fd2c5131a0?format=webp&width=800",
      alt: "Oceanside Property Photo 21",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0208fa94b1f4427089953e3d6b56454a?format=webp&width=800",
      alt: "Oceanside Property Photo 22",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fe99a1897b904401b926ffea0f86e2715?format=webp&width=800",
      alt: "Oceanside Property Photo 23",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F63f3e9ffecc24e2198fb40e18b625874?format=webp&width=800",
      alt: "Oceanside Property Photo 24",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

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

      {/* Hero Section */}
      <section className="bg-[#EDEDED] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3">
              <h1 className="text-6xl lg:text-7xl font-bold text-black">
                Oceanside
              </h1>
            </div>
            <div className="lg:w-2/3 relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2a8d4d259f674bd791d94eb6062a85ce"
                alt="Oceanside home exterior"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Selector */}
      <section className="relative -mt-6 mb-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="bg-white rounded shadow-lg flex">
            <button className="bg-brand-gold text-white px-8 py-3 rounded-l text-xl">
              Elevation A
            </button>
            <button className="bg-white text-brand-gold px-8 py-3 rounded-r text-xl border-l">
              Elevation B
            </button>
          </div>
        </div>
      </section>

      {/* Home Specifications */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Bedrooms */}
            <div className="bg-[#F9F5F0] p-6 text-center">
              <div className="text-4xl text-brand-gold mb-4">🛏️</div>
              <h3 className="text-sm font-bold text-brand-dark-blue uppercase mb-2">
                Bedrooms
              </h3>
              <p className="text-xl font-bold text-brand-gold">4</p>
            </div>

            {/* Bathrooms */}
            <div className="bg-[#F9F5F0] p-6 text-center">
              <div className="text-4xl text-brand-gold mb-4">🚿</div>
              <h3 className="text-sm font-bold text-brand-dark-blue uppercase mb-2">
                Bathrooms
              </h3>
              <p className="text-xl font-bold text-brand-gold">2.5</p>
            </div>

            {/* Square Footage */}
            <div className="bg-[#F9F5F0] p-6 text-center">
              <div className="text-4xl text-brand-gold mb-4">📐</div>
              <h3 className="text-sm font-bold text-brand-dark-blue uppercase mb-2">
                Square Footage
              </h3>
              <p className="text-xl font-bold text-brand-gold">1,691 sq. ft</p>
            </div>

            {/* Garage */}
            <div className="bg-[#F9F5F0] p-6 text-center">
              <div className="text-4xl text-brand-gold mb-4">🚗</div>
              <h3 className="text-sm font-bold text-brand-dark-blue uppercase mb-2">
                Garage
              </h3>
              <p className="text-xl font-bold text-brand-gold">2 Car Garage</p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-xl text-brand-text-gray leading-relaxed mb-6">
              This two-story single-family home welcomes you to an open floor
              concept. With sightlines from the kitchen to the dining and the
              living room you will find this layout perfect for entertaining.
              The second floor is where you will find 3 bedrooms, 2 full
              bathroom, a masters suite and laundry room. The master suite
              provides you with a spacious walk-in closet, dual vanity and
              beautiful countertops. If you're looking for a little extra
              storage this wider garage is perfect.
            </p>
            <p className="text-xl text-brand-text-gray">
              Call today to schedule a tour of the Oceanside home at Paseo!
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">
              Virtual Tour (360)
            </h2>
            <p className="text-brand-text-gray flex items-center justify-center gap-2">
              <span>📱</span>
              Use mouse to drag and scroll to zoom
            </p>
          </div>

          <div className="flex flex-col relative mt-5">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe src="https://app.lapentor.com/sphere/1791-a" frameborder="0" width="100%" height="500px" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>',
              }}
            />
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 hover:bg-opacity-100 p-4 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 hover:bg-opacity-100 p-4 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-8">
            Floor Plan
          </h2>
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4c288fe755f94715a66181b6c684e201"
              alt="Floor plan for 1691 home"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Join Interested List */}
      <section className="py-12">
        <div className="max-w-[1290px] mx-auto px-4">
          <div className="flex items-center bg-brand-gold rounded-lg gap-6 justify-between p-8">
            <div className="text-left">
              <h2 className="text-white text-[32px] font-bold leading-[35px] mb-4">
                Join the
                <br />
                Interested List
              </h2>
              <p className="text-white leading-[26.4px] max-w-[540px]">
                Sign-up to stay in the loop with new home releases, builder
                incentives, special events & more!
              </p>
            </div>
            <Link
              to="/register"
              className="bg-white text-black text-lg leading-[27px] transition-all duration-150 ease-in-out py-4 px-10"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                alt="Contact"
                className="w-28 h-28 rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border-b border-gray-500 rounded h-10 px-3"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border-b border-gray-500 rounded h-10 px-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b border-gray-500 rounded h-10 px-3"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border-b border-gray-500 rounded h-10 px-3"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-600 mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full border-b border-gray-500 rounded p-2 px-3 resize-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-600 mb-4">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="bg-blue-600 block w-3 h-3 mt-1 overflow-visible"
                />
                <div className="text-sm text-gray-600 leading-[23px] ml-3">
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
              className="bg-gray-500 text-white text-sm font-medium leading-5 mt-6 transition-all duration-150 ease-in-out rounded px-12 py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                alt="Choice Valley Homes Logo"
                className="h-24"
              />
            </div>
            <h3 className="text-gray-600 text-3xl leading-9 mb-8 px-4">
              Building communities throughout the Central Valley
            </h3>
            <p className="text-gray-600 mb-8">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-[29px]">
                Stephanie Stine
                <br />
                Community Sales Manager
                <br />
                209-308-9000
                <br />
                DRE# 02189834
              </p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-[29px]">
                Hours
                <br />
                Monday – Closed
                <br />
                Tuesday – Saturday 10am – 5pm
                <br />
                Sunday – 11am – 4pm
              </p>
            </div>
            <p className="text-gray-600 text-lg leading-7 mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>
            <div className="flex items-center justify-center mb-8">
              <a
                href="tel:209-308-9000"
                className="flex items-center text-lg font-bold leading-7"
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
                  className="text-brand-gold w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="ml-2">209-308-9000</span>
              </a>
              <span className="text-gray-300 ml-4">|</span>
              <a
                href="/contact"
                className="flex items-center text-xl font-bold leading-7 ml-4"
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
                  className="text-brand-gold w-5 h-5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="ml-2">Send Message</span>
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <a
                href="https://www.instagram.com/choicevalleyhomes/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white w-12 h-12 justify-center rounded-full"
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
            <div className="flex items-center justify-center text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300 ml-2">|</span>
              <a
                href="#"
                className="ml-2 transition-all duration-150 ease-in-out"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home1691A;
