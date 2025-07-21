import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, MessageSquare, Home } from "lucide-react";
import Navigation from "../components/Navigation";

export default function Skyview() {
  const [activeElevation, setActiveElevation] = useState('A');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-[1290px] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[359px] h-[53px] flex items-center">
              <svg
                width="359"
                height="53"
                viewBox="0 0 359 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_1124)">
                  <mask
                    id="mask0_5_1124"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="359"
                    height="53"
                  >
                    <path d="M358.77 0H0.000488281V53H358.77V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_5_1124)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.7143 0L39.1168 5.67902V2.61619H46.8528V11.8111L62.5879 24.1199C60.9072 24.1199 59.1881 23.9668 57.4562 23.9668H54.3002L31.6566 6.17037L14.2537 19.7617H16.6144V28.9758C24.3118 24.758 39.662 22.4801 50.2718 24.2093C36.3683 25.2133 23.0015 29.9624 11.6046 37.9473V24.707H0.000488281L31.7143 0Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.047 29.3396C48.422 26.5426 57.2193 25.2043 66.0519 25.3833C60.7954 26.0335 55.6155 27.194 50.5863 28.8482C34.7678 34.0805 22.4902 43.2372 16.6915 53.0064L8.19849 50.4093C14.6131 41.7823 25.89 33.9402 40.047 29.2821V29.3396Z"
                      fill="#D29A3A"
                    />
                    <path
                      d="M89.5615 20.6168L87.1366 22.9204C86.4435 22.1197 85.5881 21.4739 84.626 21.0252C83.6638 20.5766 82.6177 20.3352 81.5561 20.3169C80.7391 20.3058 79.9282 20.4576 79.1713 20.7634C78.4145 21.0692 77.7269 21.5228 77.1492 22.0975C76.5716 22.6721 76.1156 23.356 75.8082 24.1089C75.5008 24.8618 75.3481 25.6684 75.3593 26.4809C75.3431 27.5949 75.6171 28.694 76.1548 29.6714C76.6777 30.6041 77.4563 31.3697 78.3999 31.8792C79.3811 32.4184 80.4862 32.6955 81.6074 32.6831C82.559 32.6958 83.5016 32.5043 84.3716 32.1217C85.4014 31.6051 86.3326 30.9142 87.1235 30.0797L89.4775 32.5237C88.3743 33.6581 87.0697 34.5796 85.6289 35.2419C84.3267 35.7699 82.93 36.0283 81.5238 36.0013C80.2406 36.0478 78.9614 35.8342 77.7638 35.3734C76.5662 34.9127 75.4753 34.2145 74.5575 33.3213C73.6587 32.4189 72.9549 31.3431 72.4894 30.1603C72.0239 28.9773 71.8065 27.7122 71.8505 26.4427C71.8185 24.7539 72.2439 23.0875 73.0822 21.6186C73.9286 20.1888 75.1505 19.0153 76.6166 18.224C78.1297 17.3768 79.8388 16.9369 81.5748 16.9478C83.0759 16.9468 84.5599 17.2689 85.9241 17.8921C87.3225 18.5252 88.5635 19.4552 89.5615 20.6168Z"
                      fill="black"
                    />
                    <path
                      d="M92.563 17.4263H96.0846V24.2795H102.185V17.4263H105.694V35.5801H102.185V27.6231H96.0912V35.5801H92.563V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M118.498 16.9733C119.74 16.9599 120.973 17.2005 122.117 17.6801C123.263 18.1598 124.297 18.8683 125.156 19.7617C126.06 20.6469 126.773 21.7059 127.252 22.8744C127.73 24.0427 127.964 25.296 127.94 26.5575C127.966 27.8058 127.734 29.0462 127.262 30.2027C126.789 31.3592 126.083 32.4074 125.188 33.2829C123.392 35.0496 120.963 36.0341 118.437 36.0198C115.911 36.0053 113.494 34.9934 111.717 33.2064C110.265 31.7023 109.339 29.772 109.078 27.7027C108.817 25.6333 109.234 23.5352 110.267 21.7207C111.107 20.2821 112.311 19.0877 113.76 18.2569C115.209 17.4261 116.851 16.9879 118.523 16.9861L118.498 16.9733ZM118.459 20.3552C117.666 20.3366 116.878 20.4824 116.145 20.7835C115.411 21.0844 114.749 21.534 114.2 22.1035C113.623 22.6935 113.174 23.3935 112.877 24.1611C112.581 24.9288 112.444 25.7484 112.475 26.5702C112.436 27.4779 112.613 28.3818 112.989 29.2095C113.366 30.0372 113.932 30.7658 114.643 31.3368C115.724 32.2285 117.086 32.712 118.491 32.7023C119.283 32.7093 120.067 32.5517 120.794 32.2396C121.52 31.9276 122.174 31.468 122.712 30.8901C123.838 29.7053 124.466 28.1368 124.466 26.5064C124.466 24.876 123.838 23.3074 122.712 22.1227C122.165 21.5502 121.505 21.0973 120.773 20.793C120.041 20.4886 119.253 20.3396 118.459 20.3552Z"
                      fill="black"
                    />
                    <path
                      d="M130.968 17.4263H134.413V35.5801H130.968V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M155.093 20.6168L152.662 22.9204C151.97 22.1193 151.116 21.473 150.155 21.0243C149.195 20.5755 148.149 20.3345 147.088 20.3169C146.271 20.3058 145.46 20.4576 144.703 20.7634C143.946 21.0692 143.259 21.5228 142.681 22.0975C142.103 22.6721 141.648 23.356 141.34 24.1089C141.033 24.8618 140.88 25.6684 140.891 26.4809C140.875 27.594 141.148 28.6924 141.68 29.6714C142.204 30.6029 142.983 31.3681 143.925 31.8792C144.907 32.4176 146.012 32.6946 147.133 32.6831C148.084 32.6966 149.027 32.5051 149.898 32.1217C150.927 31.6051 151.858 30.9142 152.649 30.0797L155.004 32.5237C153.9 33.6588 152.596 34.5805 151.154 35.2419C149.852 35.7695 148.455 36.0278 147.049 36.0013C145.766 36.0489 144.486 35.8358 143.288 35.3751C142.091 34.9143 141 34.2154 140.083 33.3213C138.635 31.7707 137.713 29.8066 137.448 27.7066C137.183 25.6066 137.589 23.4769 138.608 21.6186C139.453 20.1876 140.675 19.0137 142.142 18.224C143.653 17.3767 145.36 16.9368 147.094 16.9478C148.595 16.9454 150.079 17.2676 151.443 17.8921C152.844 18.5259 154.09 19.4557 155.093 20.6168Z"
                      fill="black"
                    />
                    <path
                      d="M158.14 17.4263H168.102V20.8083H161.591V24.0945H168.102V27.4125H161.591V32.1663H168.102V35.561H158.14V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M177.063 17.4263H180.636L185.229 30.3222L189.886 17.4263H193.452L186.858 35.5801H183.509L177.063 17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M201.798 17.4263H205.326L212.344 35.5801H208.732L207.301 31.8409H199.86L198.405 35.5801H194.799L201.798 17.4263ZM203.581 22.2439L201.137 28.4718H206.019L203.581 22.2439Z"
                      fill="black"
                    />
                    <path
                      d="M215.025 17.4263H218.501V32.2812H223.556V35.5801H215.025V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M226.199 17.4263H229.676V32.2812H234.737V35.5801H226.199V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M237.386 17.4263H247.348V20.8083H240.837V24.0945H247.348V27.4125H240.837V32.1663H247.348V35.561H237.386V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M249.291 17.4263H253.018L256.424 23.9604L259.811 17.4263H263.494L258.15 27.6997V35.561H254.654V27.6997L249.291 17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M273.558 17.4262H275.379V25.0388H284.668V17.4262H286.496V35.58H284.668V26.819H275.379V35.58H273.558V17.4262Z"
                      fill="black"
                    />
                    <path
                      d="M299.621 16.9733C300.904 16.9402 302.181 17.1669 303.375 17.6396C304.568 18.1124 305.651 18.8213 306.561 19.7234C307.897 21.0637 308.804 22.7668 309.17 24.6186C309.535 26.4704 309.342 28.3883 308.614 30.1312C307.887 31.8742 306.658 33.3644 305.081 34.4145C303.505 35.4646 301.652 36.0277 299.755 36.0331C298.484 36.0613 297.221 35.8308 296.043 35.3556C294.865 34.8805 293.796 34.1708 292.904 33.2701C292.006 32.404 291.297 31.3635 290.82 30.2131C290.343 29.0627 290.109 27.827 290.133 26.5829C290.123 24.8822 290.566 23.2091 291.416 21.7334C292.232 20.2775 293.429 19.069 294.88 18.2367C296.319 17.4036 297.956 16.9674 299.621 16.9733ZM299.704 18.7344C298.349 18.7324 297.019 19.0962 295.855 19.7873C294.672 20.459 293.692 21.4355 293.019 22.614C292.335 23.8222 291.982 25.1894 292 26.5766C291.995 27.5853 292.19 28.5852 292.575 29.5186C292.959 30.452 293.526 31.3007 294.241 32.0158C294.956 32.7308 295.806 33.2983 296.742 33.6855C297.679 34.0726 298.683 34.272 299.697 34.2719C301.076 34.2806 302.433 33.9263 303.629 33.2446C304.811 32.5855 305.787 31.6165 306.452 30.4434C307.13 29.2372 307.477 27.8752 307.459 26.4936C307.479 25.1239 307.131 23.7738 306.452 22.5821C305.751 21.4211 304.761 20.4591 303.579 19.7886C302.396 19.1181 301.059 18.7617 299.697 18.7535L299.704 18.7344Z"
                      fill="black"
                    />
                    <path
                      d="M312.18 35.58L314.798 17.4262H315.093L322.508 32.3193L329.853 17.4262H330.148L332.771 35.58H330.981L329.179 22.5948L322.765 35.5737H322.296L315.766 22.4927L313.976 35.5737L312.18 35.58Z"
                      fill="black"
                    />
                    <path
                      d="M336.37 17.4262H346.826V19.2066H338.192V24.8919H346.749V26.6722H338.192V33.7997H346.749V35.58H336.37V17.4262Z"
                      fill="black"
                    />
                    <path
                      d="M348.089 32.1982L349.642 31.2729C350.733 33.2723 351.994 34.2719 353.427 34.2719C354.027 34.2758 354.618 34.1288 355.145 33.8444C355.657 33.5881 356.084 33.1919 356.378 32.7022C356.654 32.2437 356.801 31.7186 356.801 31.1836C356.779 30.5361 356.555 29.9114 356.159 29.3969C355.264 28.2826 354.212 27.3026 353.035 26.4872C351.992 25.7746 351.038 24.9414 350.194 24.005C349.569 23.213 349.228 22.236 349.225 21.2293C349.217 20.4724 349.414 19.7273 349.796 19.0726C350.176 18.4222 350.732 17.8898 351.4 17.5348C352.089 17.16 352.865 16.9667 353.651 16.9732C354.497 16.9708 355.33 17.191 356.063 17.6113C357.006 18.2248 357.816 19.0213 358.443 19.9531L356.955 21.0761C356.478 20.3818 355.883 19.775 355.197 19.2831C354.721 18.999 354.174 18.8511 353.619 18.8556C352.955 18.8234 352.305 19.0527 351.81 19.4937C351.584 19.7028 351.405 19.9569 351.285 20.2395C351.164 20.522 351.105 20.8267 351.111 21.1336C351.111 21.5298 351.197 21.9214 351.361 22.2822C351.585 22.7382 351.891 23.1493 352.266 23.4945C352.503 23.7243 353.292 24.3304 354.62 25.3068C355.87 26.1496 356.969 27.1958 357.872 28.4015C358.426 29.2073 358.731 30.1565 358.75 31.1325C358.754 31.7767 358.621 32.4144 358.361 33.0046C358.102 33.5947 357.721 34.1243 357.243 34.5591C356.762 35.0328 356.189 35.4056 355.56 35.6555C354.931 35.9054 354.257 36.0273 353.581 36.014C352.509 36.0257 351.46 35.7191 350.565 35.1334C349.514 34.368 348.665 33.3609 348.089 32.1982Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.0066 12.8001H31.4063V16.1756H28.0066V12.8001ZM33.087 17.7645H36.4803V21.1464H33.087V17.7645ZM28.0066 17.7645H31.4063V21.1464H28.0066V17.7645ZM33.087 12.8001H36.4803V16.1756H33.087V12.8001Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_5_1124">
                    <rect
                      width="358.769"
                      height="53"
                      fill="white"
                      transform="translate(0.000488281)"
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
            className="hidden md:flex items-center gap-2 bg-[#D29A3A] text-white px-5 py-3 rounded-sm text-[14px] font-medium hover:bg-opacity-90 transition-colors"
          >
            <Home className="w-4 h-4" />
            View Listings
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-[#EDEDED] py-12 lg:py-16">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Heading */}
              <div className="text-center lg:text-left">
                <h1 className="text-[64px] font-bold text-black leading-[68px] mb-8">
                  Skyview
                </h1>
              </div>

              {/* Hero Image */}
              <div className="relative w-full lg:w-[774px] h-[600px] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c466975c7992eb10d3998d9d3e316824bb6c9a02?width=1548"
                  alt="Skyview home exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Elevation Selector */}
        <section className="relative -mt-6 z-10">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg flex overflow-hidden">
                <button
                  onClick={() => setActiveElevation('A')}
                  className={`px-8 py-3 font-normal text-[21px] transition-colors ${
                    activeElevation === 'A'
                      ? 'bg-[#D29A3A] text-white'
                      : 'bg-white text-[#D29A3A] hover:bg-gray-50'
                  }`}
                >
                  Elevation A
                </button>
                <button
                  onClick={() => setActiveElevation('B')}
                  className={`px-8 py-3 font-normal text-[21px] transition-colors ${
                    activeElevation === 'B'
                      ? 'bg-[#D29A3A] text-white'
                      : 'bg-white text-[#D29A3A] hover:bg-gray-50'
                  }`}
                >
                  Elevation B
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Bedrooms */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">🛏️</div>
                <h3 className="text-[#192A3D] text-[15px] font-bold uppercase mb-2">
                  Bedrooms
                </h3>
                <p className="text-[#D29A3A] text-[20px] font-bold">4</p>
              </div>

              {/* Bathrooms */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">🚿</div>
                <h3 className="text-[#192A3D] text-[15px] font-bold uppercase mb-2">
                  Bathrooms
                </h3>
                <p className="text-[#D29A3A] text-[19px] font-bold">2.5</p>
              </div>

              {/* Square Footage */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">📐</div>
                <h3 className="text-[#192A3D] text-[15px] font-bold uppercase mb-2">
                  Square Footage
                </h3>
                <p className="text-[#D29A3A] text-[20px] font-bold">1,724 sq. ft</p>
              </div>

              {/* Garage */}
              <div className="bg-[#F9F5F0] p-6 text-center">
                <div className="text-[#D29A3A] text-[50px] mb-4">🚗</div>
                <h3 className="text-[#192A3D] text-[16px] font-bold uppercase mb-2">
                  Garage
                </h3>
                <p className="text-[#D29A3A] text-[21px] font-bold">2 Car Garage</p>
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-[1266px] mx-auto mb-8">
              <p className="text-[#3A4F66] text-[21px] leading-[34.65px] mb-6">
                This inviting two-story home provides a foyer that leads to an open floorplan with a spacious living room, dining area and half
                bath designed for convenience and perfect for gatherings. The kitchen features a walk-in pantry, granite countertops and
                plenty of cabinet space. The second floor you are met with the laundry room, 3 bedrooms, a full bath and a luxurious
                owner's suite that offers beautiful dual vanities.
              </p>
              <p className="text-[#3A4F66] text-[21px] leading-[34.65px]">
                Call today to schedule a tour of the SKYVIEW home at Paseo!
              </p>
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <h2 className="text-[#192A3D] text-[32px] font-bold mb-8">Virtual Tour</h2>
            <div className="bg-black h-[714px] flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <h3 className="text-[28px] font-bold mb-4">
                  We couldn't verify the security of your connection.
                </h3>
                <p className="text-[13px]">
                  Access to this content has been restricted. Contact your internet service provider for help.
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[#3A4F66] text-[16px] flex items-center justify-center gap-2">
                <span>🖱️</span>
                Use mouse to drag and scroll to zoom
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-12">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[417px]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0a2c153a2410e1f524378c551edc9d1a7042188b?width=1251"
                  alt="Skyview home exterior view 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b5d5b6dbaa301e38d20109beeff95d2b2b3ec408?width=1251"
                  alt="Skyview home exterior view 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/901e219c9fe4eaa1a2d02e678470a22aedb88a17?width=1251"
                  alt="Skyview home interior view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="relative -mt-[417px] flex justify-between items-center h-[417px] px-4">
              <button className="bg-[#EDEDED] bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-[#EDEDED] bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Floor Plan */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <h2 className="text-[#192A3D] text-[34px] font-bold mb-8">Floor Plan</h2>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/408c95bd15f4b93870135886809bcc369c962c08?width=2160"
                alt="Skyview floor plan"
                className="max-w-[1080px] w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Join Interest List */}
        <section className="py-12">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="bg-[#D29A3A] rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-white text-[32px] font-bold leading-[35px] mb-4">
                  Join the<br />Interested List
                </h2>
                <p className="text-white text-[16px] leading-[26.4px] max-w-[540px]">
                  Sign-up to stay in the loop with new home releases, builder incentives,
                  special events & more!
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-white text-black px-10 py-4 text-[18px] font-normal hover:bg-gray-100 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-32 bg-white">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="text-center mb-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e77a025832448c22fb3aef29e7810f44e28495f6?width=216"
                alt="Sales representative"
                className="w-[108px] h-[108px] rounded-full border-3 border-[#D29A3A] border-opacity-34 mx-auto mb-6"
              />
              <h2 className="text-[#192A3D] text-[34px] font-bold mb-8">Get in Touch</h2>
            </div>

            <form className="max-w-[730px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#3A4F66] text-[15px] mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-sm px-2 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
                <div>
                  <label className="block text-[#3A4F66] text-[15px] mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-sm px-2 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#3A4F66] text-[15px] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-sm px-2 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
                <div>
                  <label className="block text-[#3A4F66] text-[15px] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full h-[40px] border-b border-[#69727D] bg-white rounded-sm px-2 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#3A4F66] text-[15px] mb-2">How can we help you?</label>
                <textarea
                  rows={6}
                  className="w-full border-b border-[#69727D] bg-white rounded-sm px-2 py-2 focus:outline-none focus:border-[#D29A3A] resize-none"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-[#3A4F66] text-[15px] mb-2">Accept Terms of Contacting</label>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-[13px] h-[13px] bg-[#0075FF] rounded-sm mt-1"
                    defaultChecked
                  />
                  <div className="text-[#3A4F66] text-[15px] leading-[24.75px]">
                    <p>By pressing the Submit button, I agree to Choice Valley contacting me by email and/or phone</p>
                    <p>to share home availability information or related opportunities. I also understand that any</p>
                    <p>information I've shared in this form is subject to Choice Valley Homes' Privacy Policy.</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#69727D] text-white px-12 py-3 text-[15px] font-medium rounded-sm hover:bg-opacity-90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F2F4F7] py-16">
        <div className="max-w-[1270px] mx-auto px-4">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <svg
                width="719"
                height="106"
                viewBox="0 0 719 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto max-w-full h-auto"
              >
                <g clipPath="url(#clip0_5_1070)">
                  <mask
                    id="mask0_5_1070"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="720"
                    height="107"
                  >
                    <path d="M719.6 0.0429688H0.409912V106.287H719.6V0.0429688Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_5_1070)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.9835 0.0429688L78.8225 11.4272V5.28738H94.3302V23.7195L125.873 48.3938C122.504 48.3938 119.058 48.0868 115.586 48.0868H109.259L63.8678 12.4121L28.982 39.6574H33.7141V58.128C49.1445 49.673 79.9155 45.1066 101.184 48.5729C73.3129 50.5857 46.5178 60.1056 23.6715 76.1124V49.5706H0.409912L63.9835 0.0429688Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80.6871 58.857C97.4757 53.2503 115.111 50.5674 132.817 50.9263C122.279 52.2297 111.896 54.5559 101.814 57.8721C70.1044 68.3608 45.4928 86.7163 33.8685 106.3L16.8435 101.094C29.7023 83.7998 52.3079 68.0795 80.6871 58.7418V58.857Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_5_1070">
                    <rect
                      width="719.19"
                      height="106.244"
                      fill="white"
                      transform="translate(0.409912 0.0429688)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-[#3A4F66] text-[30px] font-normal capitalize leading-[49.5px] mb-8">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-[#3A4F66] text-[16px] leading-[26.4px] mb-6">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="text-[#3A4F66] text-[18px] leading-[29.7px] mb-6">
              <p>Stephanie Stine</p>
              <p>Community Sales Manager</p>
              <p>209-308-9000</p>
              <p>DRE# 02189834</p>
            </div>

            <div className="text-[#3A4F66] text-[18px] leading-[29.7px] mb-6">
              <p>Hours</p>
              <p>Monday – Closed</p>
              <p>Tuesday – Saturday 10am – 5pm</p>
              <p>Sunday – 11am – 4pm</p>
            </div>

            <p className="text-[#3A4F66] text-[18px] leading-[29.7px] mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>

            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#D29A3A]" />
                <span className="text-black text-[18px] font-bold">209-308-9000</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D29A3A]" />
                <span className="text-black text-[21px] font-bold">Send Message</span>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-[#262626] rounded-full p-3">
                <span className="text-white text-[25px]">📘</span>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3e6ac3f800323adc39b4a8948c4932c2680106f2?width=203"
                alt="Equal Housing Opportunity"
                className="w-[102px] h-[109px]"
              />
            </div>

            <div className="flex justify-center items-center gap-2 text-black text-[16px] font-medium">
              <span>® All Rights Reserved</span>
              <span className="text-[#DDD]">|</span>
              <Link to="#" className="hover:text-[#D29A3A] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
