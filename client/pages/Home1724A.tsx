import React, { useState } from "react";

const Home1724A = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      acceptTerms,
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="w-full h-[87px] bg-white shadow-md">
        <div className="max-w-[1290px] mx-auto px-[35px] h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="359"
              height="54"
              viewBox="0 0 359 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_873)">
                <mask
                  id="mask0_32_873"
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
                <g mask="url(#mask0_32_873)">
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
                <clipPath id="clip0_32_873">
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
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-black text-[15px] font-normal uppercase">
                About
              </span>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.39998 2.68666L4.27998 5.56666L7.15998 2.68666L8.27998 3.27333L4.27998 7.27333L0.279984 3.27333L1.39998 2.68666Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="text-brand-gold text-[15px] font-normal uppercase">
                  Floor Plans
                </span>
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 2.68666L4.13001 5.56666L7.01001 2.68666L8.13001 3.27333L4.13001 7.27333L0.130005 3.27333L1.25 2.68666Z"
                    fill="#D29A3A"
                  />
                </svg>
              </div>
              <div className="w-[125px] h-[2px] bg-brand-gold"></div>
            </div>
            <span className="text-black text-[16px] font-normal uppercase">
              Community
            </span>
            <span className="text-black text-[16px] font-normal uppercase">
              Contact
            </span>
          </nav>

          {/* View Listings Button */}
          <button className="flex items-center space-x-2 bg-brand-gold text-white px-5 py-3 rounded-[3px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.11 4.6L9.41001 0.9C9.01001 0.6 8.61001 0.5 8.11001 0.5C7.61001 0.5 7.21001 0.6 6.81001 0.9L2.11001 4.6C1.41001 5.2 1.01001 6.1 1.01001 7V14.1C1.01001 14.9 1.61001 15.5 2.41001 15.5H13.81C14.61 15.5 15.21 14.9 15.21 14.1V7C15.21 6.1 14.81 5.2 14.11 4.6ZM9.61001 14H6.61001V8.2C6.61001 7.8 6.91001 7.5 7.21001 7.5H8.91001C9.31001 7.5 9.61001 7.8 9.61001 8.2V14ZM13.71 13.8C13.71 13.9 13.61 14 13.51 14H11.11V8.2C11.11 7 10.11 6.1 9.01001 6.1H7.21001C6.01001 6.1 5.11001 7.1 5.11001 8.2V14H2.71001C2.61001 14 2.51001 13.9 2.51001 13.8V7C2.51001 6.5 2.71001 6 3.11001 5.7L7.61001 2.2C7.81001 2.1 7.91001 2 8.11001 2C8.31001 2 8.51001 2.1 8.61001 2.2L13.01 5.7C13.41 6 13.61 6.5 13.61 7V13.8H13.71Z"
                fill="white"
              />
            </svg>
            <span className="text-[14px] font-medium">View Listings</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full h-[750px] bg-[#EDEDED] flex items-center justify-center relative">
          <div className="max-w-[1290px] w-full mx-auto px-[315px] flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-[64px] font-bold leading-[68px] font-inter">
                Skyview
              </h1>
            </div>
            <div
              className="w-[774px] h-[700px] flex items-center justify-center"
              style={{
                background: `url('https://api.builder.io/api/v1/image/assets/TEMP/21225d4119e288a24219c4f54901513a2761bfba?width=1548') lightgray center / cover`,
              }}
            ></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-[1290px] mx-auto px-[315px] pt-[60px] pb-[50px]">
          {/* Elevation Tabs */}
          <div className="flex justify-center mb-[35px]">
            <div className="flex bg-white rounded-[5px] shadow-md">
              <button className="px-5 py-[10px] bg-brand-gold text-white text-[21px] font-normal rounded-l-[5px]">
                Elevation A
              </button>
              <button className="px-5 py-[10px] text-brand-gold text-[21px] font-normal">
                Elevation B
              </button>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-4 gap-5 mb-[50px]">
            <div className="bg-[#F9F5F0] p-4 text-center">
              <div className="text-brand-gold text-[50px] mb-2">🛏</div>
              <div className="text-brand-dark-blue text-[15px] font-bold uppercase mb-2">
                Bedrooms
              </div>
              <div className="text-brand-gold text-[20px] font-bold">4</div>
            </div>
            <div className="bg-[#F9F5F0] p-4 text-center">
              <div className="text-brand-gold text-[50px] mb-2">🚿</div>
              <div className="text-brand-dark-blue text-[15px] font-bold uppercase mb-2">
                Bathrooms
              </div>
              <div className="text-brand-gold text-[19px] font-bold">2.5</div>
            </div>
            <div className="bg-[#F9F5F0] p-4 text-center">
              <div className="text-brand-gold text-[50px] mb-2">📐</div>
              <div className="text-brand-dark-blue text-[15px] font-bold uppercase mb-2">
                Square Footage
              </div>
              <div className="text-brand-gold text-[20px] font-bold">
                1,724 sq. ft
              </div>
            </div>
            <div className="bg-[#F9F5F0] p-4 text-center">
              <div className="text-brand-gold text-[50px] mb-2">🚗</div>
              <div className="text-brand-dark-blue text-[16px] font-bold uppercase mb-2">
                Garage
              </div>
              <div className="text-brand-gold text-[21px] font-bold">
                2 Car Garage
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center space-y-[30px] mb-[50px]">
            <p className="text-brand-text-gray text-[21px] leading-[34.65px] font-inter">
              This inviting two-story home provides a foyer that leads to an
              open floorplan with a spacious living room, dining area and half
              bath designed for convenience and perfect for gatherings. The
              kitchen features a walk-in pantry, granite countertops and plenty
              of cabinet space. The second floor you are met with the laundry
              room, 3 bedrooms, a full bath and a luxurious owner's suite that
              offers beautiful dual vanities.
            </p>
            <p className="text-brand-text-gray text-[21px] leading-[34.65px] font-inter">
              Call today to schedule a tour of the SKYVIEW home at Paseo!
            </p>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="max-w-[1290px] mx-auto px-[315px] py-[20px]">
          <h2 className="text-brand-dark-blue text-[32px] font-bold mb-[20px] font-inter">
            Virtual Tour
          </h2>
          <div className="w-full h-[714px] bg-black flex items-center justify-center relative">
            <div className="text-center text-white">
              <h3 className="text-[28px] font-bold mb-[14px] font-inter">
                We couldn't verify the security of your connection.
              </h3>
              <p className="text-[13px] font-normal font-inter">
                Access to this content has been restricted. Contact your
                internet service provider for help.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[20px] space-x-2">
            <div className="text-brand-text-gray text-[14px]">🖱</div>
            <span className="text-brand-text-gray text-[16px] font-inter">
              Use mouse to drag and scroll to zoom
            </span>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="w-full py-[50px] relative">
          <div className="flex space-x-[12px] px-[10px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0a2c153a2410e1f524378c551edc9d1a7042188b?width=1251"
              alt="Home interior"
              className="w-[625px] h-[417px] object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5d5b6dbaa301e38d20109beeff95d2b2b3ec408?width=1251"
              alt="Home interior"
              className="w-[625px] h-[417px] object-cover"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/901e219c9fe4eaa1a2d02e678470a22aedb88a17?width=1251"
              alt="Home interior"
              className="w-[625px] h-[417px] object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-[10px] top-1/2 transform -translate-y-1/2">
            <svg
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.76 8.43994C38.28 8.43994 37.81 8.53994 37.35 8.73994C36.89 8.93994 36.52 9.17994 36.24 9.45994L18.48 27.4599C17.84 28.0999 17.52 29.0099 17.52 30.1899C17.52 31.3699 17.84 32.2799 18.48 32.9199L36.24 52.1799C36.68 52.6199 37.09 52.9399 37.47 53.1399C37.85 53.3399 38.28 53.4399 38.76 53.4399C39.92 53.4399 40.84 53.0999 41.52 52.4199C41.88 52.0599 42.18 51.6299 42.42 51.1299C42.66 50.6299 42.78 50.1399 42.78 49.6599C42.78 48.4999 42.36 47.5999 41.52 46.9599L26.28 30.1599L41.52 14.4399C42.16 13.7999 42.48 13.0399 42.48 12.1599C42.48 10.9999 42.16 10.0999 41.52 9.45994C41 9.05994 40.54 8.78994 40.14 8.64994C39.74 8.50994 39.28 8.43994 38.76 8.43994Z"
                fill="#EDEDED"
                fillOpacity="0.9"
              />
            </svg>
          </button>
          <button className="absolute right-[10px] top-1/2 transform -translate-y-1/2">
            <svg
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.76 32.9199C42.44 32.2399 42.78 31.3199 42.78 30.1599C42.78 29.6399 42.7 29.1599 42.54 28.7199C42.38 28.2799 42.12 27.9399 41.76 27.6999L24 9.69994C23.6 9.29994 23.19 8.98994 22.77 8.76994C22.35 8.54994 21.84 8.43994 21.24 8.43994C20.24 8.43994 19.42 8.77994 18.78 9.45994C18.38 9.81994 18.07 10.2399 17.85 10.7199C17.63 11.1999 17.52 11.6799 17.52 12.1599C17.52 13.3599 17.84 14.2799 18.48 14.9199L33.78 30.4599L18.24 47.1999C17.6 47.8399 17.28 48.7599 17.28 49.9599C17.28 50.9199 17.68 51.8399 18.48 52.7199C19.28 53.1999 20.2 53.4399 21.24 53.4399C21.76 53.4399 22.26 53.3299 22.74 53.1099C23.22 52.8899 23.64 52.5799 24 52.1799L41.76 32.9199Z"
                fill="#EDEDED"
                fillOpacity="0.9"
              />
            </svg>
          </button>
        </section>

        {/* Floor Plan Section */}
        <section className="max-w-[1290px] mx-auto px-[315px] py-[50px]">
          <h2 className="text-brand-dark-blue text-[34px] font-bold mb-[20px] font-inter">
            Floor Plan
          </h2>
          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/408c95bd15f4b93870135886809bcc369c962c08?width=2160"
              alt="Floor plan 1724"
              className="w-[1080px] h-[1080px] object-contain"
            />
          </div>
        </section>

        {/* Join Interested List CTA */}
        <section className="max-w-[1290px] mx-auto px-[315px] py-[30px]">
          <div className="bg-brand-gold rounded-[5px] p-[30px] flex items-center justify-between">
            <div>
              <h2 className="text-white text-[32px] font-bold leading-[35px] mb-[6px] font-inter">
                Join the
                <br />
                Interested List
              </h2>
              <p className="text-white text-[16px] leading-[26.4px] font-inter">
                Sign-up to stay in the loop with new home releases, builder
                incentives,
                <br />
                special events & more!
              </p>
            </div>
            <button className="bg-white text-black px-[40px] py-[20px] text-[18px] font-normal">
              Register
            </button>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="max-w-[1290px] mx-auto px-[280px] py-[130px] bg-white">
          <div className="text-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e77a025832448c22fb3aef29e7810f44e28495f6?width=216"
              alt="Contact representative"
              className="w-[108px] h-[108px] rounded-full border-[3px] border-brand-gold border-opacity-34 mx-auto mb-[20px]"
            />
            <h2 className="text-brand-dark-blue text-[34px] font-bold mb-[20px] font-inter">
              Get in Touch
            </h2>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="w-[730px] mx-auto space-y-[10px]"
            >
              <div className="grid grid-cols-2 gap-[10px]">
                <div>
                  <label className="block text-brand-text-gray text-[15px] mb-[7px] text-left">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-[3px] px-3"
                  />
                </div>
                <div>
                  <label className="block text-brand-text-gray text-[15px] mb-[7px] text-left">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-[3px] px-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[10px]">
                <div>
                  <label className="block text-brand-text-gray text-[15px] mb-[7px] text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-[3px] px-3"
                  />
                </div>
                <div>
                  <label className="block text-brand-text-gray text-[15px] mb-[7px] text-left">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-[3px] px-3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-text-gray text-[15px] mb-[7px] text-left">
                  How can we help you?
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[170px] border-b border-[#69727D] bg-white rounded-[3px] p-3 resize-none"
                />
              </div>

              <div className="space-y-[10px]">
                <label className="block text-brand-text-gray text-[15px] text-left">
                  Accept Terms of Contacting
                </label>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-[13px] h-[13px] rounded-[2.5px] bg-[#0075FF] mt-1"
                  />
                  <div className="text-brand-text-gray text-[15px] text-left leading-[24.75px]">
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
                className="bg-[#69727D] text-white px-[80px] py-[12.5px] rounded-[3px] text-[15px] font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#F2F4F7] pt-[60px] pb-[40px]">
        <div className="max-w-[1270px] mx-auto px-[325px]">
          {/* Logo */}
          <div className="flex justify-center mb-[20px]">
            <svg
              width="720"
              height="107"
              viewBox="0 0 720 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_819)">
                <mask
                  id="mask0_32_819"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="720"
                  height="107"
                >
                  <path
                    d="M719.6 0.542969H0.410004V106.787H719.6V0.542969Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_32_819)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M63.9836 0.542969L78.8226 11.9272V5.78738H94.3303V24.2195L125.873 48.8938C122.504 48.8938 119.058 48.5868 115.586 48.5868H109.259L63.8679 12.9121L28.9821 40.1574H33.7142V58.628C49.1446 50.173 79.9156 45.6066 101.184 49.0729C73.313 51.0857 46.5179 60.6056 23.6715 76.6124V50.0706H0.410004L63.9836 0.542969Z"
                    fill="#D29A3A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80.6871 59.357C97.4756 53.7503 115.111 51.0674 132.817 51.4263C122.279 52.7297 111.896 55.0559 101.814 58.3721C70.1044 68.8608 45.4928 87.2163 33.8685 106.8L16.8435 101.594C29.7023 84.2998 52.3079 68.5795 80.6871 59.2418V59.357Z"
                    fill="#D29A3A"
                  />
                  <path
                    d="M179.944 41.8715L175.083 46.4892C173.694 44.8841 171.979 43.5896 170.051 42.6901C168.122 41.7908 166.025 41.307 163.897 41.2704C162.259 41.248 160.633 41.5523 159.116 42.1654C157.599 42.7784 156.221 43.6877 155.063 44.8397C153.905 45.9915 152.991 47.3625 152.374 48.8717C151.758 50.381 151.452 51.9979 151.475 53.6267C151.442 55.8598 151.991 58.0631 153.069 60.0223C154.117 61.892 155.678 63.4268 157.57 64.4481C159.537 65.529 161.752 66.0844 164 66.0597C165.907 66.085 167.797 65.7012 169.541 64.9342C171.605 63.8987 173.472 62.5136 175.057 60.8408L179.776 65.74C177.564 68.0141 174.949 69.8614 172.061 71.189C169.451 72.2475 166.651 72.7655 163.832 72.7112C161.26 72.8045 158.695 72.3763 156.295 71.4526C153.894 70.5291 151.707 69.1295 149.867 67.3389C148.065 65.5299 146.655 63.3735 145.722 61.0023C144.788 58.6309 144.353 56.095 144.441 53.55C144.377 50.1646 145.229 46.8243 146.91 43.8797C148.607 41.0136 151.056 38.6612 153.995 37.0749C157.028 35.3766 160.454 34.4948 163.934 34.5165C166.943 34.5145 169.918 35.1603 172.653 36.4096C175.456 37.6787 177.944 39.543 179.944 41.8715Z"
                    fill="black"
                  />
                  <path
                    d="M185.961 35.4756H193.021V49.2134H205.25V35.4756H212.283V71.8668H205.25V55.9161H193.034V71.8668H185.961V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M237.95 34.5675C240.441 34.5407 242.911 35.023 245.206 35.9844C247.502 36.946 249.575 38.3663 251.298 40.1572C253.109 41.9316 254.539 44.0546 255.499 46.3968C256.458 48.7389 256.927 51.2512 256.878 53.78C256.93 56.2824 256.466 58.7689 255.518 61.0873C254.57 63.4055 253.155 65.5067 251.362 67.2618C247.761 70.8034 242.891 72.7769 237.828 72.7481C232.764 72.7192 227.919 70.6907 224.358 67.1084C221.447 64.0933 219.591 60.2239 219.067 56.0757C218.544 51.9274 219.38 47.7216 221.451 44.0841C223.135 41.2004 225.549 38.8061 228.452 37.1407C231.357 35.4751 234.649 34.5967 238.001 34.5931L237.95 34.5675ZM237.872 41.3468C236.283 41.3095 234.702 41.602 233.233 42.2054C231.762 42.8087 230.435 43.71 229.335 44.8516C228.179 46.0343 227.278 47.4374 226.684 48.9763C226.089 50.5152 225.814 52.158 225.876 53.8055C225.799 55.625 226.154 57.4371 226.907 59.0963C227.663 60.7555 228.797 62.2159 230.222 63.3606C232.39 65.1481 235.121 66.1174 237.937 66.0979C239.524 66.112 241.097 65.796 242.553 65.1705C244.009 64.5449 245.32 63.6236 246.397 62.4652C248.655 60.0902 249.913 56.9459 249.913 53.6777C249.913 50.4093 248.655 47.2649 246.397 44.89C245.302 43.7424 243.978 42.8346 242.511 42.2246C241.043 41.6144 239.464 41.3156 237.872 41.3468Z"
                    fill="black"
                  />
                  <path
                    d="M262.947 35.4756H269.853V71.8668H262.947V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M311.309 41.8715L306.435 46.4892C305.049 44.8833 303.336 43.5878 301.411 42.6883C299.485 41.7887 297.388 41.3055 295.262 41.2704C293.624 41.248 291.999 41.5523 290.481 42.1654C288.964 42.7784 287.586 43.6877 286.427 44.8397C285.27 45.9915 284.356 47.3626 283.74 48.8717C283.124 50.381 282.818 51.9979 282.839 53.6267C282.808 55.858 283.354 58.0599 284.421 60.0223C285.472 61.8895 287.033 63.4235 288.921 64.4481C290.889 65.5273 293.104 66.0826 295.351 66.0597C297.259 66.0867 299.148 65.7027 300.894 64.9342C302.957 63.8987 304.824 62.5136 306.409 60.8408L311.13 65.74C308.918 68.0154 306.303 69.8631 303.413 71.189C300.803 72.2465 298.003 72.7643 295.185 72.7112C292.612 72.8067 290.046 72.3796 287.645 71.4559C285.245 70.5322 283.058 69.1313 281.219 67.3389C278.316 64.2307 276.469 60.2934 275.938 56.0837C275.407 51.874 276.221 47.6048 278.263 43.8797C279.956 41.0111 282.406 38.6579 285.347 37.0749C288.375 35.3764 291.798 34.4946 295.275 34.5165C298.284 34.5118 301.259 35.1577 303.992 36.4096C306.801 37.6801 309.297 39.544 311.309 41.8715Z"
                    fill="black"
                  />
                  <path
                    d="M317.418 35.4756H337.386V42.2551H324.335V48.8425H337.386V55.4939H324.335V65.0233H337.386V71.8283H317.418V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M355.35 35.4756H362.512L371.72 61.3267L381.054 35.4756H388.204L374.985 71.8668H368.272L355.35 35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M404.933 35.4756H412.006L426.074 71.8668H418.833L415.966 64.371H401.049L398.132 71.8668H390.904L404.933 35.4756ZM408.508 45.133L403.609 57.6173H413.395L408.508 45.133Z"
                    fill="black"
                  />
                  <path
                    d="M431.448 35.4756H438.418V65.2536H448.55V71.8668H431.448V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M453.848 35.4756H460.817V65.2536H470.963V71.8668H453.848V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M476.273 35.4756H496.244V42.2551H483.192V48.8425H496.244V55.4939H483.192V65.0233H496.244V71.8283H476.273V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M500.139 35.4756H507.611L514.438 48.5738L521.228 35.4756H528.609L517.898 56.0696V71.8283H510.889V56.0696L500.139 35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M548.784 35.4756H552.436V50.7357H571.056V35.4756H574.721V71.8666H571.056V54.3043H552.436V71.8666H548.784V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M601.03 34.5679C603.603 34.5015 606.162 34.9559 608.555 35.9036C610.947 36.8513 613.119 38.2724 614.943 40.0808C617.621 42.7675 619.44 46.1815 620.172 49.8936C620.904 53.6058 620.517 57.4504 619.059 60.9443C617.601 64.4383 615.136 67.4255 611.977 69.5305C608.817 71.6356 605.102 72.7644 601.3 72.7752C598.752 72.8317 596.22 72.3696 593.858 71.4172C591.496 70.4648 589.355 69.0421 587.567 67.2366C585.765 65.5004 584.343 63.4146 583.389 61.1084C582.432 58.8023 581.963 56.3253 582.011 53.8314C581.991 50.4221 582.879 47.0682 584.584 44.1101C586.218 41.1915 588.618 38.7689 591.527 37.1006C594.412 35.4304 597.692 34.5561 601.03 34.5679ZM601.197 38.0983C598.48 38.0942 595.814 38.8235 593.482 40.2088C591.11 41.5553 589.146 43.5128 587.797 45.8753C586.424 48.2972 585.718 51.0378 585.754 53.8186C585.742 55.8407 586.135 57.8451 586.906 59.7162C587.676 61.5874 588.812 63.2886 590.246 64.722C591.679 66.1555 593.384 67.293 595.26 68.0692C597.138 68.8453 599.15 69.2449 601.184 69.2448C603.948 69.2623 606.668 68.5519 609.065 67.1854C611.434 65.8641 613.39 63.9218 614.724 61.57C616.082 59.1522 616.779 56.4219 616.743 53.6522C616.782 50.9066 616.086 48.2001 614.724 45.8113C613.318 43.4839 611.334 41.5556 608.964 40.2114C606.592 38.8673 603.913 38.1529 601.184 38.1365L601.197 38.0983Z"
                    fill="black"
                  />
                  <path
                    d="M626.207 71.8666L631.453 35.4756H632.045L646.91 65.3303L661.633 35.4756H662.225L667.483 71.8666H663.895L660.283 45.8365L647.424 71.854H646.485L633.395 45.6319L629.807 71.854L626.207 71.8666Z"
                    fill="black"
                  />
                  <path
                    d="M674.698 35.4756H695.658V39.0444H678.35V50.4413H695.502V54.0101H678.35V68.2979H695.502V71.8666H674.698V35.4756Z"
                    fill="black"
                  />
                  <path
                    d="M698.189 65.0877L701.301 63.2328C703.488 67.2408 706.017 69.2448 708.889 69.2448C710.092 69.2526 711.277 68.9579 712.335 68.3878C713.359 67.8739 714.216 67.0797 714.804 66.0981C715.358 65.1789 715.653 64.1264 715.653 63.0538C715.61 61.7559 715.161 60.5037 714.366 59.4723C712.572 57.2385 710.463 55.274 708.104 53.6395C706.014 52.2111 704.101 50.5407 702.408 48.6637C701.156 47.076 700.473 45.1176 700.466 43.0994C700.45 41.5821 700.845 40.0885 701.61 38.7761C702.374 37.4722 703.487 36.4051 704.826 35.6934C706.208 34.9422 707.763 34.5546 709.338 34.5677C711.035 34.563 712.704 35.0043 714.173 35.8469C716.064 37.0767 717.688 38.6733 718.945 40.5412L715.962 42.7925C715.005 41.4005 713.812 40.1842 712.438 39.1981C711.483 38.6287 710.388 38.3322 709.275 38.3412C707.944 38.2766 706.641 38.7362 705.648 39.6203C705.195 40.0394 704.837 40.5487 704.595 41.1153C704.353 41.6816 704.235 42.2925 704.247 42.9077C704.247 43.7019 704.419 44.4868 704.749 45.2101C705.197 46.1243 705.811 46.9482 706.561 47.6403C707.037 48.1009 708.619 49.316 711.28 51.2732C713.788 52.9628 715.991 55.0599 717.8 57.4768C718.91 59.0922 719.522 60.995 719.561 62.9515C719.567 64.2428 719.302 65.5211 718.781 66.7042C718.261 67.8873 717.498 68.9487 716.54 69.8204C715.574 70.7701 714.427 71.5174 713.165 72.0182C711.905 72.5192 710.555 72.7636 709.198 72.7369C707.05 72.7603 704.946 72.1457 703.153 70.9716C701.046 69.4373 699.343 67.4185 698.189 65.0877Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M56.5513 26.2021H63.3664V32.9687H56.5513V26.2021ZM66.7355 36.1538H73.5377V42.9331H66.7355V36.1538ZM56.5513 36.1538H63.3664V42.9331H56.5513V36.1538ZM66.7355 26.2021H73.5377V32.9687H66.7355V26.2021Z"
                    fill="#D29A3A"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_32_819">
                  <rect
                    width="719.19"
                    height="106.244"
                    fill="white"
                    transform="translate(0.410004 0.542969)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="text-center space-y-4">
            <p className="text-brand-text-gray text-[30px] leading-[49.5px] font-inter capitalize">
              Building communities throughout the Central Valley
            </p>
            <p className="text-brand-text-gray text-[16px] leading-[26.4px] font-inter">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="text-brand-text-gray text-[18px] leading-[29.7px] font-inter">
              <p>Stephanie Stine</p>
              <p>Community Sales Manager</p>
              <p>209-308-9000</p>
              <p>DRE# 02189834</p>
            </div>
            <div className="text-brand-text-gray text-[18px] leading-[29.7px] font-inter">
              <p>Hours</p>
              <p>Monday – Closed</p>
              <p>Tuesday – Saturday 10am – 5pm</p>
              <p>Sunday – 11am – 4pm</p>
            </div>
            <p className="text-brand-text-gray text-[18px] leading-[29.7px] font-inter">
              154 Montage Drive, Merced, CA 95348
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center space-x-4 mt-[20px]">
            <div className="flex items-center space-x-2">
              <div className="text-brand-gold text-[21px]">📞</div>
              <span className="text-black text-[18px] font-bold">
                209-308-9000
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-brand-gold text-[21px]">✉️</div>
              <span className="text-black text-[21px] font-bold">
                Send Message
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center mt-[20px]">
            <div className="w-[50px] h-[50px] bg-[#262626] rounded-full flex items-center justify-center">
              <div className="text-white text-[25px]">f</div>
            </div>
          </div>

          {/* Equal Housing Logo */}
          <div className="flex justify-end mt-[20px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3e6ac3f800323adc39b4a8948c4932c2680106f2?width=203"
              alt="Equal Housing Opportunity"
              className="w-[102px] h-[109px]"
            />
          </div>

          {/* Footer Bottom */}
          <div className="flex justify-center items-center space-x-2 mt-[20px] text-black text-[16px]">
            <span>® All Rights Reserved</span>
            <div className="w-[1px] h-[26px] bg-[#DDD]"></div>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home1724A;
