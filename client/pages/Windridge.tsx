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
  const [activeElevation, setActiveElevation] = useState("A");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F8d754d93ed6b4d769f9396b208d801e0?format=webp&width=800",
      alt: "Windridge Property Photo 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F26d6e0a00ca84be696489e3562b9d3d1?format=webp&width=800",
      alt: "Windridge Property Photo 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F46873431e0b14edaaf51ca95187e678e?format=webp&width=800",
      alt: "Windridge Property Photo 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6d94af41982944f38b0bd5b8822e1732?format=webp&width=800",
      alt: "Windridge Property Photo 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fac919dc1b16c4d849632ea41daf59638?format=webp&width=800",
      alt: "Windridge Property Photo 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7aca70623e8f438ba429a48132c20f4d?format=webp&width=800",
      alt: "Windridge Property Photo 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc99931fd04004506a1fc69f621e6fb63?format=webp&width=800",
      alt: "Windridge Property Photo 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7630d12e5c40491496702d6a4614bdda?format=webp&width=800",
      alt: "Windridge Property Photo 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fec751fc4920340ceb2b385deabbf2c48?format=webp&width=800",
      alt: "Windridge Property Photo 9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F323cd95f293b4add88dc3228d00f8884?format=webp&width=800",
      alt: "Windridge Property Photo 10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5e0fed1ef0124e30a1cb3323979a7ca1?format=webp&width=800",
      alt: "Windridge Property Photo 11",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2dc7f8d7c5c34e0eb9d2d81815eac0a1?format=webp&width=800",
      alt: "Windridge Property Photo 12",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F9adc9f0d50a34579a3c69e6a07c68c15?format=webp&width=800",
      alt: "Windridge Property Photo 13",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa0463b8adb584db5b831811ca7c3702e?format=webp&width=800",
      alt: "Windridge Property Photo 14",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F64422394660a4bfabe916c67c5911fec?format=webp&width=800",
      alt: "Windridge Property Photo 15",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdf744396fe1b4a859b6987e0b67f788b?format=webp&width=800",
      alt: "Windridge Property Photo 16",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F00e7d666cf294451bb46c0a209b805ba?format=webp&width=800",
      alt: "Windridge Property Photo 17",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdeb15197d54f4f25a6d3e68895723672?format=webp&width=800",
      alt: "Windridge Property Photo 18",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ffcb7592283f2407db9c05e1adc3d8b5e?format=webp&width=800",
      alt: "Windridge Property Photo 19",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F98fbaa07d8e2455b9ff3f22d12c79603?format=webp&width=800",
      alt: "Windridge Property Photo 20",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc6cb74ccb5da4b919aea0db0eed6979c?format=webp&width=800",
      alt: "Windridge Property Photo 21",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc173649ce97b49d0bf883ddaaa53fdcb?format=webp&width=800",
      alt: "Windridge Property Photo 22",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0996b4945b22462ebaa7c428b48f8874?format=webp&width=800",
      alt: "Windridge Property Photo 23",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1d7b9c7a73f40a4a8d853321a76a6ae?format=webp&width=800",
      alt: "Windridge Property Photo 24",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb124adaab0da448496d6efdbe0a4d998?format=webp&width=800",
      alt: "Windridge Property Photo 25",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdef03c24caa847b69c6ff561ccff6ddb?format=webp&width=800",
      alt: "Windridge Property Photo 26",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Faa1f67c58b034777aa41b11beb767258?format=webp&width=800",
      alt: "Windridge Property Photo 27",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7f9b76278ed44ff0a76ae953f2a56c3c?format=webp&width=800",
      alt: "Windridge Property Photo 28",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F423f48a3661c477cba81fabf4f329a1f?format=webp&width=800",
      alt: "Windridge Property Photo 29",
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
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa732e5f5f52842c7844bf2d1af96c10f"
                alt="Windridge Home"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg flex overflow-hidden">
            <button
              onClick={() => setActiveElevation("A")}
              className={`px-8 py-3 text-lg font-normal ${
                activeElevation === "A"
                  ? "bg-brand-gold text-white"
                  : "bg-white text-brand-gold hover:bg-gray-50"
              } transition-colors`}
            >
              Elevation A
            </button>
            <button
              onClick={() => setActiveElevation("B")}
              className={`px-8 py-3 text-lg font-normal ${
                activeElevation === "B"
                  ? "bg-brand-gold text-white"
                  : "bg-white text-brand-gold hover:bg-gray-50"
              } transition-colors`}
            >
              Elevation B
            </button>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Bedrooms */}
            <div className="bg-orange-50 p-8 text-center">
              <div className="flex justify-center mb-4">
                <Bed className="w-12 h-12 text-brand-gold" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">
                Bedrooms
              </h3>
              <div className="text-2xl font-bold text-brand-gold">5</div>
              <div className="text-sm font-bold text-brand-gold">
                including main floor bedroom
              </div>
            </div>

            {/* Bathrooms */}
            <div className="bg-orange-50 p-8 text-center">
              <div className="flex justify-center mb-4">
                <Bath className="w-12 h-12 text-brand-gold" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">
                Bathrooms
              </h3>
              <div className="text-2xl font-bold text-brand-gold">2.5</div>
            </div>

            {/* Square Footage */}
            <div className="bg-orange-50 p-8 text-center">
              <div className="flex justify-center mb-4">
                <Square className="w-12 h-12 text-brand-gold" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">
                Square Footage
              </h3>
              <div className="text-xl font-bold text-brand-gold">
                1,791 sq. ft
              </div>
            </div>

            {/* Garage */}
            <div className="bg-orange-50 p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 text-brand-gold flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9 9 12 5.16-3 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">
                Garage
              </h3>
              <div className="text-xl font-bold text-brand-gold">
                2 Car Tandem Garage
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience this home that is modern, warmly welcoming and
              tastefully designed. This floorplan was designed for those with
              the preference of having a bedroom and bathroom on the main floor.
              Also on the first floor you are met with a well- appointed kitchen
              featuring plenty of cabinet space and a pantry. On the second
              floor you will find a spacious owner's suite with a walk-in closet
              and dual vanity. The additional 4 bedrooms, 2 full baths and
              laundry room are also conveniently located on the second floor.
            </p>
            <p className="text-xl text-gray-600">
              Call today to schedule a tour of the Windridge home at Paseo!
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Virtual Tour
          </h2>
          <div className="flex flex-col relative mt-5">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe src="https://app.lapentor.com/sphere/1791-a" frameborder="0" width="100%" height="500px" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>',
              }}
            />
          </div>
          <div className="flex items-center justify-center mt-4 text-gray-600">
            <Mouse className="w-4 h-4 mr-2" />
            <span>Use mouse to drag and scroll to zoom</span>
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

      {/* Floor Plan Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Floor Plan</h2>
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6f8ba2420d6c408c9983964736738fa7"
              alt="Windridge Floor Plan"
              className="max-w-4xl w-full h-auto"
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="w-full h-10 px-3 border-b border-gray-500 rounded bg-white focus:border-brand-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded bg-white focus:border-brand-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded bg-white focus:border-brand-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded bg-white focus:border-brand-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-3 py-2 border-b border-gray-500 rounded bg-white focus:border-brand-gold focus:outline-none resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-4">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="w-3 h-3 bg-blue-600 mt-1" />
                <div className="text-sm text-gray-600 leading-relaxed">
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
              className="bg-gray-500 text-white px-12 py-3 rounded text-sm font-medium hover:bg-gray-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                alt="Choice Valley Homes Logo"
                className="h-24 w-auto"
              />
            </div>

            <h3 className="text-3xl text-gray-600 mb-8 px-4">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-gray-600 mb-8">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
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
              <p className="text-lg text-gray-600 leading-relaxed">
                <span>Hours</span>
                <br />
                <span>Monday – Closed</span>
                <br />
                <span>Tuesday – Saturday 10am – 5pm</span>
                <br />
                <span>Sunday – 11am – 4pm</span>
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>

            <div className="flex justify-center items-center space-x-4 mb-8">
              <a
                href="tel:209-308-9000"
                className="flex items-center text-lg font-bold space-x-2"
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
                  className="text-brand-gold"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>209-308-9000</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/contact"
                className="flex items-center text-xl font-bold space-x-2"
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
                  className="text-brand-gold"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Send Message</span>
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

            <div className="flex justify-center items-center space-x-2 text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300">|</span>
              <Link
                to="/privacy"
                className="hover:text-brand-gold transition-colors"
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
