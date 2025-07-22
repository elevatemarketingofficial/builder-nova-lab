import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "../components/Header";

export default function MountainTopII() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const photoGallery = [
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fed8ed6f602ec461f9e8d79afe7d2d798",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7e840c433d314694949378699d2573f2",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0dbdb08471754e89b27db2eb19edc6ee",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa0564e7830634caa8966f259aa981746",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F64b6744fc8224095a76ecca52ce3bf1a",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fe12da3c4cb604329b951fc94099c4a6e",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4ec0a4ee484c489d9b8b37bc749c8816",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbff0641d649844738d4bf399ae42fd5c",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc3a8c445d7cd4e9f8d6cdbba433d1bfa",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F614bf91edf8547b1b09de9e691f5b80e",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F97e8517fac664693b9cf3b9f9b19c4f7",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbee39998102c4945828af25ef5699882",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Feff3145e4be84155a653f6b7da63571a",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F4b6bee8626fc49d28f9cf29b7504aa1b",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa3b72589676c40729a27cc4061c567aa",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6fa224d0855a45b6bb522af06d42baca",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F860fa53a6ce24919b2677d6b91347d44",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb7d04fed6b2f434cb70c636d5ffb0c2a",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ffdf9733db5e74476866ca6ed4f4c9b58",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F09b70fc39a3b491d93c585a8462fc970",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F3471ba16515a42209b5b337eb1e5ef84",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fafdeee367e704b55b4194f426170c2a9",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fbb1aad45964640cf91885b494f60405d",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F33c28bf4235842118d75b3b2d90673ed",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7aae7de09716487f856b2c9736f485ce",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F8f3f3e983ae541838a7c2d455cd6bb4d",
    "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2cab4052ac3a45d3887792edfbf062e0",
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowLeft') {
        const newIndex = currentLightboxIndex > 0 ? currentLightboxIndex - 1 : photoGallery.length - 1;
        setCurrentLightboxIndex(newIndex);
        setSelectedPhoto(photoGallery[newIndex]);
      } else if (e.key === 'ArrowRight') {
        const newIndex = currentLightboxIndex < photoGallery.length - 1 ? currentLightboxIndex + 1 : 0;
        setCurrentLightboxIndex(newIndex);
        setSelectedPhoto(photoGallery[newIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentLightboxIndex, photoGallery]);

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[450px] text-white text-[78px] leading-[80px] text-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626')`,
          backgroundSize: "100% 284.373%",
          backgroundPosition: "0px -414.84px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="relative z-10 font-normal">
          Mountain Top II
        </h1>
      </section>

      {/* Property Details Card */}
      <section className="relative -mt-6 z-10">
        <div className="max-w-[1270px] mx-auto px-[60px]">
          <div className="bg-white rounded-[5px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.17)] p-[60px] flex justify-center items-center h-[150px]">
            <div className="flex items-center justify-center gap-8 w-full">
              {/* Bedrooms */}
              <div className="flex items-center gap-[5.694px]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  className="text-[#D29A3A]"
                >
                  <path d="M9 0L18 8H0L9 0Z" fill="currentColor" />
                </svg>
                <span className="text-black text-[17px] font-bold leading-[29.7px] text-center">
                  5 Bedrooms + Office Loft
                </span>
              </div>

              {/* Separator */}
              <div className="w-[1px] h-6 bg-gray-300"></div>

              {/* Bathrooms */}
              <div className="flex items-center gap-[6.612px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#D29A3A]"
                >
                  <path d="M8 0L16 8H0L8 0Z" fill="currentColor" />
                </svg>
                <span className="text-black text-[16px] font-bold leading-[29.7px] text-center">
                  3 BATHS
                </span>
              </div>

              {/* Separator */}
              <div className="w-[1px] h-6 bg-gray-300"></div>

              {/* Square Footage */}
              <div className="flex items-center gap-[6.612px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#D29A3A]"
                >
                  <path d="M8 0L16 8H0L8 0Z" fill="currentColor" />
                </svg>
                <span className="text-black text-[17px] font-bold leading-[29.7px] text-center">
                  1,890 SQ. FT.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-12">
        <div className="max-w-[1270px] mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F5c5fb281429e42189395aab6ce592ced"
              alt="Mountain Top II Floor Plan"
              className="w-full h-auto max-w-[1270px]"
            />
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-12">
        <div className="max-w-[1290px] mx-auto px-4">
          <h2 className="text-[#192A3D] text-[32px] font-bold leading-[35px] text-center mb-5">
            Virtual Tour
          </h2>
          <div className="relative w-full h-[711px] bg-black">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/73063d24f8b9125ae94274e09b815a776d2618ee?width=2540"
              alt="Mountain Top II Virtual Tour"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="68"
                height="48"
                viewBox="0 0 69 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M67.083 8.6609C66.303 5.7309 64.593 3.2509 61.663 2.4709C56.353 1.0509 34.563 0.920898 34.563 0.920898C34.563 0.920898 12.773 1.0509 7.46299 2.4709C4.53299 3.2509 2.83299 5.7309 2.04299 8.6609C0.622988 13.9709 0.562988 24.9209 0.562988 24.9209C0.562988 24.9209 0.622988 35.8709 2.04299 41.1809C2.82299 44.1109 4.53299 46.5909 7.46299 47.3709C12.773 48.7909 34.563 48.9209 34.563 48.9209C34.563 48.9209 56.353 48.7909 61.663 47.3709C64.593 46.5909 66.303 44.1109 67.083 41.1809C68.503 35.8709 68.563 24.9209 68.563 24.9209C68.563 24.9209 68.503 13.9709 67.083 8.6609Z"
                  fill="#FF0033"
                />
                <path d="M45.563 24.9209L27.563 14.9209V34.9209" fill="white" />
              </svg>
            </div>

            {/* YouTube branding */}
            <div className="absolute top-0 left-0 w-full h-[99px] bg-gradient-to-b from-black/50 to-transparent">
              <div className="flex items-center justify-between p-4 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full"></div>
                  <span className="text-white text-lg">Mountain Top II Video Tour</span>
                </div>
                <div className="text-white text-sm">Copy link</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12">
        <div className="max-w-[1290px] mx-auto px-4">
          <h2 className="text-[#192A3D] text-[35px] font-bold leading-[35px] text-center mb-8">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-4 gap-[10px] max-w-[1270px] mx-auto">
            {photoGallery.map((photo, index) => (
              <div
                key={index}
                className="relative cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => {
                  setSelectedPhoto(photo);
                  setCurrentLightboxIndex(index);
                }}
              >
                <img
                  src={photo}
                  alt={`Mountain Top II Photo ${index + 1}`}
                  className="w-[310px] h-[207px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = currentLightboxIndex > 0 ? currentLightboxIndex - 1 : photoGallery.length - 1;
                setCurrentLightboxIndex(newIndex);
                setSelectedPhoto(photoGallery[newIndex]);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = currentLightboxIndex < photoGallery.length - 1 ? currentLightboxIndex + 1 : 0;
                setCurrentLightboxIndex(newIndex);
                setSelectedPhoto(photoGallery[newIndex]);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedPhoto}
              alt={`Mountain Top II Photo ${currentLightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {currentLightboxIndex + 1} / {photoGallery.length}
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedPhoto(null)}
          />
        </div>
      )}

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
                href="#"
                className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center"
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
