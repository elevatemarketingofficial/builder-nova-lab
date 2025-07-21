import { Link } from "react-router-dom";
import { Bed, Bath, Square } from "lucide-react";
import Navigation from "../components/Navigation";

export default function SkyviewII() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <header className="bg-white shadow-[0px_10px_20px_0px_rgba(44,62,80,0.05)] sticky top-0 z-50">
        <div className="max-w-[1290px] mx-auto px-4 h-[87px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[359px] h-[53px] flex items-center justify-center">
              <svg
                width="359"
                height="53"
                viewBox="0 0 359 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_34_1058)">
                  <mask
                    id="mask0_34_1058"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="359"
                    height="54"
                  >
                    <path
                      d="M358.77 0.5H0.000396729V53.5H358.77V0.5Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_34_1058)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.7142 0.5L39.1167 6.17902V3.11619H46.8527V12.3111L62.5878 24.6199C60.9071 24.6199 59.188 24.4668 57.4561 24.4668H54.3001L31.6565 6.67037L14.2536 20.2617H16.6143V29.4758C24.3117 25.258 39.6619 22.9801 50.2717 24.7093C36.3682 25.7133 23.0014 30.4624 11.6045 38.4473V25.207H0.000396729L31.7142 0.5Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.0468 29.8396C48.4218 27.0426 57.2191 25.7043 66.0517 25.8833C60.7951 26.5335 55.6153 27.694 50.586 29.3482C34.7676 34.5806 22.49 43.7372 16.6912 53.5064L8.19827 50.9094C14.6129 42.2824 25.8898 34.4402 40.0468 29.7821V29.8396Z"
                      fill="#D29A3A"
                    />
                    <path
                      d="M89.5614 21.1168L87.1365 23.4204C86.4434 22.6197 85.5881 21.9739 84.6259 21.5252C83.6637 21.0766 82.6176 20.8352 81.556 20.8169C80.739 20.8058 79.9281 20.9576 79.1712 21.2634C78.4144 21.5692 77.7268 22.0228 77.1491 22.5975C76.5715 23.1721 76.1155 23.856 75.8081 24.6089C75.5007 25.3618 75.348 26.1684 75.3592 26.9809C75.343 28.0949 75.617 29.194 76.1547 30.1714C76.6776 31.1041 77.4562 31.8697 78.3998 32.3792C79.381 32.9184 80.4861 33.1955 81.6073 33.1831C82.5589 33.1958 83.5015 33.0043 84.3715 32.6217C85.4013 32.1051 86.3325 31.4142 87.1234 30.5797L89.4774 33.0237C88.3742 34.1581 87.0696 35.0796 85.6288 35.7419C84.3267 36.2699 82.9299 36.5283 81.5237 36.5013C80.2405 36.5478 78.9613 36.3342 77.7637 35.8734C76.5661 35.4127 75.4752 34.7145 74.5574 33.8213C73.6586 32.9189 72.9548 31.8431 72.4893 30.6603C72.0238 29.4773 71.8064 28.2122 71.8504 26.9427C71.8184 25.2539 72.2438 23.5875 73.0821 22.1186C73.9285 20.6888 75.1504 19.5153 76.6165 18.724C78.1297 17.8768 79.8387 17.4369 81.5747 17.4478C83.0759 17.4468 84.5599 17.7689 85.924 18.3921C87.3224 19.0252 88.5634 19.9552 89.5614 21.1168Z"
                      fill="black"
                    />
                    <path
                      d="M92.5629 17.9263H96.0845V24.7795H102.185V17.9263H105.694V36.0801H102.185V28.1231H96.091V36.0801H92.5629V17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M118.498 17.4733C119.74 17.4599 120.973 17.7005 122.117 18.1801C123.263 18.6598 124.297 19.3683 125.156 20.2617C126.06 21.1469 126.773 22.2059 127.252 23.3744C127.73 24.5428 127.964 25.796 127.94 27.0575C127.966 28.3058 127.734 29.5462 127.262 30.7027C126.789 31.8592 126.083 32.9074 125.188 33.7829C123.392 35.5496 120.963 36.5341 118.437 36.5198C115.911 36.5053 113.494 35.4935 111.717 33.7064C110.265 32.2023 109.339 30.2721 109.078 28.2027C108.817 26.1333 109.234 24.0353 110.267 22.2207C111.107 20.7821 112.311 19.5877 113.76 18.757C115.209 17.9261 116.851 17.4879 118.523 17.4861L118.498 17.4733ZM118.459 20.8552C117.666 20.8366 116.878 20.9825 116.145 21.2835C115.411 21.5845 114.749 22.0341 114.2 22.6035C113.623 23.1935 113.174 23.8935 112.877 24.6612C112.581 25.4288 112.444 26.2484 112.475 27.0702C112.436 27.9779 112.613 28.8818 112.989 29.7095C113.366 30.5372 113.932 31.2658 114.643 31.8368C115.724 32.7285 117.086 33.212 118.491 33.2023C119.283 33.2093 120.067 33.0517 120.794 32.7397C121.52 32.4276 122.174 31.968 122.712 31.3901C123.838 30.2054 124.466 28.6368 124.466 27.0064C124.466 25.376 123.838 23.8074 122.712 22.6227C122.165 22.0502 121.505 21.5973 120.773 21.293C120.041 20.9887 119.253 20.8396 118.459 20.8552Z"
                      fill="black"
                    />
                    <path
                      d="M130.967 17.9263H134.412V36.0801H130.967V17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M155.093 21.1168L152.662 23.4204C151.97 22.6193 151.116 21.973 150.155 21.5243C149.195 21.0755 148.148 20.8345 147.088 20.8169C146.271 20.8058 145.46 20.9576 144.703 21.2634C143.946 21.5692 143.259 22.0228 142.68 22.5975C142.103 23.1721 141.647 23.856 141.34 24.6089C141.033 25.3618 140.88 26.1684 140.891 26.9809C140.875 28.094 141.148 29.1924 141.68 30.1714C142.204 31.1029 142.983 31.8681 143.925 32.3792C144.906 32.9176 146.011 33.1946 147.132 33.1831C148.084 33.1966 149.027 33.0051 149.897 32.6217C150.926 32.1051 151.858 31.4142 152.649 30.5797L155.003 33.0237C153.9 34.1588 152.596 35.0805 151.154 35.7419C149.852 36.2695 148.455 36.5278 147.049 36.5013C145.766 36.5489 144.486 36.3358 143.288 35.8751C142.091 35.4143 141 34.7154 140.083 33.8213C138.635 32.2707 137.713 30.3066 137.448 28.2066C137.183 26.1066 137.589 23.9769 138.608 22.1186C139.452 20.6876 140.675 19.5137 142.142 18.724C143.652 17.8767 145.36 17.4368 147.094 17.4478C148.595 17.4454 150.079 17.7676 151.443 18.3921C152.844 19.0259 154.089 19.9557 155.093 21.1168Z"
                      fill="black"
                    />
                    <path
                      d="M158.14 17.9263H168.102V21.3083H161.591V24.5944H168.102V27.9125H161.591V32.6663H168.102V36.061H158.14V17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M177.063 17.9263H180.636L185.229 30.8222L189.886 17.9263H193.452L186.858 36.0801H183.509L177.063 17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M201.797 17.9263H205.326L212.344 36.0801H208.732L207.301 32.3408H199.86L198.405 36.0801H194.799L201.797 17.9263ZM203.581 22.7439L201.137 28.9718H206.019L203.581 22.7439Z"
                      fill="black"
                    />
                    <path
                      d="M215.025 17.9263H218.501V32.7812H223.556V36.0801H215.025V17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M226.199 17.9263H229.676V32.7812H234.737V36.0801H226.199V17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M237.386 17.9263H247.348V21.3083H240.837V24.5944H247.348V27.9125H240.837V32.6663H247.348V36.061H237.386V17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M249.291 17.9263H253.018L256.424 24.4604L259.811 17.9263H263.494L258.15 28.1997V36.061H254.654V28.1997L249.291 17.9263Z"
                      fill="black"
                    />
                    <path
                      d="M273.558 17.9262H275.379V25.5388H284.668V17.9262H286.496V36.08H284.668V27.319H275.379V36.08H273.558V17.9262Z"
                      fill="black"
                    />
                    <path
                      d="M299.621 17.4733C300.904 17.4402 302.181 17.6669 303.375 18.1396C304.568 18.6124 305.651 19.3213 306.561 20.2234C307.897 21.5637 308.805 23.2668 309.17 25.1186C309.535 26.9704 309.342 28.8883 308.615 30.6312C307.887 32.3742 306.658 33.8644 305.081 34.9145C303.505 35.9646 301.652 36.5277 299.755 36.5331C298.484 36.5613 297.221 36.3308 296.043 35.8556C294.865 35.3805 293.797 34.6708 292.904 33.7701C292.006 32.904 291.297 31.8635 290.82 30.7131C290.343 29.5627 290.109 28.327 290.133 27.0829C290.123 25.3822 290.566 23.7091 291.416 22.2334C292.232 20.7775 293.429 19.569 294.88 18.7367C296.319 17.9036 297.956 17.4674 299.621 17.4733ZM299.704 19.2344C298.349 19.2324 297.019 19.5962 295.855 20.2873C294.672 20.959 293.692 21.9355 293.019 23.114C292.335 24.3222 291.982 25.6894 292 27.0766C291.995 28.0853 292.19 29.0852 292.575 30.0186C292.959 30.952 293.526 31.8007 294.241 32.5158C294.956 33.2308 295.806 33.7983 296.743 34.1855C297.679 34.5726 298.683 34.772 299.697 34.7719C301.076 34.7806 302.433 34.4263 303.629 33.7446C304.811 33.0855 305.787 32.1165 306.452 30.9434C307.13 29.7372 307.477 28.3752 307.459 26.9936C307.479 25.6239 307.131 24.2738 306.452 23.0821C305.751 21.9211 304.761 20.9591 303.579 20.2886C302.396 19.6181 301.059 19.2617 299.697 19.2535L299.704 19.2344Z"
                      fill="black"
                    />
                    <path
                      d="M312.18 36.08L314.798 17.9262H315.093L322.508 32.8193L329.853 17.9262H330.148L332.771 36.08H330.981L329.179 23.0948L322.765 36.0737H322.296L315.766 22.9927L313.976 36.0737L312.18 36.08Z"
                      fill="black"
                    />
                    <path
                      d="M336.37 17.9262H346.826V19.7066H338.192V25.3919H346.748V27.1722H338.192V34.2997H346.748V36.08H336.37V17.9262Z"
                      fill="black"
                    />
                    <path
                      d="M348.089 32.6982L349.641 31.7729C350.732 33.7723 351.994 34.7719 353.426 34.7719C354.027 34.7758 354.618 34.6288 355.145 34.3444C355.657 34.0881 356.084 33.6919 356.377 33.2022C356.654 32.7437 356.8 32.2186 356.8 31.6836C356.779 31.0361 356.555 30.4114 356.159 29.8969C355.263 28.7826 354.212 27.8026 353.035 26.9872C351.992 26.2746 351.038 25.4414 350.193 24.505C349.569 23.713 349.228 22.736 349.225 21.7293C349.217 20.9724 349.414 20.2273 349.796 19.5726C350.176 18.9222 350.732 18.3898 351.399 18.0348C352.089 17.66 352.865 17.4667 353.651 17.4732C354.497 17.4708 355.33 17.691 356.063 18.1113C357.006 18.7248 357.816 19.5213 358.443 20.4531L356.955 21.5761C356.478 20.8818 355.882 20.275 355.197 19.7831C354.72 19.499 354.174 19.3511 353.619 19.3556C352.955 19.3234 352.305 19.5527 351.81 19.9937C351.584 20.2028 351.405 20.4569 351.284 20.7395C351.164 21.022 351.105 21.3267 351.111 21.6336C351.111 22.0298 351.196 22.4214 351.361 22.7822C351.584 23.2382 351.891 23.6493 352.265 23.9945C352.503 24.2243 353.292 24.8304 354.619 25.8068C355.87 26.6496 356.969 27.6958 357.872 28.9015C358.426 29.7073 358.731 30.6565 358.75 31.6325C358.753 32.2767 358.621 32.9144 358.361 33.5046C358.102 34.0947 357.721 34.6243 357.243 35.0591C356.761 35.5328 356.189 35.9056 355.559 36.1555C354.931 36.4054 354.257 36.5273 353.581 36.514C352.509 36.5257 351.46 36.2191 350.565 35.6334C349.514 34.868 348.665 33.8609 348.089 32.6982Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.0066 13.3001H31.4063V16.6756H28.0066V13.3001ZM33.087 18.2645H36.4803V21.6463H33.087V18.2645ZM28.0066 18.2645H31.4063V21.6463H28.0066V18.2645ZM33.087 13.3001H36.4803V16.6756H33.087V13.3001Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_34_1058">
                    <rect
                      width="358.769"
                      height="53"
                      fill="white"
                      transform="translate(0.000396729 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* View Listings Button */}
          <Link
            to="/listings"
            className="bg-[#D29A3A] text-white px-5 py-3 rounded-sm text-[14px] font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.11 4.6L9.41001 0.9C9.01001 0.6 8.61001 0.5 8.11001 0.5C7.61001 0.5 7.21001 0.6 6.81001 0.9L2.11001 4.6C1.41001 5.2 1.01001 6.1 1.01001 7V14.1C1.01001 14.9 1.61001 15.5 2.41001 15.5H13.81C14.61 15.5 15.21 14.9 15.21 14.1V7C15.21 6.1 14.81 5.2 14.11 4.6ZM9.61001 14H6.61001V8.2C6.61001 7.8 6.91001 7.5 7.21001 7.5H8.91001C9.31001 7.5 9.61001 7.8 9.61001 8.2V14ZM13.71 13.8C13.71 13.9 13.61 14 13.51 14H11.11V8.2C11.11 7 10.11 6.1 9.01001 6.1H7.21001C6.01001 6.1 5.11001 7.1 5.11001 8.2V14H2.71001C2.61001 14 2.51001 13.9 2.51001 13.8V7C2.51001 6.5 2.71001 6 3.11001 5.7L7.61001 2.2C7.81001 2.1 7.91001 2 8.11001 2C8.31001 2 8.51001 2.1 8.61001 2.2L13.01 5.7C13.41 6 13.61 6.5 13.61 7V13.8H13.71Z" />
            </svg>
            View Listings
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://api.builder.io/api/v1/image/assets/TEMP/cb2ed8d9e8a4689f6202d7208e300c36eea7e0d5?width=3840)`,
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
                <span className="text-[17px] font-bold text-black">4 Bedrooms</span>
              </div>

              {/* Divider */}
              <div className="w-[15px] h-[16px] flex items-center justify-center">
                <div className="w-px h-4 bg-brand-gold"></div>
              </div>

              {/* 2.5 Baths */}
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-brand-gold" />
                <span className="text-[16px] font-bold text-black">2.5 BATHS</span>
              </div>

              {/* Divider */}
              <div className="w-[15px] h-[16px] flex items-center justify-center">
                <div className="w-px h-4 bg-brand-gold"></div>
              </div>

              {/* Square Footage */}
              <div className="flex items-center gap-2">
                <Square className="w-4 h-4 text-brand-gold" />
                <span className="text-[17px] font-bold text-black">1,824 SQ. FT.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plan Section */}
        <section className="py-16 flex justify-center px-4">
          <div className="max-w-[1270px] w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5102e00b2bc37abf224426f193d9b87c9478a76?width=2540"
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
                      <path d="M27 10L0 0V20L27 10Z" fill="white"/>
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
                      <path d="M22.17 8.93994H11.57C10.67 8.93994 9.87 9.73994 9.87 10.6399V22.9399H11.57V10.6399H22.17V8.93994ZM24.87 12.4399H15.17C14.17 12.4399 13.37 13.2399 13.37 14.2399V26.5399C13.37 27.5399 14.17 28.3399 15.17 28.3399H24.87C25.87 28.3399 26.67 27.5399 26.67 26.5399V14.1399C26.57 13.2399 25.77 12.4399 24.87 12.4399ZM24.87 26.5399H15.17V14.1399H24.87V26.5399Z" fill="white" stroke="black" strokeOpacity="0.15" strokeWidth="2"/>
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
              {/* Row 1 */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d621e9441242197b219aba06865932945dd18c5e?width=620"
                  alt="Skyview II Photo 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a50c18a00a097d2c776eda512b9b70b6308b4a2f?width=620"
                  alt="Skyview II Photo 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c72ec278a9ca88b46c83eb01fdc469fceaddf760?width=620"
                  alt="Skyview II Photo 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/616fc2b45ff3475798dd789fc22c191eb78b3f0c?width=620"
                  alt="Skyview II Photo 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 2 */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ccddaf232d74a44f515f19692b726e173dbae4b0?width=620"
                  alt="Skyview II Photo 5"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dc76bda472466500ea8fabecfda4e23c24349981?width=620"
                  alt="Skyview II Photo 6"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/afe82b70013060b09851ddd6f4a8a3355738b4d8?width=620"
                  alt="Skyview II Photo 7"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f4a4153f1860aef68189ec8c33337d5c4291780e?width=620"
                  alt="Skyview II Photo 8"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 3 */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d9c2e0a4aa3a5d42c7c715f7baef388389e3cd14?width=620"
                  alt="Skyview II Photo 9"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0f6754e42b48b0be7f26f517aa498308ccc4edd5?width=620"
                  alt="Skyview II Photo 10"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6f8ec490a38919a3e1c7f0103adda1788462a4a4?width=620"
                  alt="Skyview II Photo 11"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7733bf3aa2b3ae0f6e167a1f49b4ee5d0d136355?width=620"
                  alt="Skyview II Photo 12"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 4 */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/70a95601e5cee18eb736f7344ecb0cac876d3cc5?width=620"
                  alt="Skyview II Photo 13"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6f119fd086428d07c888ef2ac21cccf9ecea2fb?width=620"
                  alt="Skyview II Photo 14"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1a93ca7de48300b5e7374a18f78e7ea858d0bbc5?width=620"
                  alt="Skyview II Photo 15"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/07170038f374d105b26fedcf032a85bcc44681a8?width=620"
                  alt="Skyview II Photo 16"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 5 - Only 2 images */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/31a81c5161dfd77666648f32b191b9c8b8c18379?width=620"
                  alt="Skyview II Photo 17"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a02a0f16f6e5bf3840cc5923867237c8a0fe690f?width=620"
                  alt="Skyview II Photo 18"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#F2F4F7] py-16">
          <div className="max-w-[1270px] mx-auto px-4 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <svg
                width="719"
                height="106"
                viewBox="0 0 720 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[400px] h-[59px] sm:w-[600px] sm:h-[88px] lg:w-[719px] lg:h-[106px]"
              >
                <g clipPath="url(#clip0_2_93)">
                  <mask
                    id="mask0_2_93"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="720"
                    height="107"
                  >
                    <path d="M719.6 0.103027H0.410004V106.347H719.6V0.103027Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_2_93)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.9836 0.103027L78.8226 11.4872V5.34744H94.3303V23.7796L125.873 48.4538C122.504 48.4538 119.058 48.1469 115.586 48.1469H109.259L63.8679 12.4722L28.9821 39.7175H33.7142V58.1881C49.1446 49.733 79.9156 45.1667 101.184 48.633C73.313 50.6457 46.5179 60.1657 23.6715 76.1724V49.6307H0.410004L63.9836 0.103027Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80.6871 58.9171C97.4756 53.3103 115.111 50.6274 132.817 50.9864C122.279 52.2897 111.896 54.616 101.814 57.9321C70.1044 68.4209 45.4928 86.7764 33.8685 106.36L16.8435 101.154C29.7023 83.8599 52.3079 68.1395 80.6871 58.8018V58.9171Z"
                      fill="#D29A3A"
                    />
                    {/* Additional logo paths would continue here */}
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2_93">
                    <rect width="719.19" height="106.244" fill="white" transform="translate(0.410004 0.103027)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className="text-[#3A4F66] text-[30px] leading-[49.5px] mb-8 capitalize">
              Building communities throughout the Central Valley
            </p>

            <p className="text-[#3A4F66] text-[16px] leading-[26.4px] mb-8">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="mb-8">
              <p className="text-[#3A4F66] text-[18px] leading-[29.7px]">
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
              <p className="text-[#3A4F66] text-[18px] leading-[29.7px]">
                <span>Hours</span>
                <br />
                <span>Monday – Closed</span>
                <br />
                <span>Tuesday – Saturday 10am – 5pm</span>
                <br />
                <span>Sunday – 11am – 4pm</span>
              </p>
            </div>

            <p className="text-[#3A4F66] text-[18px] leading-[29.7px] mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>

            <div className="flex justify-center items-center gap-4 mb-8">
              <a
                href="tel:209-308-9000"
                className="flex items-center gap-2 text-black text-[18px] font-bold"
              >
                <span className="text-[#D29A3A]">📞</span>
                <span>209-308-9000</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 text-black text-[21px] font-bold"
              >
                <span className="text-[#D29A3A]">💬</span>
                <span>Send Message</span>
              </a>
            </div>

            <div className="flex justify-center mb-8">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-[#262626] rounded-full"
              >
                <span className="text-white text-[25px]">🔗</span>
              </a>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3e6ac3f800323adc39b4a8948c4932c2680106f2?width=203"
                alt="Equal Housing Opportunity"
                className="w-[102px] h-[109px]"
              />
            </div>

            <div className="flex justify-center items-center gap-2 text-black">
              <span className="text-[16px] font-medium">® All Rights Reserved</span>
              <span className="text-gray-300">|</span>
              <Link
                to="/privacy"
                className="text-[16px] font-medium hover:text-[#D29A3A] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
