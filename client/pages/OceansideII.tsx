import React from "react";

const OceansideII = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[87px]">
            {/* Logo */}
            <div className="flex items-center">
              <svg
                width="359"
                height="54"
                viewBox="0 0 359 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_31_658)">
                  <mask
                    id="mask0_31_658"
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
                  <g mask="url(#mask0_31_658)">
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
                  <clipPath id="clip0_31_658">
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

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-black uppercase text-sm font-normal flex items-center space-x-2">
                  <span>About</span>
                  <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.39998 2.68666L4.27998 5.56666L7.15998 2.68666L8.27998 3.27333L4.27998 7.27333L0.279984 3.27333L1.39998 2.68666Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <button className="text-brand-gold uppercase text-sm font-normal flex items-center space-x-2 border-b-2 border-brand-gold">
                  <span>Floor Plans</span>
                  <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.25 2.68666L4.13001 5.56666L7.01001 2.68666L8.13001 3.27333L4.13001 7.27333L0.130005 3.27333L1.25 2.68666Z"
                      fill="#D29A3A"
                    />
                  </svg>
                </button>
              </div>
              <button className="text-black uppercase text-sm font-normal">
                Community
              </button>
              <button className="text-black uppercase text-sm font-normal">
                Contact
              </button>
            </nav>

            {/* View Listings Button */}
            <button className="bg-brand-gold text-white px-5 py-3 rounded text-sm font-medium flex items-center space-x-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14.11 4.6L9.41001 0.9C9.01001 0.6 8.61001 0.5 8.11001 0.5C7.61001 0.5 7.21001 0.6 6.81001 0.9L2.11001 4.6C1.41001 5.2 1.01001 6.1 1.01001 7V14.1C1.01001 14.9 1.61001 15.5 2.41001 15.5H13.81C14.61 15.5 15.21 14.9 15.21 14.1V7C15.21 6.1 14.81 5.2 14.11 4.6ZM9.61001 14H6.61001V8.2C6.61001 7.8 6.91001 7.5 7.21001 7.5H8.91001C9.31001 7.5 9.61001 7.8 9.61001 8.2V14ZM13.71 13.8C13.71 13.9 13.61 14 13.51 14H11.11V8.2C11.11 7 10.11 6.1 9.01001 6.1H7.21001C6.01001 6.1 5.11001 7.1 5.11001 8.2V14H2.71001C2.61001 14 2.51001 13.9 2.51001 13.8V7C2.51001 6.5 2.71001 6 3.11001 5.7L7.61001 2.2C7.81001 2.1 7.91001 2 8.11001 2C8.31001 2 8.51001 2.1 8.61001 2.2L13.01 5.7C13.41 6 13.61 6.5 13.61 7V13.8H13.71Z"
                  fill="white"
                />
              </svg>
              <span>View Listings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[450px] bg-gray-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2F110-Montage-Front-Photo-.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
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
            src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FOceanside-II-Floor-Plan-1.png"
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
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FLivingroom.jpg"
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
                src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FMaster-Bedroom.jpg"
                alt="Video header"
                className="w-full h-[99px] object-cover"
              />
              <div className="absolute top-6 left-16">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2Fcropped-CVH-icon-2.png"
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
                src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FCVH-icon-2.svg"
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
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09064.jpg"
              alt="Home exterior"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09097.jpg"
              alt="Home exterior view"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09068.jpg"
              alt="Home front"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09151.jpg"
              alt="Interior room"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 2 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09048.jpg"
              alt="Living room"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FMaster-Bedroom.jpg"
              alt="Bedroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FMaster-Bathroom.jpg"
              alt="Bathroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FKitchen.jpg"
              alt="Kitchen"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 3 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDining.jpg"
              alt="Dining area"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09123.jpg"
              alt="Living space"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09147.jpg"
              alt="Master bedroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09054.jpg"
              alt="Bathroom vanity"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 4 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FBedroom-2.jpg"
              alt="Bedroom 2"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FBedroom-3.jpg"
              alt="Bedroom 3"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FStairs.jpg"
              alt="Staircase"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09058.jpg"
              alt="Laundry room"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 5 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09077.jpg"
              alt="Walk-in closet"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FMaster-Bath.jpg"
              alt="Master bathroom"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FKitchen-Breakfast-Bar.jpg"
              alt="Kitchen detail"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09128.jpg"
              alt="Kitchen island"
              className="w-full h-[207px] object-cover"
            />

            {/* Row 6 */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09089.jpg"
              alt="Living room view"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09150.jpg"
              alt="Family room"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09073.jpg"
              alt="Dining room"
              className="w-full h-[207px] object-cover"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FDSC09131.jpg"
              alt="Entry foyer"
              className="w-full h-[207px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F2F4F7] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <svg
                width="720"
                height="107"
                viewBox="0 0 720 107"
                fill="none"
                className="w-80"
              >
                <g clipPath="url(#clip0_31_604)">
                  <mask
                    id="mask0_31_604"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="720"
                    height="107"
                  >
                    <path
                      d="M719.6 0.103027H0.410004V106.347H719.6V0.103027Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_31_604)">
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
                    <path
                      d="M179.944 41.4316L175.083 46.0493C173.694 44.4442 171.979 43.1496 170.051 42.2502C168.122 41.3508 166.025 40.867 163.897 40.8304C162.259 40.808 160.633 41.1124 159.116 41.7255C157.599 42.3384 156.221 43.2477 155.063 44.3997C153.905 45.5516 152.991 46.9226 152.374 48.4318C151.758 49.9411 151.452 51.558 151.475 53.1868C151.442 55.4198 151.991 57.6232 153.069 59.5823C154.117 61.452 155.678 62.9869 157.57 64.0081C159.537 65.089 161.752 65.6444 164 65.6197C165.907 65.6451 167.797 65.2613 169.541 64.4942C171.605 63.4587 173.472 62.0737 175.057 60.4009L179.776 65.3C177.564 67.5741 174.949 69.4215 172.061 70.749C169.451 71.8076 166.651 72.3255 163.832 72.2713C161.26 72.3646 158.695 71.9364 156.295 71.0127C153.894 70.0892 151.707 68.6895 149.867 66.8989C148.065 65.09 146.655 62.9336 145.722 60.5624C144.788 58.191 144.353 55.655 144.441 53.1101C144.377 49.7247 145.229 46.3844 146.91 43.4398C148.607 40.5736 151.056 38.2212 153.995 36.6349C157.028 34.9367 160.454 34.0548 163.934 34.0766C166.943 34.0746 169.918 34.7204 172.653 35.9697C175.456 37.2387 177.944 39.103 179.944 41.4316Z"
                      fill="black"
                    />
                    <path
                      d="M185.961 35.0356H193.021V48.7735H205.25V35.0356H212.283V71.4268H205.25V55.4762H193.034V71.4268H185.961V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M237.95 34.1275C240.441 34.1007 242.911 34.5831 245.206 35.5445C247.502 36.5061 249.575 37.9263 251.298 39.7173C253.109 41.4917 254.539 43.6146 255.499 45.9569C256.458 48.299 256.927 50.8113 256.878 53.34C256.93 55.8425 256.466 58.3289 255.518 60.6473C254.57 62.9656 253.155 65.0668 251.362 66.8219C247.761 70.3634 242.891 72.337 237.828 72.3082C232.764 72.2793 227.919 70.2508 224.358 66.6684C221.447 63.6534 219.591 59.784 219.067 55.6357C218.544 51.4875 219.38 47.2817 221.451 43.6442C223.135 40.7604 225.549 38.3662 228.452 36.7008C231.357 35.0352 234.649 34.1568 238.001 34.1532L237.95 34.1275ZM237.872 40.9069C236.283 40.8696 234.702 41.162 233.233 41.7655C231.762 42.3688 230.435 43.2701 229.335 44.4116C228.179 45.5944 227.278 46.9974 226.684 48.5363C226.089 50.0752 225.814 51.7181 225.876 53.3655C225.799 55.1851 226.154 56.9971 226.907 58.6563C227.663 60.3155 228.797 61.776 230.222 62.9206C232.39 64.7081 235.121 65.6774 237.937 65.658C239.524 65.672 241.097 65.3561 242.553 64.7305C244.009 64.105 245.32 63.1836 246.397 62.0252C248.655 59.6503 249.913 56.5059 249.913 53.2377C249.913 49.9693 248.655 46.825 246.397 44.45C245.302 43.3024 243.978 42.3946 242.511 41.7846C241.043 41.1744 239.464 40.8757 237.872 40.9069Z"
                      fill="black"
                    />
                    <path
                      d="M262.947 35.0356H269.853V71.4268H262.947V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M311.309 41.4316L306.435 46.0493C305.049 44.4434 303.336 43.1478 301.411 42.2484C299.485 41.3487 297.388 40.8656 295.262 40.8304C293.624 40.808 291.999 41.1124 290.481 41.7255C288.964 42.3384 287.586 43.2477 286.427 44.3997C285.27 45.5516 284.356 46.9226 283.74 48.4318C283.124 49.9411 282.818 51.558 282.839 53.1868C282.808 55.418 283.354 57.6199 284.421 59.5823C285.472 61.4496 287.033 62.9836 288.921 64.0081C290.889 65.0874 293.104 65.6426 295.351 65.6198C297.259 65.6467 299.148 65.2628 300.894 64.4942C302.957 63.4588 304.824 62.0737 306.409 60.4009L311.13 65.3C308.918 67.5755 306.303 69.4231 303.413 70.749C300.803 71.8066 298.003 72.3244 295.185 72.2713C292.612 72.3667 290.046 71.9396 287.645 71.016C285.245 70.0923 283.058 68.6913 281.219 66.8989C278.316 63.7907 276.469 59.8535 275.938 55.6438C275.407 51.4341 276.221 47.1648 278.263 43.4398C279.956 40.5712 282.406 38.218 285.347 36.6349C288.375 34.9365 291.798 34.0547 295.275 34.0766C298.284 34.0718 301.259 34.7178 303.992 35.9697C306.801 37.2402 309.297 39.104 311.309 41.4316Z"
                      fill="black"
                    />
                    <path
                      d="M317.418 35.0356H337.386V41.8152H324.335V48.4026H337.386V55.054H324.335V64.5834H337.386V71.3884H317.418V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M355.35 35.0356H362.512L371.72 60.8868L381.054 35.0356H388.204L374.985 71.4268H368.272L355.35 35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M404.933 35.0356H412.006L426.074 71.4268H418.833L415.966 63.9311H401.049L398.132 71.4268H390.904L404.933 35.0356ZM408.508 44.6931L403.609 57.1774H413.395L408.508 44.6931Z"
                      fill="black"
                    />
                    <path
                      d="M431.448 35.0356H438.418V64.8137H448.55V71.4268H431.448V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M453.848 35.0356H460.817V64.8137H470.963V71.4268H453.848V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M476.273 35.0356H496.244V41.8152H483.192V48.4026H496.244V55.054H483.192V64.5834H496.244V71.3884H476.273V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M500.139 35.0356H507.611L514.438 48.1339L521.228 35.0356H528.609L517.898 55.6296V71.3884H510.889V55.6296L500.139 35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M548.784 35.0356H552.436V50.2957H571.056V35.0356H574.721V71.4267H571.056V53.8644H552.436V71.4267H548.784V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M601.03 34.1279C603.603 34.0616 606.162 34.516 608.555 35.4637C610.947 36.4114 613.119 37.8324 614.943 39.6409C617.621 42.3275 619.44 45.7415 620.172 49.4537C620.904 53.1659 620.517 57.0104 619.059 60.5044C617.601 63.9983 615.136 66.9856 611.977 69.0905C608.817 71.1956 605.102 72.3244 601.3 72.3352C598.752 72.3918 596.22 71.9297 593.858 70.9773C591.496 70.0248 589.355 68.6021 587.567 66.7967C585.765 65.0605 584.343 62.9746 583.389 60.6685C582.432 58.3623 581.963 55.8854 582.011 53.3914C581.991 49.9821 582.879 46.6283 584.584 43.6701C586.218 40.7515 588.618 38.329 591.527 36.6606C594.412 34.9905 597.692 34.1162 601.03 34.1279ZM601.197 37.6583C598.48 37.6543 595.814 38.3836 593.482 39.7688C591.11 41.1154 589.146 43.0729 587.797 45.4354C586.424 47.8573 585.718 50.5979 585.754 53.3787C585.742 55.4008 586.135 57.4052 586.906 59.2762C587.676 61.1474 588.812 62.8486 590.246 64.2821C591.679 65.7156 593.384 66.853 595.26 67.6293C597.138 68.4053 599.15 68.805 601.184 68.8048C603.948 68.8223 606.668 68.112 609.065 66.7455C611.434 65.4241 613.39 63.4818 614.724 61.1301C616.082 58.7123 616.779 55.982 616.743 53.2123C616.782 50.4666 616.086 47.7602 614.724 45.3713C613.318 43.0439 611.334 41.1157 608.964 39.7714C606.592 38.4274 603.913 37.7129 601.184 37.6966L601.197 37.6583Z"
                      fill="black"
                    />
                    <path
                      d="M626.207 71.4267L631.453 35.0356H632.045L646.91 64.8904L661.633 35.0356H662.225L667.483 71.4267H663.895L660.283 45.3966L647.424 71.4141H646.485L633.395 45.1919L629.807 71.4141L626.207 71.4267Z"
                      fill="black"
                    />
                    <path
                      d="M674.698 35.0356H695.658V38.6045H678.35V50.0013H695.502V53.5702H678.35V67.858H695.502V71.4267H674.698V35.0356Z"
                      fill="black"
                    />
                    <path
                      d="M698.189 64.6477L701.301 62.7929C703.488 66.8009 706.017 68.8048 708.889 68.8048C710.092 68.8127 711.277 68.518 712.335 67.9478C713.359 67.4339 714.216 66.6397 714.804 65.6582C715.358 64.7389 715.653 63.6865 715.653 62.6139C715.61 61.3159 715.161 60.0637 714.366 59.0323C712.572 56.7986 710.463 54.8341 708.104 53.1995C706.014 51.7711 704.101 50.1008 702.408 48.2237C701.156 46.6361 700.473 44.6776 700.466 42.6595C700.45 41.1422 700.845 39.6485 701.61 38.3362C702.374 37.0323 703.487 35.9651 704.826 35.2535C706.208 34.5022 707.763 34.1147 709.338 34.1278C711.035 34.123 712.704 34.5643 714.173 35.4069C716.064 36.6368 717.688 38.2334 718.945 40.1013L715.962 42.3525C715.005 40.9606 713.812 39.7443 712.438 38.7582C711.483 38.1887 710.388 37.8922 709.275 37.9012C707.944 37.8367 706.641 38.2963 705.648 39.1804C705.195 39.5995 704.837 40.1088 704.595 40.6753C704.353 41.2417 704.235 41.8525 704.247 42.4677C704.247 43.262 704.419 44.0469 704.749 44.7701C705.197 45.6843 705.811 46.5083 706.561 47.2003C707.037 47.661 708.619 48.8761 711.28 50.8332C713.788 52.5228 715.991 54.6199 717.8 57.0369C718.91 58.6523 719.522 60.5551 719.561 62.5116C719.567 63.8028 719.302 65.0812 718.781 66.2643C718.261 67.4473 717.498 68.5088 716.54 69.3805C715.574 70.3302 714.427 71.0775 713.165 71.5783C711.905 72.0793 710.555 72.3236 709.198 72.297C707.05 72.3203 704.946 71.7058 703.153 70.5317C701.046 68.9974 699.343 66.9786 698.189 64.6477Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.5513 25.7622H63.3664V32.5288H56.5513V25.7622ZM66.7355 35.7138H73.5377V42.4932H66.7355V35.7138ZM56.5513 35.7138H63.3664V42.4932H56.5513V35.7138ZM66.7355 25.7622H73.5377V32.5288H66.7355V25.7622Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_31_604">
                    <rect
                      width="719.19"
                      height="106.244"
                      fill="white"
                      transform="translate(0.410004 0.103027)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Tagline */}
            <p className="text-3xl text-brand-text-gray capitalize">
              Building communities throughout the Central Valley
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-brand-text-gray">
                For More Information about PASEO, Please Call or Text
              </p>
              <div className="space-y-2">
                <p className="text-lg text-brand-text-gray">
                  Stephanie Stine
                  <br />
                  Community Sales Manager
                  <br />
                  209-308-9000
                  <br />
                  DRE# 02189834
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-brand-text-gray">
                  Hours
                  <br />
                  Monday – Closed
                  <br />
                  Tuesday – Saturday 10am – 5pm
                  <br />
                  Sunday – 11am – 4pm
                </p>
              </div>
              <p className="text-lg text-brand-text-gray">
                154 Montage Drive, Merced, CA 95348
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center items-center space-x-6">
              <a
                href="tel:209-308-9000"
                className="flex items-center space-x-2 text-black font-bold"
              >
                <span className="text-brand-gold text-xl">📞</span>
                <span>209-308-9000</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-black font-bold"
              >
                <span className="text-brand-gold text-xl">✉️</span>
                <span>Send Message</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center">
              <button className="bg-gray-800 text-white p-3 rounded-full">
                <span className="text-2xl">📘</span>
              </button>
            </div>
          </div>

          {/* Equal Housing Logo */}
          <div className="flex justify-end mt-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Equal_Housing_Opportunity_Logo.svg/200px-Equal_Housing_Opportunity_Logo.svg.png"
              alt="Equal Housing Opportunity"
              className="w-24 h-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-300">
            <div className="flex justify-center items-center space-x-4 text-sm text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-brand-gold">
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
