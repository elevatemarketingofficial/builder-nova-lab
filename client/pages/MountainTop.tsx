import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, MessageSquare, Home } from "lucide-react";
import Navigation from "../components/Navigation";

const PhotoCarouselSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/ea4d8537e43569ba4fb774c50ea215439591532f?width=1251", alt: "Mountain Top Property Photo 1" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/0f814e7ed0bf417824d0557eae41cc2fc42076b3?width=1251", alt: "Mountain Top Property Photo 2" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/c66b955aa965f8279d22ecd8fdadd67dcffc03ec?width=1251", alt: "Mountain Top Property Photo 3" }
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

  const visibleImages = carouselImages.slice(currentImageIndex, currentImageIndex + 3);

  return (
    <div className="w-full bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Images Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
            {visibleImages.map((image, index) => (
              <div key={currentImageIndex + index} className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[417px] object-cover rounded-none"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[60px] h-[60px] bg-gray-200 bg-opacity-90 hover:bg-opacity-100 transition-all duration-200 rounded-none flex items-center justify-center group"
          >
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.76 8.38989C38.28 8.38989 37.81 8.48989 37.35 8.68989C36.89 8.88989 36.52 9.12989 36.24 9.40989L18.48 27.4099C17.84 28.0499 17.52 28.9599 17.52 30.1399C17.52 31.3199 17.84 32.2299 18.48 32.8699L36.24 52.1299C36.68 52.5699 37.09 52.8899 37.47 53.0899C37.85 53.2899 38.28 53.3899 38.76 53.3899C39.92 53.3899 40.84 53.0499 41.52 52.3699C41.88 52.0099 42.18 51.5799 42.42 51.0799C42.66 50.5799 42.78 50.0899 42.78 49.6099C42.78 48.4499 42.36 47.5499 41.52 46.9099L26.28 30.1099L41.52 14.3899C42.16 13.7499 42.48 12.9899 42.48 12.1099C42.48 10.9499 42.16 10.0499 41.52 9.40989C41 9.00989 40.54 8.73989 40.14 8.59989C39.74 8.45989 39.28 8.38989 38.76 8.38989Z" fill="#EDEDED" fillOpacity="0.9"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[60px] h-[60px] bg-gray-200 bg-opacity-90 hover:bg-opacity-100 transition-all duration-200 rounded-none flex items-center justify-center group"
          >
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.76 32.8699C42.44 32.1899 42.78 31.2699 42.78 30.1099C42.78 29.5899 42.7 29.1099 42.54 28.6699C42.38 28.2299 42.12 27.8899 41.76 27.6499L24 9.64989C23.6 9.24989 23.19 8.93989 22.77 8.71989C22.35 8.49989 21.84 8.38989 21.24 8.38989C20.24 8.38989 19.42 8.72989 18.78 9.40989C18.38 9.76989 18.07 10.1899 17.85 10.6699C17.63 11.1499 17.52 11.6299 17.52 12.1099C17.52 13.3099 17.84 14.2299 18.48 14.8699L33.78 30.4099L18.24 47.1499C17.6 47.7899 17.28 48.7099 17.28 49.9099C17.28 50.8699 17.68 51.7899 18.48 52.6699C19.28 53.1499 20.2 53.3899 21.24 53.3899C21.76 53.3899 22.26 53.2799 22.74 53.0599C23.22 52.8399 23.64 52.5299 24 52.1299L41.76 32.8699Z" fill="#EDEDED" fillOpacity="0.9"/>
            </svg>
          </button>
        </div>

        {/* Navigation Instructions */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-base flex items-center justify-center gap-2">
            <svg className="w-3 h-4" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 0L0 14H11L5.5 0Z" fill="#3A4F66"/>
            </svg>
            Use mouse to drag and scroll to zoom
          </p>
        </div>
      </div>
    </div>
  );
};

export default function MountainTop() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[87px]">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <svg width="359" height="54" viewBox="0 0 359 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4_588)">
                  <mask id="mask0_4_588" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="359" height="54">
                    <path d="M358.77 0.5H0.000396729V53.5H358.77V0.5Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_4_588)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.7142 0.5L39.1167 6.17902V3.11619H46.8527V12.3111L62.5878 24.6199C60.9071 24.6199 59.188 24.4668 57.4561 24.4668H54.3001L31.6565 6.67037L14.2536 20.2617H16.6143V29.4758C24.3117 25.258 39.6619 22.9801 50.2717 24.7093C36.3682 25.7133 23.0014 30.4624 11.6045 38.4473V25.207H0.000396729L31.7142 0.5Z" fill="#D29A3A"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.0468 29.8396C48.4218 27.0426 57.2191 25.7043 66.0517 25.8833C60.7951 26.5335 55.6153 27.694 50.586 29.3482C34.7676 34.5806 22.49 43.7372 16.6912 53.5064L8.19827 50.9094C14.6129 42.2824 25.8898 34.4402 40.0468 29.7821V29.8396Z" fill="#D29A3A"/>
                    <path d="M89.5614 21.1168L87.1365 23.4204C86.4434 22.6197 85.5881 21.9739 84.6259 21.5252C83.6637 21.0766 82.6176 20.8352 81.556 20.8169C80.739 20.8058 79.9281 20.9576 79.1712 21.2634C78.4144 21.5692 77.7268 22.0228 77.1491 22.5975C76.5715 23.1721 76.1155 23.856 75.8081 24.6089C75.5007 25.3618 75.348 26.1684 75.3592 26.9809C75.343 28.0949 75.617 29.194 76.1547 30.1714C76.6776 31.1041 77.4562 31.8697 78.3998 32.3792C79.381 32.9184 80.4861 33.1955 81.6073 33.1831C82.5589 33.1958 83.5015 33.0043 84.3715 32.6217C85.4013 32.1051 86.3325 31.4142 87.1234 30.5797L89.4774 33.0237C88.3742 34.1581 87.0696 35.0796 85.6288 35.7419C84.3267 36.2699 82.9299 36.5283 81.5237 36.5013C80.2405 36.5478 78.9613 36.3342 77.7637 35.8734C76.5661 35.4127 75.4752 34.7145 74.5574 33.8213C73.6586 32.9189 72.9548 31.8431 72.4893 30.6603C72.0238 29.4773 71.8064 28.2122 71.8504 26.9427C71.8184 25.2539 72.2438 23.5875 73.0821 22.1186C73.9285 20.6888 75.1504 19.5153 76.6165 18.724C78.1297 17.8768 79.8387 17.4369 81.5747 17.4478C83.0759 17.4468 84.5599 17.7689 85.924 18.3921C87.3224 19.0252 88.5634 19.9552 89.5614 21.1168Z" fill="black"/>
                    <path d="M92.5629 17.9263H96.0845V24.7795H102.185V17.9263H105.694V36.0801H102.185V28.1231H96.091V36.0801H92.5629V17.9263Z" fill="black"/>
                    <path d="M118.498 17.4733C119.74 17.4599 120.973 17.7005 122.117 18.1801C123.263 18.6598 124.297 19.3683 125.156 20.2617C126.06 21.1469 126.773 22.2059 127.252 23.3744C127.73 24.5428 127.964 25.796 127.94 27.0575C127.966 28.3058 127.734 29.5462 127.262 30.7027C126.789 31.8592 126.083 32.9074 125.188 33.7829C123.392 35.5496 120.963 36.5341 118.437 36.5198C115.911 36.5053 113.494 35.4935 111.717 33.7064C110.265 32.2023 109.339 30.2721 109.078 28.2027C108.817 26.1333 109.234 24.0353 110.267 22.2207C111.107 20.7821 112.311 19.5877 113.76 18.757C115.209 17.9261 116.851 17.4879 118.523 17.4861L118.498 17.4733ZM118.459 20.8552C117.666 20.8366 116.878 20.9825 116.145 21.2835C115.411 21.5845 114.749 22.0341 114.2 22.6035C113.623 23.1935 113.174 23.8935 112.877 24.6612C112.581 25.4288 112.444 26.2484 112.475 27.0702C112.436 27.9779 112.613 28.8818 112.989 29.7095C113.366 30.5372 113.932 31.2658 114.643 31.8368C115.724 32.7285 117.086 33.212 118.491 33.2023C119.283 33.2093 120.067 33.0517 120.794 32.7397C121.52 32.4276 122.174 31.968 122.712 31.3901C123.838 30.2054 124.466 28.6368 124.466 27.0064C124.466 25.376 123.838 23.8074 122.712 22.6227C122.165 22.0502 121.505 21.5973 120.773 21.293C120.041 20.9887 119.253 20.8396 118.459 20.8552Z" fill="black"/>
                    <path d="M130.967 17.9263H134.412V36.0801H130.967V17.9263Z" fill="black"/>
                    <path d="M155.093 21.1168L152.662 23.4204C151.97 22.6193 151.116 21.973 150.155 21.5243C149.195 21.0755 148.148 20.8345 147.088 20.8169C146.271 20.8058 145.46 20.9576 144.703 21.2634C143.946 21.5692 143.259 22.0228 142.68 22.5975C142.103 23.1721 141.647 23.856 141.34 24.6089C141.033 25.3618 140.88 26.1684 140.891 26.9809C140.875 28.094 141.148 29.1924 141.68 30.1714C142.204 31.1029 142.983 31.8681 143.925 32.3792C144.906 32.9176 146.011 33.1946 147.132 33.1831C148.084 33.1966 149.027 33.0051 149.897 32.6217C150.926 32.1051 151.858 31.4142 152.649 30.5797L155.003 33.0237C153.9 34.1588 152.596 35.0805 151.154 35.7419C149.852 36.2695 148.455 36.5278 147.049 36.5013C145.766 36.5489 144.486 36.3358 143.288 35.8751C142.091 35.4143 141 34.7154 140.083 33.8213C138.635 32.2707 137.713 30.3066 137.448 28.2066C137.183 26.1066 137.589 23.9769 138.608 22.1186C139.452 20.6876 140.675 19.5137 142.142 18.724C143.652 17.8767 145.36 17.4368 147.094 17.4478C148.595 17.4454 150.079 17.7676 151.443 18.3921C152.844 19.0259 154.089 19.9557 155.093 21.1168Z" fill="black"/>
                    <path d="M158.14 17.9263H168.102V21.3083H161.591V24.5944H168.102V27.9125H161.591V32.6663H168.102V36.061H158.14V17.9263Z" fill="black"/>
                    <path d="M177.063 17.9263H180.636L185.229 30.8222L189.886 17.9263H193.452L186.858 36.0801H183.509L177.063 17.9263Z" fill="black"/>
                    <path d="M201.797 17.9263H205.326L212.344 36.0801H208.732L207.301 32.3408H199.86L198.405 36.0801H194.799L201.797 17.9263ZM203.581 22.7439L201.137 28.9718H206.019L203.581 22.7439Z" fill="black"/>
                    <path d="M215.025 17.9263H218.501V32.7812H223.556V36.0801H215.025V17.9263Z" fill="black"/>
                    <path d="M226.199 17.9263H229.676V32.7812H234.737V36.0801H226.199V17.9263Z" fill="black"/>
                    <path d="M237.386 17.9263H247.348V21.3083H240.837V24.5944H247.348V27.9125H240.837V32.6663H247.348V36.061H237.386V17.9263Z" fill="black"/>
                    <path d="M249.291 17.9263H253.018L256.424 24.4604L259.811 17.9263H263.494L258.15 28.1997V36.061H254.654V28.1997L249.291 17.9263Z" fill="black"/>
                    <path d="M273.558 17.9262H275.379V25.5388H284.668V17.9262H286.496V36.08H284.668V27.319H275.379V36.08H273.558V17.9262Z" fill="black"/>
                    <path d="M299.621 17.4733C300.904 17.4402 302.181 17.6669 303.375 18.1396C304.568 18.6124 305.651 19.3213 306.561 20.2234C307.897 21.5637 308.805 23.2668 309.17 25.1186C309.535 26.9704 309.342 28.8883 308.615 30.6312C307.887 32.3742 306.658 33.8644 305.081 34.9145C303.505 35.9646 301.652 36.5277 299.755 36.5331C298.484 36.5613 297.221 36.3308 296.043 35.8556C294.865 35.3805 293.797 34.6708 292.904 33.7701C292.006 32.904 291.297 31.8635 290.82 30.7131C290.343 29.5627 290.109 28.327 290.133 27.0829C290.123 25.3822 290.566 23.7091 291.416 22.2334C292.232 20.7775 293.429 19.569 294.88 18.7367C296.319 17.9036 297.956 17.4674 299.621 17.4733ZM299.704 19.2344C298.349 19.2324 297.019 19.5962 295.855 20.2873C294.672 20.959 293.692 21.9355 293.019 23.114C292.335 24.3222 291.982 25.6894 292 27.0766C291.995 28.0853 292.19 29.0852 292.575 30.0186C292.959 30.952 293.526 31.8007 294.241 32.5158C294.956 33.2308 295.806 33.7983 296.743 34.1855C297.679 34.5726 298.683 34.772 299.697 34.7719C301.076 34.7806 302.433 34.4263 303.629 33.7446C304.811 33.0855 305.787 32.1165 306.452 30.9434C307.13 29.7372 307.477 28.3752 307.459 26.9936C307.479 25.6239 307.131 24.2738 306.452 23.0821C305.751 21.9211 304.761 20.9591 303.579 20.2886C302.396 19.6181 301.059 19.2617 299.697 19.2535L299.704 19.2344Z" fill="black"/>
                    <path d="M312.18 36.08L314.798 17.9262H315.093L322.508 32.8193L329.853 17.9262H330.148L332.771 36.08H330.981L329.179 23.0948L322.765 36.0737H322.296L315.766 22.9927L313.976 36.0737L312.18 36.08Z" fill="black"/>
                    <path d="M336.37 17.9262H346.826V19.7066H338.192V25.3919H346.748V27.1722H338.192V34.2997H346.748V36.08H336.37V17.9262Z" fill="black"/>
                    <path d="M348.089 32.6982L349.641 31.7729C350.732 33.7723 351.994 34.7719 353.426 34.7719C354.027 34.7758 354.618 34.6288 355.145 34.3444C355.657 34.0881 356.084 33.6919 356.377 33.2022C356.654 32.7437 356.8 32.2186 356.8 31.6836C356.779 31.0361 356.555 30.4114 356.159 29.8969C355.263 28.7826 354.212 27.8026 353.035 26.9872C351.992 26.2746 351.038 25.4414 350.193 24.505C349.569 23.713 349.228 22.736 349.225 21.7293C349.217 20.9724 349.414 20.2273 349.796 19.5726C350.176 18.9222 350.732 18.3898 351.399 18.0348C352.089 17.66 352.865 17.4667 353.651 17.4732C354.497 17.4708 355.33 17.691 356.063 18.1113C357.006 18.7248 357.816 19.5213 358.443 20.4531L356.955 21.5761C356.478 20.8818 355.882 20.275 355.197 19.7831C354.72 19.499 354.174 19.3511 353.619 19.3556C352.955 19.3234 352.305 19.5527 351.81 19.9937C351.584 20.2028 351.405 20.4569 351.284 20.7395C351.164 21.022 351.105 21.3267 351.111 21.6336C351.111 22.0298 351.196 22.4214 351.361 22.7822C351.584 23.2382 351.891 23.6493 352.265 23.9945C352.503 24.2243 353.292 24.8304 354.619 25.8068C355.87 26.6496 356.969 27.6958 357.872 28.9015C358.426 29.7073 358.731 30.6565 358.75 31.6325C358.753 32.2767 358.621 32.9144 358.361 33.5046C358.102 34.0947 357.721 34.6243 357.243 35.0591C356.761 35.5328 356.189 35.9056 355.559 36.1555C354.931 36.4054 354.257 36.5273 353.581 36.514C352.509 36.5257 351.46 36.2191 350.565 35.6334C349.514 34.868 348.665 33.8609 348.089 32.6982Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.0066 13.3001H31.4063V16.6756H28.0066V13.3001ZM33.087 18.2645H36.4803V21.6463H33.087V18.2645ZM28.0066 18.2645H31.4063V21.6463H28.0066V18.2645ZM33.087 13.3001H36.4803V16.6756H33.087V13.3001Z" fill="#D29A3A"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4_588">
                    <rect width="358.769" height="53" fill="white" transform="translate(0.000396729 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>

            {/* Navigation */}
            <Navigation />

            {/* View Listings Button */}
            <Link 
              to="/listings" 
              className="bg-brand-gold text-white px-5 py-3 rounded-sm hover:bg-opacity-90 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Home className="w-4 h-4" />
              View Listings
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center">
            {/* Title */}
            <div className="flex-1">
              <h1 className="text-[66px] font-bold text-black leading-tight">
                Mountain Top
              </h1>
            </div>
            
            {/* House Image */}
            <div className="flex-1 flex justify-center">
              <div 
                className="w-[774px] h-[600px] bg-cover bg-center rounded-none"
                style={{ 
                  backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/e4f515ff3aa0e84791c221128f9dce5f38f66fb4?width=1548')"
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
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">Bedrooms</h3>
                <div className="text-brand-gold text-xl font-bold">4</div>
                <div className="text-brand-gold text-sm font-bold">Plus Den/Office</div>
              </div>

              {/* Bathrooms */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">🚿</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">Bathrooms</h3>
                <div className="text-brand-gold text-xl font-bold">3</div>
              </div>

              {/* Square Footage */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">📐</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">Square Footage</h3>
                <div className="text-brand-gold text-lg font-bold">1,874 sq. ft</div>
              </div>

              {/* Garage */}
              <div className="bg-[#F9F5F0] p-4 text-center">
                <div className="text-brand-gold text-5xl mb-2">🚗</div>
                <h3 className="text-[#192A3D] text-sm font-bold uppercase mb-2">Garage</h3>
                <div className="text-brand-gold text-lg font-bold">2 Car Tandem Garage</div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-5xl mx-auto mb-8">
              <p className="text-[#3A4F66] text-xl leading-relaxed mb-6">
                Unique gets noticed. You will be impressed with this interior design. This 1874 sq ft home offers a beautiful kitchen, with the
                perfect amount of counter space and cabinets. With a living room perfect for entertaining or just relaxing you will also find
                the den/office space and a full bath. The second floor you will find 4 bedrooms and a loft with a perfect nook desk. Key
                features of this home are the master bedroom with a dual vanity and walk-in closet. Not to mention the convenient upstairs
                laundry unit. The Tandem 2 car garage offers creative opportunities to utilize the space.
              </p>
              <p className="text-[#3A4F66] text-xl">
                Call today to schedule a tour of the MOUNTAIN TOP home at Paseo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[32px] font-bold text-[#192A3D] mb-8">Virtual Tour</h2>
            
            {/* Virtual Tour Frame */}
            <div className="bg-black h-[714px] flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <h3 className="text-[28px] font-bold mb-3">We couldn't verify the security of your connection.</h3>
                <p className="text-[13px]">Access to this content has been restricted. Contact your internet service provider for help.</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center">
              <p className="text-[#3A4F66] text-base flex items-center justify-center gap-2">
                <svg className="w-3 h-4" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 0L0 14H11L5.5 0Z" fill="#3A4F66"/>
                </svg>
                Use mouse to drag and scroll to zoom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <PhotoCarouselSection />

      {/* Floor Plan Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[34px] font-bold text-[#192A3D] mb-8">Floor Plan</h2>
            
            <div className="flex justify-center">
              <Link to="#" className="block">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f74d88015b1405e75c8e22bb4e33ea77766d5f19?width=2160"
                  alt="Mountain Top Floor Plan"
                  className="w-[1080px] h-[1080px] object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interest List Section */}
      <section className="bg-brand-gold py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <h2 className="text-white text-[32px] font-bold leading-tight mb-4">
                Join the<br />Interested List
              </h2>
            </div>
            <div className="flex-1 mx-8">
              <p className="text-white text-base leading-relaxed">
                Sign-up to stay in the loop with new home releases, builder incentives,<br />
                special events & more!
              </p>
            </div>
            <div>
              <Link 
                to="/contact"
                className="bg-white text-black px-10 py-5 text-lg font-normal hover:bg-gray-100 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e77a025832448c22fb3aef29e7810f44e28495f6?width=216"
                alt="Contact Representative"
                className="w-[108px] h-[108px] rounded-full border-3 border-brand-gold border-opacity-34 mx-auto"
              />
            </div>

            <h2 className="text-[34px] font-bold text-[#192A3D] mb-8">Get in Touch</h2>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#3A4F66] text-sm mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full h-10 border-b border-[#69727D] bg-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-[#3A4F66] text-sm mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full h-10 border-b border-[#69727D] bg-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#3A4F66] text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full h-10 border-b border-[#69727D] bg-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-[#3A4F66] text-sm mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full h-10 border-b border-[#69727D] bg-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#3A4F66] text-sm mb-2">How can we help you?</label>
                <textarea 
                  rows={6}
                  className="w-full border-b border-[#69727D] bg-white focus:outline-none focus:border-brand-gold resize-none"
                />
              </div>

              <div className="text-left">
                <label className="block text-[#3A4F66] text-sm mb-2">Accept Terms of Contacting</label>
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="w-3 h-3 bg-blue-500 mt-1"
                  />
                  <div className="text-[#3A4F66] text-sm leading-relaxed">
                    <p>By pressing the Submit button, I agree to Choice Valley contacting me by email and/or phone</p>
                    <p>to share home availability information or related opportunities. I also understand that any</p>
                    <p>information I've shared in this form is subject to Choice Valley Homes' Privacy Policy.</p>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <button 
                  type="submit"
                  className="bg-[#69727D] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F2F4F7] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <svg width="720" height="108" viewBox="0 0 720 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <g clipPath="url(#clip0_4_534)">
                  <mask id="mask0_4_534" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="720" height="108">
                    <path d="M719.6 0.823242H0.410004V107.067H719.6V0.823242Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_4_534)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M63.9836 0.823242L78.8226 12.2074V6.06766H94.3303V24.4998L125.873 49.1741C122.504 49.1741 119.058 48.8671 115.586 48.8671H109.259L63.8679 13.1924L28.9821 40.4377H33.7142V58.9083C49.1446 50.4532 79.9156 45.8869 101.184 49.3532C73.313 51.366 46.5179 60.8859 23.6715 76.8926V50.3509H0.410004L63.9836 0.823242Z" fill="#D29A3A"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M80.6871 59.6373C97.4756 54.0306 115.111 51.3477 132.817 51.7066C122.279 53.01 111.896 55.3362 101.814 58.6523C70.1044 69.1411 45.4928 87.4966 33.8685 107.08L16.8435 101.874C29.7023 84.5801 52.3079 68.8598 80.6871 59.5221V59.6373Z" fill="#D29A3A"/>
                    <path d="M179.944 42.1518L175.083 46.7695C173.694 45.1644 171.979 43.8699 170.051 42.9704C168.122 42.0711 166.025 41.5872 163.897 41.5506C162.259 41.5282 160.633 41.8326 159.116 42.4457C157.599 43.0586 156.221 43.9679 155.063 45.1199C153.905 46.2718 152.991 47.6428 152.374 49.152C151.758 50.6613 151.452 52.2782 151.475 53.907C151.442 56.1401 151.991 58.3434 153.069 60.3025C154.117 62.1723 155.678 63.7071 157.57 64.7283C159.537 65.8092 161.752 66.3646 164 66.34C165.907 66.3653 167.797 65.9815 169.541 65.2144C171.605 64.179 173.472 62.7939 175.057 61.1211L179.776 66.0203C177.564 68.2944 174.949 70.1417 172.061 71.4693C169.451 72.5278 166.651 73.0458 163.832 72.9915C161.26 73.0848 158.695 72.6566 156.295 71.7329C153.894 70.8094 151.707 69.4098 149.867 67.6191C148.065 65.8102 146.655 63.6538 145.722 61.2826C144.788 58.9112 144.353 56.3753 144.441 53.8303C144.377 50.4449 145.229 47.1046 146.91 44.16C148.607 41.2938 151.056 38.9414 153.995 37.3551C157.028 35.6569 160.454 34.775 163.934 34.7968C166.943 34.7948 169.918 35.4406 172.653 36.6899C175.456 37.9589 177.944 39.8233 179.944 42.1518Z" fill="black"/>
                    <path d="M185.961 35.7559H193.021V49.4937H205.25V35.7559H212.283V72.147H205.25V56.1964H193.034V72.147H185.961V35.7559Z" fill="black"/>
                    <path d="M237.95 34.8477C240.441 34.8209 242.911 35.3033 245.206 36.2647C247.502 37.2263 249.575 38.6465 251.298 40.4375C253.109 42.2119 254.539 44.3348 255.499 46.6771C256.458 49.0192 256.927 51.5315 256.878 54.0602C256.93 56.5627 256.466 59.0491 255.518 61.3675C254.57 63.6858 253.155 65.787 251.362 67.5421C247.761 71.0836 242.891 73.0572 237.828 73.0284C232.764 72.9995 227.919 70.971 224.358 67.3886C221.447 64.3736 219.591 60.5042 219.067 56.3559C218.544 52.2077 219.38 48.0019 221.451 44.3644C223.135 41.4806 225.549 39.0864 228.452 37.421C231.357 35.7554 234.649 34.877 238.001 34.8734L237.95 34.8477ZM237.872 41.6271C236.283 41.5898 234.702 41.8822 233.233 42.4857C231.762 43.089 230.435 43.9903 229.335 45.1318C228.179 46.3146 227.278 47.7176 226.684 49.2565C226.089 50.7955 225.814 52.4383 225.876 54.0857C225.799 55.9053 226.154 57.7173 226.907 59.3765C227.663 61.0357 228.797 62.4962 230.222 63.6408C232.39 65.4284 235.121 66.3976 237.937 66.3782C239.524 66.3922 241.097 66.0763 242.553 65.4507C244.009 64.8252 245.32 63.9038 246.397 62.7455C248.655 60.3705 249.913 57.2262 249.913 53.9579C249.913 50.6895 248.655 47.5452 246.397 45.1702C245.302 44.0226 243.978 43.1148 242.511 42.5048C241.043 41.8947 239.464 41.5959 237.872 41.6271Z" fill="black"/>
                    <path d="M262.947 35.7559H269.853V72.147H262.947V35.7559Z" fill="black"/>
                    <path d="M311.309 42.1518L306.435 46.7695C305.049 45.1636 303.336 43.8681 301.411 42.9686C299.485 42.0689 297.388 41.5858 295.262 41.5506C293.624 41.5282 291.999 41.8326 290.481 42.4457C288.964 43.0586 287.586 43.9679 286.427 45.1199C285.27 46.2718 284.356 47.6428 283.74 49.152C283.124 50.6613 282.818 52.2782 282.839 53.907C282.808 56.1383 283.354 58.3401 284.421 60.3025C285.472 62.1698 287.033 63.7038 288.921 64.7283C290.889 65.8076 293.104 66.3629 295.351 66.34C297.259 66.3669 299.148 65.983 300.894 65.2144C302.957 64.179 304.824 62.7939 306.409 61.1211L311.13 66.0203C308.918 68.2957 306.303 70.1433 303.413 71.4693C300.803 72.5268 298.003 73.0446 295.185 72.9915C292.612 73.087 290.046 72.6598 287.645 71.7362C285.245 70.8125 283.058 69.4116 281.219 67.6191C278.316 64.5109 276.469 60.5737 275.938 56.364C275.407 52.1543 276.221 47.8851 278.263 44.16C279.956 41.2914 282.406 38.9382 285.347 37.3551C288.375 35.6567 291.798 34.7749 295.275 34.7968C298.284 34.792 301.259 35.438 303.992 36.6899C306.801 37.9604 309.297 39.8242 311.309 42.1518Z" fill="black"/>
                    <path d="M317.418 35.7559H337.386V42.5354H324.335V49.1228H337.386V55.7742H324.335V65.3036H337.386V72.1086H317.418V35.7559Z" fill="black"/>
                    <path d="M355.35 35.7559H362.512L371.72 61.607L381.054 35.7559H388.204L374.985 72.147H368.272L355.35 35.7559Z" fill="black"/>
                    <path d="M404.933 35.7559H412.006L426.074 72.147H418.833L415.966 64.6513H401.049L398.132 72.147H390.904L404.933 35.7559ZM408.508 45.4133L403.609 57.8976H413.395L408.508 45.4133Z" fill="black"/>
                    <path d="M431.448 35.7559H438.418V65.5339H448.55V72.147H431.448V35.7559Z" fill="black"/>
                    <path d="M453.848 35.7559H460.817V65.5339H470.963V72.147H453.848V35.7559Z" fill="black"/>
                    <path d="M476.273 35.7559H496.244V42.5354H483.192V49.1228H496.244V55.7742H483.192V65.3036H496.244V72.1086H476.273V35.7559Z" fill="black"/>
                    <path d="M500.139 35.7559H507.611L514.438 48.8541L521.228 35.7559H528.609L517.898 56.3499V72.1086H510.889V56.3499L500.139 35.7559Z" fill="black"/>
                    <path d="M548.784 35.7559H552.436V51.0159H571.056V35.7559H574.721V72.1469H571.056V54.5846H552.436V72.1469H548.784V35.7559Z" fill="black"/>
                    <path d="M601.03 34.8481C603.603 34.7818 606.162 35.2362 608.555 36.1839C610.947 37.1316 613.119 38.5526 614.943 40.3611C617.621 43.0477 619.44 46.4618 620.172 50.1739C620.904 53.8861 620.517 57.7306 619.059 61.2246C617.601 64.7186 615.136 67.7058 611.977 69.8108C608.817 71.9159 605.102 73.0447 601.3 73.0554C598.752 73.112 596.22 72.6499 593.858 71.6975C591.496 70.745 589.355 69.3224 587.567 67.5169C585.765 65.7807 584.343 63.6949 583.389 61.3887C582.432 59.0826 581.963 56.6056 582.011 54.1117C581.991 50.7024 582.879 47.3485 584.584 44.3903C586.218 41.4717 588.618 39.0492 591.527 37.3808C594.412 35.7107 597.692 34.8364 601.03 34.8481ZM601.197 38.3786C598.48 38.3745 595.814 39.1038 593.482 40.4891C591.11 41.8356 589.146 43.7931 587.797 46.1556C586.424 48.5775 585.718 51.3181 585.754 54.0989C585.742 56.121 586.135 58.1254 586.906 59.9964C587.676 61.8676 588.812 63.5688 590.246 65.0023C591.679 66.4358 593.384 67.5733 595.26 68.3495C597.138 69.1256 599.15 69.5252 601.184 69.525C603.948 69.5425 606.668 68.8322 609.065 67.4657C611.434 66.1444 613.39 64.2021 614.724 61.8503C616.082 59.4325 616.779 56.7022 616.743 53.9325C616.782 51.1868 616.086 48.4804 614.724 46.0915C613.318 43.7641 611.334 41.8359 608.964 40.4917C606.592 39.1476 603.913 38.4331 601.184 38.4168L601.197 38.3786Z" fill="black"/>
                    <path d="M626.207 72.1469L631.453 35.7559H632.045L646.91 65.6106L661.633 35.7559H662.225L667.483 72.1469H663.895L660.283 46.1168L647.424 72.1343H646.485L633.395 45.9121L629.807 72.1343L626.207 72.1469Z" fill="black"/>
                    <path d="M674.698 35.7559H695.658V39.3247H678.35V50.7216H695.502V54.2904H678.35V68.5782H695.502V72.1469H674.698V35.7559Z" fill="black"/>
                    <path d="M698.189 65.3679L701.301 63.5131C703.488 67.5211 706.017 69.525 708.889 69.525C710.092 69.5329 711.277 69.2382 712.335 68.6681C713.359 68.1542 714.216 67.3599 714.804 66.3784C715.358 65.4592 715.653 64.4067 715.653 63.3341C715.61 62.0361 715.161 60.7839 714.366 59.7525C712.572 57.5188 710.463 55.5543 708.104 53.9197C706.014 52.4913 704.101 50.821 702.408 48.9439C701.156 47.3563 700.473 45.3978 700.466 43.3797C700.45 41.8624 700.845 40.3687 701.61 39.0564C702.374 37.7525 703.487 36.6853 704.826 35.9737C706.208 35.2224 707.763 34.8349 709.338 34.848C711.035 34.8432 712.704 35.2846 714.173 36.1272C716.064 37.357 717.688 38.9536 718.945 40.8215L715.962 43.0727C715.005 41.6808 713.812 40.4645 712.438 39.4784C711.483 38.9089 710.388 38.6124 709.275 38.6214C707.944 38.5569 706.641 39.0165 705.648 39.9006C705.195 40.3197 704.837 40.829 704.595 41.3955C704.353 41.9619 704.235 42.5727 704.247 43.188C704.247 43.9822 704.419 44.7671 704.749 45.4904C705.197 46.4045 705.811 47.2285 706.561 47.9206C707.037 48.3812 708.619 49.5963 711.28 51.5535C713.788 53.2431 715.991 55.3402 717.8 57.7571C718.91 59.3725 719.522 61.2753 719.561 63.2318C719.567 64.5231 719.302 65.8014 718.781 66.9845C718.261 68.1676 717.498 69.229 716.54 70.1007C715.574 71.0504 714.427 71.7977 713.165 72.2985C711.905 72.7995 710.555 73.0438 709.198 73.0172C707.05 73.0406 704.946 72.426 703.153 71.2519C701.046 69.7176 699.343 67.6988 698.189 65.3679Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M56.5513 26.4824H63.3664V33.249H56.5513V26.4824ZM66.7355 36.434H73.5377V43.2134H66.7355V36.434ZM56.5513 36.434H63.3664V43.2134H56.5513V36.434ZM66.7355 26.4824H73.5377V33.249H66.7355V26.4824Z" fill="#D29A3A"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4_534">
                    <rect width="719.19" height="106.244" fill="white" transform="translate(0.410004 0.823242)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className="text-[#3A4F66] text-3xl mb-8">Building communities throughout the Central Valley</p>

            <div className="space-y-6 text-[#3A4F66] text-lg">
              <p>For More Information about PASEO, Please Call or Text</p>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Stephanie Stine<br />
                  Community Sales Manager<br />
                  209-308-9000<br />
                  DRE# 02189834
                </p>
                
                <p className="text-lg leading-relaxed">
                  Hours<br />
                  Monday – Closed<br />
                  Tuesday – Saturday 10am – 5pm<br />
                  Sunday – 11am – 4pm
                </p>
                
                <p className="text-lg">154 Montage Drive, Merced, CA 95348</p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center items-center gap-8 my-8">
              <Link to="tel:209-308-9000" className="flex items-center gap-2 text-black font-bold text-lg">
                <Phone className="w-5 h-5 text-brand-gold" />
                209-308-9000
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-black font-bold text-xl">
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                Send Message
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex justify-center mb-8">
              <Link to="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
            </div>

            {/* Equal Housing */}
            <div className="flex justify-center mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3e6ac3f800323adc39b4a8948c4932c2680106f2?width=203"
                alt="Equal Housing Opportunity"
                className="w-[102px] h-[109px]"
              />
            </div>

            {/* Footer Links */}
            <div className="flex justify-center items-center gap-6 text-black font-medium">
              <span>® All Rights Reserved</span>
              <div className="w-px h-6 bg-gray-300"></div>
              <Link to="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
