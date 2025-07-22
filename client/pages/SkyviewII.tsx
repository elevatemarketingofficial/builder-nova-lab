import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import {
  Bed,
  Bath,
  Square,
  ChevronLeft,
  ChevronRight,
  X,
  Instagram,
} from "lucide-react";
import Navigation from "../components/Navigation";
=======
import { Bed, Bath, Square, ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "../components/Header";
>>>>>>> 580d9099657e8fa7c42b47ccbd6fe4713cf328ba

export default function SkyviewII() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbbaf452c60f347a0ada53924ec150db3",
      alt: "Skyview II Photo 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F407be3e1c0294a30a83420af811bafb8",
      alt: "Skyview II Photo 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fee2dc49c9fd64e31babc6728509ffaec",
      alt: "Skyview II Photo 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F60e6d21ecd194a5bba391887cbdb3ffa",
      alt: "Skyview II Photo 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7772d34bff43488bb5ec7a0d55754049",
      alt: "Skyview II Photo 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40230ba56e54408ab2d5722b865287d6",
      alt: "Skyview II Photo 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff7871cd519be42e28a322a951b06ef71",
      alt: "Skyview II Photo 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc99de7a0969e4c82a0a75980f8f8c419",
      alt: "Skyview II Photo 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7bfd22a67f694dc6a76e64c0d519ec10",
      alt: "Skyview II Photo 9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1c115d2145034afbbad51d7ce220326c",
      alt: "Skyview II Photo 10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F14a86578dd55483f9277732307f1de73",
      alt: "Skyview II Photo 11",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ffca6381f7eba4b23ad7248d17741ffdb",
      alt: "Skyview II Photo 12",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F3113e71f456f4d18ba5805ec3c8e7fa9",
      alt: "Skyview II Photo 13",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F8e2115827972422cab02bebb67799847",
      alt: "Skyview II Photo 14",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6a85c84e926f45b2a3afa874e123776a",
      alt: "Skyview II Photo 15",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F05fe48746d7949f0afd30954888c233c",
      alt: "Skyview II Photo 16",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F052c5f125d1641fa8de214ff17358ead",
      alt: "Skyview II Photo 17",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6249ac39828f48788ba339a4bd4d0fe9",
      alt: "Skyview II Photo 18",
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[379px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5cb4d10da7e44618bf3889b413cca06d)`,
            backgroundColor: "rgba(79, 21, 21, 1)",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-[77px] font-bold leading-[80px] mb-4">
              Skyview II
            </h1>
          </div>
        </section>

        {/* Info Section */}
        <section className="relative -mt-[25px] z-20 flex justify-center px-4">
          <div className="bg-white rounded-[5px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.17)] px-[60px] py-[60px] max-w-[1270px] w-full">
            <div className="flex items-center justify-center gap-8">
              {/* 4 Bedrooms */}
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-brand-gold" />
                <span className="text-[17px] font-bold text-black">
                  4 Bedrooms
                </span>
              </div>

              {/* Divider */}
              <div className="w-[15px] h-[16px] flex items-center justify-center">
                <div className="w-px h-4 bg-brand-gold"></div>
              </div>

              {/* 2.5 Baths */}
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-brand-gold" />
                <span className="text-[16px] font-bold text-black">
                  2.5 BATHS
                </span>
              </div>

              {/* Divider */}
              <div className="w-[15px] h-[16px] flex items-center justify-center">
                <div className="w-px h-4 bg-brand-gold"></div>
              </div>

              {/* Square Footage */}
              <div className="flex items-center gap-2">
                <Square className="w-4 h-4 text-brand-gold" />
                <span className="text-[17px] font-bold text-black">
                  1,824 SQ. FT.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plan Section */}
        <section className="py-16 flex justify-center px-4">
          <div className="max-w-[1270px] w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F3ed8b769037c42528a238cd31d9706a7"
              alt="Skyview II Floor Plan"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1290px] mx-auto px-4">
            <h2 className="text-[32px] font-bold text-[#192A3D] text-center mb-8">
              Virtual Tour
            </h2>

            <div className="relative bg-black rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/868a7747e01fdd7ffae40f89495c3f1470a5a959?width=2540"
                  alt="Skyview II Virtual Tour"
                  className="w-full h-full object-cover"
                />

                {/* YouTube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-[68px] h-[48px] bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                    <svg width="27" height="20" viewBox="0 0 27 20" fill="none">
                      <path d="M27 10L0 0V20L27 10Z" fill="white" />
                    </svg>
                  </button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-[18px] font-normal">
                    Skyview II Video Tour
                  </h3>
                </div>

                {/* Copy Link Button */}
                <div className="absolute top-4 right-4">
                  <button className="flex flex-col items-center gap-1 text-white/90 hover:text-white transition-colors">
                    <svg width="36" height="36" viewBox="0 0 37 37" fill="none">
                      <path
                        d="M22.17 8.93994H11.57C10.67 8.93994 9.87 9.73994 9.87 10.6399V22.9399H11.57V10.6399H22.17V8.93994ZM24.87 12.4399H15.17C14.17 12.4399 13.37 13.2399 13.37 14.2399V26.5399C13.37 27.5399 14.17 28.3399 15.17 28.3399H24.87C25.87 28.3399 26.67 27.5399 26.67 26.5399V14.1399C26.57 13.2399 25.77 12.4399 24.87 12.4399ZM24.87 26.5399H15.17V14.1399H24.87V26.5399Z"
                        fill="white"
                        stroke="black"
                        strokeOpacity="0.15"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-[14px] font-medium">Copy link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-[#FAFBFC]">
          <div className="max-w-[1290px] mx-auto px-4">
            <h2 className="text-[35px] font-bold text-[#192A3D] text-center mb-12">
              Photo Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[3/2] overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative max-w-7xl max-h-full p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              {/* Image */}
              <div className="flex flex-col items-center">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />

                {/* Caption */}
                <div className="text-white text-center mt-4 px-4">
                  <p className="text-lg font-medium">
                    {galleryImages[currentImageIndex].alt}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    {currentImageIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Background Click to Close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            ></div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-[#F9FAFB] py-16">
          <div className="max-w-[1120px] mx-auto px-4">
            <div className="text-center">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                  alt="Choice Valley Homes Logo"
                  className="w-[632px] h-[93px] object-cover"
                  style={{
                    aspectRatio: "6.76",
                    minHeight: "20px",
                    minWidth: "20px",
                    overflow: "hidden",
                  }}
                />
              </div>

              <h3 className="text-[#3A4F66] text-[30px] leading-[45px] mt-8 px-4">
                Building communities throughout the Central Valley
              </h3>

              <p className="text-[#3A4F66] mt-8">
                For More Information about PASEO, Please Call or Text
              </p>

              <div className="mt-8">
                <p className="text-[#3A4F66] text-[18px] leading-[29px]">
                  <span>Stephanie Stine</span>
                  <br />
                  <span>Community Sales Manager</span>
                  <br />
                  <span>209-308-9000</span>
                  <br />
                  <span>DRE# 02189834</span>
                </p>
              </div>

              <div className="mt-8">
                <p className="text-[#3A4F66] text-[18px] leading-[29px]">
                  <span>Hours</span>
                  <br />
                  <span>Monday – Closed</span>
                  <br />
                  <span>Tuesday – Saturday 10am – 5pm</span>
                  <br />
                  <span>Sunday – 11am – 4pm</span>
                </p>
              </div>

              <p className="text-[#3A4F66] text-[18px] leading-[27px] mt-8">
                154 Montage Drive, Merced, CA 95348
              </p>

              <div className="flex justify-center items-center gap-4 mt-8">
                <a
                  href="tel:209-308-9000"
                  className="flex items-center gap-2 text-black text-[18px] font-bold"
                >
                  <svg
                    className="w-5 h-5 text-[#D29A3A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                  <span>209-308-9000</span>
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#"
                  className="flex items-center gap-2 text-black text-[21px] font-bold"
                >
                  <svg
                    className="w-5 h-5 text-[#D29A3A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    />
                  </svg>
                  <span>Send Message</span>
                </a>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="https://www.instagram.com/choicevalleyhomes/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>

              <div className="flex justify-center mt-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                  alt="Equal Housing Opportunity"
                  className="w-[90px] h-[96px]"
                />
              </div>

              <div className="flex justify-center items-center gap-2 mt-8 text-black">
                <span>® All Rights Reserved</span>
                <span className="text-gray-300">|</span>
                <Link
                  to="/privacy"
                  className="hover:text-[#D29A3A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
