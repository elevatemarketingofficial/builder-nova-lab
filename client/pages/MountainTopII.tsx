import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, Instagram } from "lucide-react";
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

      if (e.key === "Escape") {
        setSelectedPhoto(null);
      } else if (e.key === "ArrowLeft") {
        const newIndex =
          currentLightboxIndex > 0
            ? currentLightboxIndex - 1
            : photoGallery.length - 1;
        setCurrentLightboxIndex(newIndex);
        setSelectedPhoto(photoGallery[newIndex]);
      } else if (e.key === "ArrowRight") {
        const newIndex =
          currentLightboxIndex < photoGallery.length - 1
            ? currentLightboxIndex + 1
            : 0;
        setCurrentLightboxIndex(newIndex);
        setSelectedPhoto(photoGallery[newIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentLightboxIndex, photoGallery]);

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-200 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-black">Mountain Top II</h1>
      </section>

      {/* Property Details Card */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Bedrooms */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  5 Bedrooms + Office Loft
                </h3>
              </div>

              {/* Separator */}
              <div className="hidden md:block border-l border-gray-300"></div>

              {/* Bathrooms */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  3 BATHS
                </h3>
              </div>

              {/* Separator */}
              <div className="md:col-span-3 border-t border-gray-300 my-4"></div>

              {/* Square Footage */}
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  1,890 SQ. FT.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Floor Plan</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626"
            alt="Mountain Top II Floor Plan"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Virtual Tour
          </h2>
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-colors">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-8 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
            </button>

            {/* YouTube branding */}
            <div className="absolute bottom-4 right-4 text-white text-sm">
              Mountain Top II Video Tour
            </div>
          </div>
          <p className="text-center mt-4 text-gray-600">
            <a href="#" className="text-blue-600 hover:underline">
              Copy link
            </a>
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photoGallery.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => {
                  setSelectedPhoto(photo);
                  setCurrentLightboxIndex(index);
                }}
              >
                <img
                  src={photo}
                  alt={`Mountain Top II Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
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
              const newIndex =
                currentLightboxIndex > 0
                  ? currentLightboxIndex - 1
                  : photoGallery.length - 1;
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
              const newIndex =
                currentLightboxIndex < photoGallery.length - 1
                  ? currentLightboxIndex + 1
                  : 0;
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
            alt="Gallery Photo"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
            {currentLightboxIndex + 1} / {photoGallery.length}
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedPhoto(null)}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Logo */}
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
