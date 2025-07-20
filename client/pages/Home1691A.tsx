import React, { useState } from "react";

const Home1691A = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    acceptTerms: false,
  });

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
                <g clipPath="url(#clip0_26_264)">
                  <mask
                    id="mask0_26_264"
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
                  <g mask="url(#mask0_26_264)">
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
                  <clipPath id="clip0_26_264">
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
                src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2F1691A-1.jpg"
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

          {/* Virtual Tour Embed */}
          <div className="bg-black h-[600px] relative rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/75 to-transparent p-4">
              <h3 className="text-white text-center text-sm">
                Kitchen / Dining
              </h3>
            </div>

            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#EDEDED]/90 rounded-full p-4">
              <svg width="60" height="60" viewBox="0 0 60 61" fill="none">
                <path
                  d="M38.76 8.44995C38.28 8.44995 37.81 8.54995 37.35 8.74995C36.89 8.94995 36.52 9.18995 36.24 9.46995L18.48 27.47C17.84 28.11 17.52 29.02 17.52 30.2C17.52 31.38 17.84 32.29 18.48 32.93L36.24 52.19C36.68 52.63 37.09 52.95 37.47 53.15C37.85 53.35 38.28 53.45 38.76 53.45C39.92 53.45 40.84 53.11 41.52 52.43C41.88 52.07 42.18 51.64 42.42 51.14C42.66 50.64 42.78 50.15 42.78 49.67C42.78 48.51 42.36 47.61 41.52 46.97L26.28 30.17L41.52 14.45C42.16 13.81 42.48 13.05 42.48 12.17C42.48 11.01 42.16 10.11 41.52 9.46995C41 9.06995 40.54 8.79995 40.14 8.65995C39.74 8.51995 39.28 8.44995 38.76 8.44995Z"
                  fill="#EDEDED"
                  fillOpacity="0.9"
                />
              </svg>
            </button>

            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#EDEDED]/90 rounded-full p-4">
              <svg width="60" height="60" viewBox="0 0 60 61" fill="none">
                <path
                  d="M41.76 32.93C42.44 32.25 42.78 31.33 42.78 30.17C42.78 29.65 42.7 29.17 42.54 28.73C42.38 28.29 42.12 27.95 41.76 27.71L24 9.70995C23.6 9.30995 23.19 8.99995 22.77 8.77995C22.35 8.55995 21.84 8.44995 21.24 8.44995C20.24 8.44995 19.42 8.78995 18.78 9.46995C18.38 9.82995 18.07 10.25 17.85 10.73C17.63 11.21 17.52 11.69 17.52 12.17C17.52 13.37 17.84 14.29 18.48 14.93L33.78 30.47L18.24 47.21C17.6 47.85 17.28 48.77 17.28 49.97C17.28 50.93 17.68 51.85 18.48 52.73C19.28 53.21 20.2 53.45 21.24 53.45C21.76 53.45 22.26 53.34 22.74 53.12C23.22 52.9 23.64 52.59 24 52.19L41.76 32.93Z"
                  fill="#EDEDED"
                  fillOpacity="0.9"
                />
              </svg>
            </button>

            {/* Room selection sidebar */}
            <div className="absolute right-8 top-8 bg-white rounded shadow-lg p-4 w-56">
              <h4 className="text-sm font-bold text-red-500 mb-4">1691</h4>
              <div className="space-y-2">
                <div className="bg-red-500 text-white px-3 py-2 rounded text-sm">
                  Kitchen / Dining
                </div>
                <div className="text-gray-600 px-3 py-2 text-sm">
                  Living Room
                </div>
                <div className="text-gray-600 px-3 py-2 text-sm">Bedroom 4</div>
                <div className="text-gray-600 px-3 py-2 text-sm">Bedroom 2</div>
                <div className="text-gray-600 px-3 py-2 text-sm">Bath 2</div>
                <div className="text-gray-600 px-3 py-2 text-sm">Bedroom 3</div>
                <div className="text-gray-600 px-3 py-2 text-sm">Laundry</div>
                <div className="text-gray-600 px-3 py-2 text-sm">
                  Master Bedroom
                </div>
                <div className="text-gray-600 px-3 py-2 text-sm">
                  Master Bathroom
                </div>
                <div className="text-gray-600 px-3 py-2 text-sm">
                  Walk in Closet
                </div>
              </div>
            </div>

            {/* Toggle button */}
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded shadow-lg p-3">
              <svg width="30" height="30" viewBox="0 0 31 31" fill="none">
                <g clipPath="url(#clip0_26_118)">
                  <path
                    d="M26.8591 0.134521H4.14091C2.1326 0.134521 0.504547 1.76258 0.504547 3.77089V26.4891C0.504547 28.4974 2.1326 30.1254 4.14091 30.1254H26.8591C28.8674 30.1254 30.4955 28.4974 30.4955 26.4891V3.77089C30.4955 1.76258 28.8674 0.134521 26.8591 0.134521Z"
                    stroke="#8B8B8B"
                    strokeWidth="0.00909091"
                  />
                  <path
                    d="M16.7818 10.8063L18.6545 8.91811L17.8827 8.13993L15.6791 10.3627V14.4736H14.5773V15.5845H15.6791V16.6954H16.7809V15.5845H23.9436V24.4736H16.7809V18.9181H15.6791V20.029H11.2709V21.1399H15.6791V24.4736H7.96546V21.139H9.06728V20.0299H7.96546V15.5845H12.3736V14.4736H7.96546V6.69538H15.6791V7.80629H16.7809V5.58447H6.86364V25.5845H25.0455V14.4736H16.7818V10.8063Z"
                    fill="#28324E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26_118">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5 0.129883)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FLivingroom.jpg"
                alt="Home interior 1"
                className="w-full h-[417px] object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FMaster-Bedroom.jpg"
                alt="Home interior 2"
                className="w-full h-[417px] object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FKitchen.jpg"
                alt="Home interior 3"
                className="w-full h-[417px] object-cover"
              />
            </div>

            {/* Navigation buttons */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg width="60" height="60" viewBox="0 0 60 61" fill="none">
                <path
                  d="M38.76 8.44995C38.28 8.44995 37.81 8.54995 37.35 8.74995C36.89 8.94995 36.52 9.18995 36.24 9.46995L18.48 27.47C17.84 28.11 17.52 29.02 17.52 30.2C17.52 31.38 17.84 32.29 18.48 32.93L36.24 52.19C36.68 52.63 37.09 52.95 37.47 53.15C37.85 53.35 38.28 53.45 38.76 53.45C39.92 53.45 40.84 53.11 41.52 52.43C41.88 52.07 42.18 51.64 42.42 51.14C42.66 50.64 42.78 50.15 42.78 49.67C42.78 48.51 42.36 47.61 41.52 46.97L26.28 30.17L41.52 14.45C42.16 13.81 42.48 13.05 42.48 12.17C42.48 11.01 42.16 10.11 41.52 9.46995C41 9.06995 40.54 8.79995 40.14 8.65995C39.74 8.51995 39.28 8.44995 38.76 8.44995Z"
                  fill="#EDEDED"
                  fillOpacity="0.9"
                />
              </svg>
            </button>

            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg width="60" height="60" viewBox="0 0 60 61" fill="none">
                <path
                  d="M41.76 32.93C42.44 32.25 42.78 31.33 42.78 30.17C42.78 29.65 42.7 29.17 42.54 28.73C42.38 28.29 42.12 27.95 41.76 27.71L24 9.70995C23.6 9.30995 23.19 8.99995 22.77 8.77995C22.35 8.55995 21.84 8.44995 21.24 8.44995C20.24 8.44995 19.42 8.78995 18.78 9.46995C18.38 9.82995 18.07 10.25 17.85 10.73C17.63 11.21 17.52 11.69 17.52 12.17C17.52 13.37 17.84 14.29 18.48 14.93L33.78 30.47L18.24 47.21C17.6 47.85 17.28 48.77 17.28 49.97C17.28 50.93 17.68 51.85 18.48 52.73C19.28 53.21 20.2 53.45 21.24 53.45C21.76 53.45 22.26 53.34 22.74 53.12C23.22 52.9 23.64 52.59 24 52.19L41.76 32.93Z"
                  fill="#EDEDED"
                  fillOpacity="0.9"
                />
              </svg>
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
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2FPLAN-1691A-scaled.jpg"
              alt="Floor plan for 1691 home"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Interested List CTA */}
      <section className="py-12 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join the
                <br />
                Interested List
              </h2>
            </div>
            <div className="flex-1 text-center">
              <p className="text-white text-lg">
                Sign-up to stay in the loop with new home releases, builder
                incentives,
                <br />
                special events & more!
              </p>
            </div>
            <div>
              <button className="bg-white text-black px-8 py-4 rounded font-medium">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FMedia%20Folder%20for%20Choice%20Valley%20Homes%2Fanthony.jpg"
              alt="Contact representative"
              className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-brand-gold/30"
            />
            <h2 className="text-3xl font-bold text-brand-dark-blue">
              Get in Touch
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm text-brand-text-gray mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b border-gray-400 bg-white focus:border-brand-gold outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm text-brand-text-gray mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b border-gray-400 bg-white focus:border-brand-gold outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-brand-text-gray mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b border-gray-400 bg-white focus:border-brand-gold outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm text-brand-text-gray mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b border-gray-400 bg-white focus:border-brand-gold outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-brand-text-gray mb-2"
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-400 bg-white focus:border-brand-gold outline-none resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm text-brand-text-gray mb-2">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600 rounded"
                />
                <div className="text-sm text-brand-text-gray">
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
              className="bg-gray-600 text-white px-12 py-3 rounded text-sm font-medium"
            >
              Submit
            </button>
          </form>
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
                <g clipPath="url(#clip0_26_210)">
                  <mask
                    id="mask0_26_210"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="720"
                    height="107"
                  >
                    <path
                      d="M719.6 0.553223H0.410004V106.797H719.6V0.553223Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_26_210)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.9836 0.553223L78.8226 11.9374V5.79764H94.3303V24.2298L125.873 48.904C122.504 48.904 119.058 48.5971 115.586 48.5971H109.259L63.8679 12.9224L28.9821 40.1677H33.7142V58.6383C49.1446 50.1832 79.9156 45.6169 101.184 49.0832C73.313 51.0959 46.5179 60.6159 23.6715 76.6226V50.0809H0.410004L63.9836 0.553223Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80.6871 59.3673C97.4756 53.7605 115.111 51.0776 132.817 51.4366C122.279 52.7399 111.896 55.0662 101.814 58.3823C70.1044 68.8711 45.4928 87.2266 33.8685 106.81L16.8435 101.604C29.7023 84.3101 52.3079 68.5897 80.6871 59.252V59.3673Z"
                      fill="#D29A3A"
                    />
                    <path
                      d="M179.944 41.8818L175.083 46.4995C173.694 44.8944 171.979 43.5998 170.051 42.7004C168.122 41.801 166.025 41.3172 163.897 41.2806C162.259 41.2582 160.633 41.5626 159.116 42.1757C157.599 42.7886 156.221 43.6979 155.063 44.8499C153.905 46.0018 152.991 47.3728 152.374 48.882C151.758 50.3913 151.452 52.0081 151.475 53.6369C151.442 55.87 151.991 58.0734 153.069 60.0325C154.117 61.9022 155.678 63.4371 157.57 64.4583C159.537 65.5392 161.752 66.0946 164 66.0699C165.907 66.0953 167.797 65.7115 169.541 64.9444C171.605 63.9089 173.472 62.5238 175.057 60.8511L179.776 65.7502C177.564 68.0243 174.949 69.8717 172.061 71.1992C169.451 72.2578 166.651 72.7757 163.832 72.7215C161.26 72.8148 158.695 72.3866 156.295 71.4629C153.894 70.5394 151.707 69.1397 149.867 67.3491C148.065 65.5402 146.655 63.3838 145.722 61.0126C144.788 58.6412 144.353 56.1052 144.441 53.5603C144.377 50.1749 145.229 46.8346 146.91 43.89C148.607 41.0238 151.056 38.6714 153.995 37.0851C157.028 35.3868 160.454 34.505 163.934 34.5268C166.943 34.5248 169.918 35.1706 172.653 36.4199C175.456 37.6889 177.944 39.5532 179.944 41.8818Z"
                      fill="black"
                    />
                    <path
                      d="M185.961 35.4858H193.021V49.2237H205.25V35.4858H212.283V71.877H205.25V55.9264H193.034V71.877H185.961V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M237.95 34.5777C240.441 34.5509 242.911 35.0333 245.206 35.9947C247.502 36.9563 249.575 38.3765 251.298 40.1675C253.109 41.9419 254.539 44.0648 255.499 46.4071C256.458 48.7492 256.927 51.2615 256.878 53.7902C256.93 56.2927 256.466 58.7791 255.518 61.0975C254.57 63.4158 253.155 65.5169 251.362 67.2721C247.761 70.8136 242.891 72.7871 237.828 72.7584C232.764 72.7294 227.919 70.701 224.358 67.1186C221.447 64.1036 219.591 60.2342 219.067 56.0859C218.544 51.9377 219.38 47.7319 221.451 44.0944C223.135 41.2106 225.549 38.8164 228.452 37.1509C231.357 35.4854 234.649 34.607 238.001 34.6034L237.95 34.5777ZM237.872 41.3571C236.283 41.3198 234.702 41.6122 233.233 42.2157C231.762 42.819 230.435 43.7203 229.335 44.8618C228.179 46.0446 227.278 47.4476 226.684 48.9865C226.089 50.5254 225.814 52.1683 225.876 53.8157C225.799 55.6353 226.154 57.4473 226.907 59.1065C227.663 60.7657 228.797 62.2262 230.222 63.3708C232.39 65.1583 235.121 66.1276 237.937 66.1082C239.524 66.1222 241.097 65.8063 242.553 65.1807C244.009 64.5552 245.32 63.6338 246.397 62.4754C248.655 60.1005 249.913 56.9561 249.913 53.6879C249.913 50.4195 248.655 47.2752 246.397 44.9002C245.302 43.7526 243.978 42.8448 242.511 42.2348C241.043 41.6246 239.464 41.3258 237.872 41.3571Z"
                      fill="black"
                    />
                    <path
                      d="M262.947 35.4858H269.853V71.877H262.947V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M311.309 41.8818L306.435 46.4995C305.049 44.8936 303.336 43.598 301.411 42.6986C299.485 41.7989 297.388 41.3158 295.262 41.2806C293.624 41.2582 291.999 41.5626 290.481 42.1757C288.964 42.7886 287.586 43.6979 286.427 44.8499C285.27 46.0018 284.356 47.3728 283.74 48.882C283.124 50.3913 282.818 52.0082 282.839 53.637C282.808 55.8682 283.354 58.0701 284.421 60.0325C285.472 61.8998 287.033 63.4338 288.921 64.4583C290.889 65.5376 293.104 66.0928 295.351 66.0699C297.259 66.0969 299.148 65.713 300.894 64.9444C302.957 63.9089 304.824 62.5239 306.409 60.8511L311.13 65.7502C308.918 68.0257 306.303 69.8733 303.413 71.1992C300.803 72.2568 298.003 72.7746 295.185 72.7215C292.612 72.8169 290.046 72.3898 287.645 71.4662C285.245 70.5425 283.058 69.1415 281.219 67.3491C278.316 64.2409 276.469 60.3037 275.938 56.094C275.407 51.8843 276.221 47.615 278.263 43.89C279.956 41.0214 282.406 38.6682 285.347 37.0851C288.375 35.3867 291.798 34.5049 295.275 34.5268C298.284 34.522 301.259 35.168 303.992 36.4199C306.801 37.6904 309.297 39.5542 311.309 41.8818Z"
                      fill="black"
                    />
                    <path
                      d="M317.418 35.4858H337.386V42.2653H324.335V48.8528H337.386V55.5042H324.335V65.0336H337.386V71.8386H317.418V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M355.35 35.4858H362.512L371.72 61.337L381.054 35.4858H388.204L374.985 71.877H368.272L355.35 35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M404.933 35.4858H412.006L426.074 71.877H418.833L415.966 64.3813H401.049L398.132 71.877H390.904L404.933 35.4858ZM408.508 45.1433L403.609 57.6276H413.395L408.508 45.1433Z"
                      fill="black"
                    />
                    <path
                      d="M431.448 35.4858H438.418V65.2639H448.55V71.877H431.448V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M453.848 35.4858H460.817V65.2639H470.963V71.877H453.848V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M476.273 35.4858H496.244V42.2653H483.192V48.8528H496.244V55.5042H483.192V65.0336H496.244V71.8386H476.273V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M500.139 35.4858H507.611L514.438 48.5841L521.228 35.4858H528.609L517.898 56.0798V71.8386H510.889V56.0798L500.139 35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M548.784 35.4858H552.436V50.7459H571.056V35.4858H574.721V71.8769H571.056V54.3146H552.436V71.8769H548.784V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M601.03 34.5781C603.603 34.5118 606.162 34.9662 608.555 35.9139C610.947 36.8616 613.119 38.2826 614.943 40.091C617.621 42.7777 619.44 46.1917 620.172 49.9039C620.904 53.6161 620.517 57.4606 619.059 60.9546C617.601 64.4485 615.136 67.4358 611.977 69.5407C608.817 71.6458 605.102 72.7746 601.3 72.7854C598.752 72.842 596.22 72.3799 593.858 71.4275C591.496 70.475 589.355 69.0523 587.567 67.2468C585.765 65.5107 584.343 63.4248 583.389 61.1187C582.432 58.8125 581.963 56.3356 582.011 53.8416C581.991 50.4323 582.879 47.0785 584.584 44.1203C586.218 41.2017 588.618 38.7792 591.527 37.1108C594.412 35.4407 597.692 34.5664 601.03 34.5781ZM601.197 38.1085C598.48 38.1044 595.814 38.8338 593.482 40.219C591.11 41.5656 589.146 43.5231 587.797 45.8856C586.424 48.3075 585.718 51.0481 585.754 53.8289C585.742 55.8509 586.135 57.8554 586.906 59.7264C587.676 61.5976 588.812 63.2988 590.246 64.7323C591.679 66.1658 593.384 67.3032 595.26 68.0795C597.138 68.8555 599.15 69.2552 601.184 69.255C603.948 69.2725 606.668 68.5621 609.065 67.1957C611.434 65.8743 613.39 63.932 614.724 61.5803C616.082 59.1625 616.779 56.4322 616.743 53.6625C616.782 50.9168 616.086 48.2104 614.724 45.8215C613.318 43.4941 611.334 41.5659 608.964 40.2216C606.592 38.8776 603.913 38.1631 601.184 38.1468L601.197 38.1085Z"
                      fill="black"
                    />
                    <path
                      d="M626.207 71.8769L631.453 35.4858H632.045L646.91 65.3406L661.633 35.4858H662.225L667.483 71.8769H663.895L660.283 45.8468L647.424 71.8643H646.485L633.395 45.6421L629.807 71.8643L626.207 71.8769Z"
                      fill="black"
                    />
                    <path
                      d="M674.698 35.4858H695.658V39.0547H678.35V50.4515H695.502V54.0203H678.35V68.3082H695.502V71.8769H674.698V35.4858Z"
                      fill="black"
                    />
                    <path
                      d="M698.189 65.0979L701.301 63.2431C703.488 67.2511 706.017 69.255 708.889 69.255C710.092 69.2629 711.277 68.9682 712.335 68.398C713.359 67.8841 714.216 67.0899 714.804 66.1084C715.358 65.1891 715.653 64.1367 715.653 63.0641C715.61 61.7661 715.161 60.5139 714.366 59.4825C712.572 57.2488 710.463 55.2843 708.104 53.6497C706.014 52.2213 704.101 50.551 702.408 48.6739C701.156 47.0863 700.473 45.1278 700.466 43.1097C700.45 41.5923 700.845 40.0987 701.61 38.7864C702.374 37.4825 703.487 36.4153 704.826 35.7037C706.208 34.9524 707.763 34.5649 709.338 34.578C711.035 34.5732 712.704 35.0145 714.173 35.8571C716.064 37.0869 717.688 38.6836 718.945 40.5515L715.962 42.8027C715.005 41.4108 713.812 40.1945 712.438 39.2084C711.483 38.6389 710.388 38.3424 709.275 38.3514C707.944 38.2869 706.641 38.7465 705.648 39.6306C705.195 40.0497 704.837 40.559 704.595 41.1255C704.353 41.6919 704.235 42.3027 704.247 42.9179C704.247 43.7122 704.419 44.4971 704.749 45.2203C705.197 46.1345 705.811 46.9585 706.561 47.6505C707.037 48.1111 708.619 49.3263 711.28 51.2834C713.788 52.973 715.991 55.0701 717.8 57.4871C718.91 59.1025 719.522 61.0052 719.561 62.9618C719.567 64.253 719.302 65.5314 718.781 66.7145C718.261 67.8975 717.498 68.959 716.54 69.8307C715.574 70.7803 714.427 71.5277 713.165 72.0285C711.905 72.5295 710.555 72.7738 709.198 72.7472C707.05 72.7705 704.946 72.156 703.153 70.9819C701.046 69.4476 699.343 67.4288 698.189 65.0979Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.5513 26.2124H63.3664V32.979H56.5513V26.2124ZM66.7355 36.164H73.5377V42.9434H66.7355V36.164ZM56.5513 36.164H63.3664V42.9434H56.5513V36.164ZM66.7355 26.2124H73.5377V32.979H66.7355V26.2124Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_26_210">
                    <rect
                      width="719.19"
                      height="106.244"
                      fill="white"
                      transform="translate(0.410004 0.553223)"
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

export default Home1691A;
