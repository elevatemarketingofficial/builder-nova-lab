import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, MessageSquare, Instagram } from "lucide-react";
import Header from "../components/Header";

const PhotoCarouselSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbd78c7151fcc446b8c115111f9fcdcbf?format=webp&width=800",
      alt: "Mountain Top Property Photo 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2d919ddeaf084b68a209eec777ec65b7?format=webp&width=800",
      alt: "Mountain Top Property Photo 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2517353c548e4919a26112a2b4f30d44?format=webp&width=800",
      alt: "Mountain Top Property Photo 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F47e0c61d596c479c90a8bd567780633a?format=webp&width=800",
      alt: "Mountain Top Property Photo 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc9e494a60afc457180040420f0baa13e?format=webp&width=800",
      alt: "Mountain Top Property Photo 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc5df77972a6a406799ad8dbfeea47734?format=webp&width=800",
      alt: "Mountain Top Property Photo 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbdf13da033574467903dd806d975fc63?format=webp&width=800",
      alt: "Mountain Top Property Photo 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1b127c59c0e7498bae82711c7bb0e67b?format=webp&width=800",
      alt: "Mountain Top Property Photo 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fee9ecb91054948849c357a6497a49485?format=webp&width=800",
      alt: "Mountain Top Property Photo 9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fe1bb0dfd52c64a63980e749341ebabe4?format=webp&width=800",
      alt: "Mountain Top Property Photo 10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F65b1e6714de44f9f9a4f355db670c525?format=webp&width=800",
      alt: "Mountain Top Property Photo 11",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fce10db8337684bebac19135f1a5ea844?format=webp&width=800",
      alt: "Mountain Top Property Photo 12",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5ede63f918334b81b2649e2a5c402e02?format=webp&width=800",
      alt: "Mountain Top Property Photo 13",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F430340dc9c1b4a1399fda15f40f188da?format=webp&width=800",
      alt: "Mountain Top Property Photo 14",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fce72154715ed43b099746d2f6b861c27?format=webp&width=800",
      alt: "Mountain Top Property Photo 15",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F80d0ae544e1c443aa32c762b6532aab0?format=webp&width=800",
      alt: "Mountain Top Property Photo 16",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7e7fcca09acc4d4e8ef3cf1051494a7e?format=webp&width=800",
      alt: "Mountain Top Property Photo 17",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F3a886fb0484840fbbe85fce329543a7e?format=webp&width=800",
      alt: "Mountain Top Property Photo 18",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd5855a0aee64910bec8f846454d6c09?format=webp&width=800",
      alt: "Mountain Top Property Photo 19",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2f0be1d7c37b4bc2a0d52090ee5efdf0?format=webp&width=800",
      alt: "Mountain Top Property Photo 20",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb9b90be38db04952ac598008c5cdfb0d?format=webp&width=800",
      alt: "Mountain Top Property Photo 21",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6dd36ea356274468ba79672764cf92ad?format=webp&width=800",
      alt: "Mountain Top Property Photo 22",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4b1c1708f81b469c94c7a1cf5166a706?format=webp&width=800",
      alt: "Mountain Top Property Photo 23",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4e6a62e535e649629cb3c169bcde4b13?format=webp&width=800",
      alt: "Mountain Top Property Photo 24",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F271c3cff02324ee8b61aab52feac00ae?format=webp&width=800",
      alt: "Mountain Top Property Photo 25",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0fa9fb0ed9f44c40bcff132d7c5d82a0?format=webp&width=800",
      alt: "Mountain Top Property Photo 26",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F888f9117757b4a73b486a06e6944b77a?format=webp&width=800",
      alt: "Mountain Top Property Photo 27",
    },
  ];

  // Auto-advance carousel every 5 seconds by 1 image
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

  const visibleImages = carouselImages.slice(
    currentImageIndex,
    currentImageIndex + 3,
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="relative">
          <div className="grid grid-cols-3 gap-4">
            {visibleImages.map((image, index) => (
              <div key={currentImageIndex + index} className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 rounded-full p-4 z-10 transition-opacity duration-150"
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
              className="text-gray-700"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 rounded-full p-4 z-10 transition-opacity duration-150"
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
              className="text-gray-700"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default function MountainTop() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center">
            {/* Title */}
            <div className="flex-1" style={{ paddingLeft: "-3px" }}>
              <h1 className="text-[66px] font-bold text-black leading-tight">
                Mountain Top
              </h1>
            </div>

            {/* House Image */}
            <div className="flex-1 flex justify-center">
              <div
                className="w-[774px] h-[600px] bg-cover bg-center rounded-none"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb14cedd44f3a4aabbca5f88de8950019)",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Elevation Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white shadow-lg rounded-md flex overflow-hidden">
                <div className="bg-brand-gold text-white px-8 py-3">
                  <span className="text-xl font-normal">Elevation A</span>
                </div>
                <div className="bg-white text-brand-gold px-8 py-3 border border-l-0">
                  <span className="text-xl font-normal">Elevation B</span>
                </div>
              </div>
            </div>

            {/* Property Stats Grid */}
            <div className="grid grid-cols-4 gap-5 mb-12">
              {/* Bedrooms */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">🛏️</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">
                  Bedrooms
                </h3>
                <div className="text-brand-gold text-xl font-bold">4</div>
                <div className="text-brand-gold text-sm font-bold">
                  Plus Den/Office
                </div>
              </div>

              {/* Bathrooms */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">🚿</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">
                  Bathrooms
                </h3>
                <div className="text-brand-gold text-xl font-bold">3</div>
              </div>

              {/* Square Footage */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">📐</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">
                  Square Footage
                </h3>
                <div className="text-brand-gold text-lg font-bold">
                  1,874 sq. ft
                </div>
              </div>

              {/* Garage */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">🚗</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">
                  Garage
                </h3>
                <div className="text-brand-gold text-lg font-bold">
                  2 Car Tandem Garage
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-5xl mx-auto mb-8">
              <p className="text-[#3A4F66] text-xl leading-relaxed mb-6">
                Unique gets noticed. You will be impressed with this interior
                design. This 1874 sq ft home offers a beautiful kitchen, with
                the perfect amount of counter space and cabinets. With a living
                room perfect for entertaining or just relaxing you will also
                find the den/office space and a full bath. The second floor you
                will find 4 bedrooms and a loft with a perfect nook desk. Key
                features of this home are the master bedroom with a dual vanity
                and walk-in closet. Not to mention the convenient upstairs
                laundry unit. The Tandem 2 car garage offers creative
                opportunities to utilize the space.
              </p>
              <p className="text-[#3A4F66] text-xl">
                Call today to schedule a tour of the MOUNTAIN TOP home at Paseo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <h2 className="text-[30px] font-bold text-gray-800 mb-8">
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

          <div className="flex items-center justify-center mt-4 text-gray-600">
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

      {/* Photo Carousel Section */}
      <PhotoCarouselSection />

      {/* Floor Plan Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[34px] font-bold text-[#192A3D] mb-8">
              Floor Plan
            </h2>

            <div className="flex justify-center">
              <Link to="#" className="block">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5aa07476966d47a1ac0f904850b7b099"
                  alt="Mountain Top Floor Plan"
                  className="w-[1080px] h-[1080px] object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interest List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-[1290px]">
          <div className="bg-brand-gold rounded-lg p-8 flex items-center justify-between gap-6">
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
              className="bg-white text-black text-lg leading-[27px] px-10 py-4 hover:bg-gray-100 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-8 max-w-3xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                alt="Contact"
                className="w-28 h-28 rounded-full"
              />
            </div>
            <h2 className="text-[30px] font-bold text-gray-800">
              Get in Touch
            </h2>
          </div>

          <form>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full h-10 border-b border-gray-500 rounded px-3"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full h-10 border-b border-gray-500 rounded px-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-10 border-b border-gray-500 rounded px-3"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full h-10 border-b border-gray-500 rounded px-3"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-600 text-sm mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full border-b border-gray-500 rounded px-3 py-2 resize-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-600 text-sm mb-4">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start">
                <input type="checkbox" className="w-3 h-3 bg-blue-600 mt-1" />
                <div className="text-gray-600 text-sm leading-relaxed ml-3">
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
              className="bg-gray-500 text-white rounded px-12 py-3 text-sm font-medium mt-6 hover:bg-gray-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-8 max-w-4xl">
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
              <p className="text-gray-600 text-lg leading-relaxed">
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
              <p className="text-gray-600 text-lg leading-relaxed">
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

            <div className="flex justify-center items-center mb-8">
              <Link
                to="tel:209-308-9000"
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
                <span className="ml-2 font-bold">209-308-9000</span>
              </Link>
              <span className="text-gray-300 ml-4">|</span>
              <Link
                to="/contact"
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
                <span className="ml-2 font-bold">Send Message</span>
              </Link>
            </div>

            <div className="flex justify-center mb-8">
              <Link
                to="#"
                className="flex items-center justify-center bg-gray-800 text-white rounded-full w-12 h-12"
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
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </Link>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-20 h-24"
              />
            </div>

            <div className="flex justify-center items-center">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300 ml-2">|</span>
              <Link
                to="#"
                className="ml-2 hover:text-brand-gold transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
