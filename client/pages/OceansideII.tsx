import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Instagram } from "lucide-react";
=======
>>>>>>> 580d9099657e8fa7c42b47ccbd6fe4713cf328ba
import Header from "../components/Header";

const OceansideII = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px] bg-gray-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fa757fd58e3b840c7ae6034a3b5a84411%2F110-Montage-Front-Photo-.jpg')",
          }}
        >
          {/* Background image with dark overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            style={{
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* Additional dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-4">
            <h1 className="text-7xl lg:text-8xl font-bold text-white">
              Oceanside II
            </h1>
          </div>
        </div>
      </section>

      {/* Specifications Bar */}
      <section className="relative -mt-6 mb-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="bg-white rounded shadow-lg px-16 py-8 flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-brand-gold text-lg">🛏️</span>
              <span className="text-black font-bold">4 Bedrooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-brand-gold text-lg">🚿</span>
              <span className="text-black font-bold">2.5 BATHS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-brand-gold text-lg">📐</span>
              <span className="text-black font-bold">1,746 SQ. FT.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb9a92c6277e743eb97249884e21e2d21"
            alt="Oceanside II Floor Plan - Plan 1746 with 4 bedrooms, 2.5 baths, 2 car garage"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark-blue">
              Virtual Tour
            </h2>
          </div>

          {/* YouTube Video Embed */}
          <div className="relative bg-black h-[711px] max-w-[1270px] mx-auto overflow-hidden">
            {/* Video thumbnail and controls */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa757fd58e3b840c7ae6034a3b5a84411%2FLivingroom.jpg"
              alt="Oceanside II Video Tour"
              className="w-full h-full object-cover"
            />

            {/* Play button */}
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                width="68"
                height="49"
                viewBox="0 0 68 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.52 8.21998C65.74 5.28998 64.03 2.80998 61.1 2.02998C55.79 0.60998 34 0.47998 34 0.47998C34 0.47998 12.21 0.60998 6.9 2.02998C3.97 2.80998 2.27 5.28998 1.48 8.21998C0.0600001 13.53 0 24.48 0 24.48C0 24.48 0.0600001 35.43 1.48 40.74C2.26 43.67 3.97 46.15 6.9 46.93C12.21 48.35 34 48.48 34 48.48C34 48.48 55.79 48.35 61.1 46.93C64.03 46.15 65.74 43.67 66.52 40.74C67.94 35.43 68 24.48 68 24.48C68 24.48 67.94 13.53 66.52 8.21998Z"
                  fill="#FF0033"
                />
                <path d="M45 24.48L27 14.48V34.48" fill="white" />
              </svg>
            </button>

            {/* Video header */}
            <div className="absolute top-0 left-0 right-0 p-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa757fd58e3b840c7ae6034a3b5a84411%2FMaster-Bedroom.jpg"
                alt="Video header"
                className="w-full h-[99px] object-cover"
              />
              <div className="absolute top-6 left-16">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa757fd58e3b840c7ae6034a3b5a84411%2Fcropped-CVH-icon-2.png"
                    alt="Choice Valley Homes"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-white text-lg">
                    Oceanside II Video Tour
                  </span>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <button className="flex flex-col items-center space-y-1 opacity-90">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.17 9.28003H11.57C10.67 9.28003 9.87 10.08 9.87 10.98V23.28H11.57V10.98H22.17V9.28003ZM24.87 12.78H15.17C14.17 12.78 13.37 13.58 13.37 14.58V26.88C13.37 27.88 14.17 28.68 15.17 28.68H24.87C25.87 28.68 26.67 27.88 26.67 26.88V14.48C26.57 13.58 25.77 12.78 24.87 12.78ZM24.87 26.88H15.17V14.48H24.87V26.88Z"
                      fill="white"
                      stroke="black"
                      strokeOpacity="0.15"
                      strokeWidth="2"
                    />
                    <path
                      d="M22.17 9.28003H11.57C10.67 9.28003 9.87 10.08 9.87 10.98V23.28H11.57V10.98H22.17V9.28003ZM24.87 12.78H15.17C14.17 12.78 13.37 13.58 13.37 14.58V26.88C13.37 27.88 14.17 28.68 15.17 28.68H24.87C25.87 28.68 26.67 27.88 26.67 26.88V14.48C26.57 13.58 25.77 12.78 24.87 12.78ZM24.87 26.88H15.17V14.48H24.87V26.88Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-white text-sm">Copy link</span>
                </button>
              </div>
            </div>

            {/* Watch on YouTube button */}
            <div className="absolute bottom-0 left-0 bg-black/80 rounded-tr px-3 py-4 flex items-center space-x-2">
              <span className="text-white text-base">Watch on</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa757fd58e3b840c7ae6034a3b5a84411%2FCVH-icon-2.svg"
                alt="YouTube"
                className="h-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark-blue">
              Photo Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-[1270px] mx-auto">
            {/* Row 1 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F09a9caa8c8bd4935b01d7bf1edd87f4d"
              alt="Home exterior"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78"
              alt="Home exterior view"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F9fbb0683fb2e43809fff7d5e4e371ff7"
              alt="Home front"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F623104fc1eff4265a19385ce11589049"
              alt="Interior room"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 2 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff5f365dcfeea41e6952c53bb3f3e0a9b"
              alt="Living room"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F37300fc9d48644aa8330a8577561fc34"
              alt="Bedroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fd22b7dddb29a49ccae0f48458079b3e6"
              alt="Bathroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Ff5d8b0816b24475897b8a855da3777ac"
              alt="Kitchen"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 3 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fca12b4c0bd794cce8d5b1e600b2ddc35"
              alt="Dining area"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc6b0190a7c254cf2ab3a58ace579a70a"
              alt="Living space"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fef760819cfb44b47a6ee1e6477183692"
              alt="Master bedroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F9a3ec5d32bc04e32b1d423fcd884ebfc"
              alt="Bathroom vanity"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 4 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fff298a3374554807a0bc85d040c21a9b"
              alt="Bedroom 2"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fd601840fe6c64a35b63e8c13f388a9eb"
              alt="Bedroom 3"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6bb3c5b137d5437d8b940e340f94ffe8"
              alt="Staircase"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F2fc8185c135943a5a683c018bb15dce8"
              alt="Laundry room"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 5 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F8b4b7fbf87e8468baac1f2b6b4ef1da3"
              alt="Walk-in closet"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb0d06747f6ed41fcb9a1f15d965675d1"
              alt="Master bathroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdbc5cf2188484f6e93520dab914e95e1"
              alt="Kitchen detail"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fb05090361e594973adb7a6432507f532"
              alt="Kitchen island"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 6 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F7d08caaf43dc42218fe92ca77a05f963"
              alt="Living room view"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc334502dd7c74e94a3309a2a5a51914f"
              alt="Family room"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F3a1455b5382c423f895d2618af6a83a8"
              alt="Dining room"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F6f8c5f8000214e3faa168e3b231ec3d8"
              alt="Entry foyer"
              className="w-full h-[207px] object-cover"
            />
          </div>
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

export default OceansideII;
