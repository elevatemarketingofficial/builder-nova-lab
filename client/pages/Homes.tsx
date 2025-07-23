import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  Instagram,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Homes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - inlined instead of using Header component */}
      <header className="relative z-50 bg-white shadow-lg">
        <div className="flex items-center justify-between h-[87px] max-w-[1290px] mx-auto px-4">
          <a href="/" className="flex items-center">
            <div className="w-[359px] h-[53px] flex items-center justify-center">
              <svg
                width="359"
                height="53"
                viewBox="0 0 359 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block w-[359px] h-[53px]"
              >
                <g clipPath="url(#clip0_1_176)">
                  <mask
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="359"
                    height="53"
                  >
                    <path d="M358.77 0H0.000396729V53H358.77V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1_176)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.7142 0L39.1167 5.67902V2.61619H46.8527V11.8111L62.5878 24.1199C60.9071 24.1199 59.188 23.9668 57.4561 23.9668H54.3001L31.6565 6.17037L14.2536 19.7617H16.6143V28.9758C24.3117 24.758 39.6619 22.4801 50.2717 24.2093C36.3682 25.2133 23.0014 29.9624 11.6045 37.9473V24.707H0.000396729L31.7142 0Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.0468 29.3396C48.4218 26.5426 57.2191 25.2043 66.0517 25.3833C60.7951 26.0335 55.6153 27.194 50.586 28.8482C34.7676 34.0806 22.49 43.2372 16.6912 53.0064L8.19827 50.4094C14.6129 41.7824 25.8898 33.9402 40.0468 29.2821V29.3396Z"
                      fill="#D29A3A"
                    />
                    <path
                      d="M89.5614 20.6168L87.1365 22.9204C86.4434 22.1197 85.5881 21.4739 84.6259 21.0252C83.6637 20.5766 82.6176 20.3352 81.556 20.3169C80.739 20.3058 79.9281 20.4576 79.1712 20.7634C78.4144 21.0692 77.7268 21.5228 77.1491 22.0975C76.5715 22.6721 76.1155 23.356 75.8081 24.1089C75.5007 24.8618 75.348 25.6684 75.3592 26.4809C75.343 27.5949 75.617 28.694 76.1547 29.6714C76.6776 30.6041 77.4562 31.3697 78.3998 31.8792C79.381 32.4184 80.4861 32.6955 81.6073 32.6831C82.5589 32.6958 83.5015 32.5043 84.3715 32.1217C85.4013 31.6051 86.3325 30.9142 87.1234 30.0797L89.4774 32.5237C88.3742 33.6581 87.0696 34.5796 85.6288 35.2419C84.3267 35.7699 82.9299 36.0283 81.5237 36.0013C80.2405 36.0478 78.9613 35.8342 77.7637 35.3734C76.5661 34.9127 75.4752 34.2145 74.5574 33.3213C73.6586 32.4189 72.9548 31.3431 72.4893 30.1603C72.0238 28.9773 71.8064 27.7122 71.8504 26.4427C71.8184 24.7539 72.2438 23.0875 73.0821 21.6186C73.9285 20.1888 75.1504 19.0153 76.6165 18.224C78.1297 17.3768 79.8387 16.9369 81.5747 16.9478C83.0759 16.9468 84.5599 17.2689 85.924 17.8921C87.3224 18.5252 88.5634 19.4552 89.5614 20.6168Z"
                      fill="black"
                    />
                    <path
                      d="M92.5629 17.4263H96.0845V24.2795H102.185V17.4263H105.694V35.5801H102.185V27.6231H96.091V35.5801H92.5629V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M118.498 16.9733C119.74 16.9599 120.973 17.2005 122.117 17.6801C123.263 18.1598 124.297 18.8683 125.156 19.7617C126.06 20.6469 126.773 21.7059 127.252 22.8744C127.73 24.0428 127.964 25.296 127.94 26.5575C127.966 27.8058 127.734 29.0462 127.262 30.2027C126.789 31.3592 126.083 32.4074 125.188 33.2829C123.392 35.0496 120.963 36.0341 118.437 36.0198C115.911 36.0053 113.494 34.9935 111.717 33.2064C110.265 31.7023 109.339 29.7721 109.078 27.7027C108.817 25.6333 109.234 23.5353 110.267 21.7207C111.107 20.2821 112.311 19.0877 113.76 18.257C115.209 17.4261 116.851 16.9879 118.523 16.9861L118.498 16.9733ZM118.459 20.3552C117.666 20.3366 116.878 20.4825 116.145 20.7835C115.411 21.0845 114.749 21.5341 114.2 22.1035C113.623 22.6935 113.174 23.3935 112.877 24.1612C112.581 24.9288 112.444 25.7484 112.475 26.5702C112.436 27.4779 112.613 28.3818 112.989 29.2095C113.366 30.0372 113.932 30.7658 114.643 31.3368C115.724 32.2285 117.086 32.712 118.491 32.7023C119.283 32.7093 120.067 32.5517 120.794 32.2397C121.52 31.9276 122.174 31.468 122.712 30.8901C123.838 29.7054 124.466 28.1368 124.466 26.5064C124.466 24.876 123.838 23.3074 122.712 22.1227C122.165 21.5502 121.505 21.0973 120.773 20.793C120.041 20.4887 119.253 20.3396 118.459 20.3552Z"
                      fill="black"
                    />
                    <path
                      d="M130.967 17.4263H134.412V35.5801H130.967V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M155.093 20.6168L152.662 22.9204C151.97 22.1193 151.116 21.473 150.155 21.0243C149.195 20.5755 148.148 20.3345 147.088 20.3169C146.271 20.3058 145.46 20.4576 144.703 20.7634C143.946 21.0692 143.259 21.5228 142.68 22.0975C142.103 22.6721 141.647 23.356 141.34 24.1089C141.033 24.8618 140.88 25.6684 140.891 26.4809C140.875 27.594 141.148 28.6924 141.68 29.6714C142.204 30.6029 142.983 31.3681 143.925 31.8792C144.906 32.4176 146.011 32.6946 147.132 32.6831C148.084 32.6966 149.027 32.5051 149.897 32.1217C150.926 31.6051 151.858 30.9142 152.649 30.0797L155.003 32.5237C153.9 33.6588 152.596 34.5805 151.154 35.2419C149.852 35.7695 148.455 36.0278 147.049 36.0013C145.766 36.0489 144.486 35.8358 143.288 35.3751C142.091 34.9143 141 34.2154 140.083 33.3213C138.635 31.7707 137.713 29.8066 137.448 27.7066C137.183 25.6066 137.589 23.4769 138.608 21.6186C139.452 20.1876 140.675 19.0137 142.142 18.224C143.652 17.3767 145.36 16.9368 147.094 16.9478C148.595 16.9454 150.079 17.2676 151.443 17.8921C152.844 18.5259 154.089 19.4557 155.093 20.6168Z"
                      fill="black"
                    />
                    <path
                      d="M158.14 17.4263H168.102V20.8083H161.591V24.0944H168.102V27.4125H161.591V32.1663H168.102V35.561H158.14V17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M177.063 17.4263H180.636L185.229 30.3222L189.886 17.4263H193.452L186.858 35.5801H183.509L177.063 17.4263Z"
                      fill="black"
                    />
                    <path
                      d="M201.797 17.4263H205.326L212.344 35.5801H208.732L207.301 31.8408H199.86L198.405 35.5801H194.799L201.797 17.4263ZM203.581 22.2439L201.137 28.4718H206.019L203.581 22.2439Z"
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
                      d="M237.386 17.4263H247.348V20.8083H240.837V24.0944H247.348V27.4125H240.837V32.1663H247.348V35.561H237.386V17.4263Z"
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
                      d="M299.621 16.9733C300.904 16.9402 302.181 17.1669 303.375 17.6396C304.568 18.1124 305.651 18.8213 306.561 19.7234C307.897 21.0637 308.805 22.7668 309.17 24.6186C309.535 26.4704 309.342 28.3883 308.615 30.1312C307.887 31.8742 306.658 33.3644 305.081 34.4145C303.505 35.4646 301.652 36.0277 299.755 36.0331C298.484 36.0613 297.221 35.8308 296.043 35.3556C294.865 34.8805 293.797 34.1708 292.904 33.2701C292.006 32.404 291.297 31.3635 290.82 30.2131C290.343 29.0627 290.109 27.827 290.133 26.5829C290.123 24.8822 290.566 23.2091 291.416 21.7334C292.232 20.2775 293.429 19.069 294.88 18.2367C296.319 17.4036 297.956 16.9674 299.621 16.9733ZM299.704 18.7344C298.349 18.7324 297.019 19.0962 295.855 19.7873C294.672 20.459 293.692 21.4355 293.019 22.614C292.335 23.8222 291.982 25.1894 292 26.5766C291.995 27.5853 292.19 28.5852 292.575 29.5186C292.959 30.452 293.526 31.3007 294.241 32.0158C294.956 32.7308 295.806 33.2983 296.743 33.6855C297.679 34.0726 298.683 34.272 299.697 34.2719C301.076 34.2806 302.433 33.9263 303.629 33.2446C304.811 32.5855 305.787 31.6165 306.452 30.4434C307.13 29.2372 307.477 27.8752 307.459 26.4936C307.479 25.1239 307.131 23.7738 306.452 22.5821C305.751 21.4211 304.761 20.4591 303.579 19.7886C302.396 19.1181 301.059 18.7617 299.697 18.7535L299.704 18.7344Z"
                      fill="black"
                    />
                    <path
                      d="M312.18 35.58L314.798 17.4262H315.093L322.508 32.3193L329.853 17.4262H330.148L332.771 35.58H330.981L329.179 22.5948L322.765 35.5737H322.296L315.766 22.4927L313.976 35.5737L312.18 35.58Z"
                      fill="black"
                    />
                    <path
                      d="M336.37 17.4262H346.826V19.2066H338.192V24.8919H346.748V26.6722H338.192V33.7997H346.748V35.58H336.37V17.4262Z"
                      fill="black"
                    />
                    <path
                      d="M348.089 32.1982L349.641 31.2729C350.732 33.2723 351.994 34.2719 353.426 34.2719C354.027 34.2758 354.618 34.1288 355.145 33.8444C355.657 33.5881 356.084 33.1919 356.377 32.7022C356.654 32.2437 356.8 31.7186 356.8 31.1836C356.779 30.5361 356.555 29.9114 356.159 29.3969C355.263 28.2826 354.212 27.3026 353.035 26.4872C351.992 25.7746 351.038 24.9414 350.193 24.005C349.569 23.213 349.228 22.236 349.225 21.2293C349.217 20.4724 349.414 19.7273 349.796 19.0726C350.176 18.4222 350.732 17.8898 351.399 17.5348C352.089 17.16 352.865 16.9667 353.651 16.9732C354.497 16.9708 355.33 17.191 356.063 17.6113C357.006 18.2248 357.816 19.0213 358.443 19.9531L356.955 21.0761C356.478 20.3818 355.882 19.775 355.197 19.2831C354.72 18.999 354.174 18.8511 353.619 18.8556C352.955 18.8234 352.305 19.0527 351.81 19.4937C351.584 19.7028 351.405 19.9569 351.284 20.2395C351.164 20.522 351.105 20.8267 351.111 21.1336C351.111 21.5298 351.196 21.9214 351.361 22.2822C351.584 22.7382 351.891 23.1493 352.265 23.4945C352.503 23.7243 353.292 24.3304 354.619 25.3068C355.87 26.1496 356.969 27.1958 357.872 28.4015C358.426 29.2073 358.731 30.1565 358.75 31.1325C358.753 31.7767 358.621 32.4144 358.361 33.0046C358.102 33.5947 357.721 34.1243 357.243 34.5591C356.761 35.0328 356.189 35.4056 355.559 35.6555C354.931 35.9054 354.257 36.0273 353.581 36.014C352.509 36.0257 351.46 35.7191 350.565 35.1334C349.514 34.368 348.665 33.3609 348.089 32.1982Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.0066 12.8001H31.4063V16.1756H28.0066V12.8001ZM33.087 17.7645H36.4803V21.1463H33.087V17.7645ZM28.0066 17.7645H31.4063V21.1463H28.0066V17.7645ZM33.087 12.8001H36.4803V16.1756H33.087V12.8001Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_176">
                    <rect
                      width="358.769"
                      height="53"
                      fill="white"
                      transform="translate(0.000396729)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
          <Navigation />
          <a
            href="/listings"
            className="flex items-center gap-2 bg-brand-gold text-white px-5 py-3 rounded-sm text-[14px] font-medium hover:bg-opacity-90 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>View Listings</span>
          </a>
          <button className="md:hidden p-2">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[690px] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fffeb4fb889304cf2806957e0e6786131') lightgray 0px -295.128px / 100% 185.544% no-repeat",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-[65px] font-normal leading-[81px] text-white">
            YOUR HOME CHOICES
          </h1>
        </div>
      </section>

      {/* Floor Plans Grid */}
      <section className="bg-brand-light-gray py-16 relative z-10 -mt-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-5 mb-5">
            {/* Oceanside */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa2654f12e33849a191edca4b383ac591"
                  alt="Oceanside"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Oceanside
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,691 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Skyview */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F23e3b0a4226c40e5a4e2306acbab1609"
                  alt="Skyview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Skyview
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,724 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Windridge */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1fe5686cf79b4cd18e084a05011336cc"
                  alt="Windridge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Windridge
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,791 Sq. Ft. | 5 Bed, 2 1/2 Bath Main Floor Bedroom
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Mountain Top */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa4c4154817a34741952a27e52cb3f2e7"
                  alt="Mountain Top"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Mountain Top
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,874 Sq. Ft. | 4 Bed, 3 Full Bath Plus Den / Office
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {/* Oceanside II */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fa8dea5c3b40e4e3eb3f535032c1dee78"
                  alt="Oceanside II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Oceanside II
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,746 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Skyview II */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd4d622210c34a53af776acadfd5ab9a"
                  alt="Skyview II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Skyview II
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,824 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Mountain Top II */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F40fc77d7611544d2aac4f5cffe681626"
                  alt="Mountain Top II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="text-[28px] font-bold leading-[42px] mb-3 text-black">
                  Mountain Top II
                </h3>
                <p className="text-[14px] leading-[23px] mb-6 text-gray-600 whitespace-pre-line">
                  1,890 Sq. Ft. | 5 Bed, 3 Bath Main Floor Bedroom
                </p>
                <button className="bg-brand-gold border-2 border-brand-gold text-white text-[15px] leading-[22.5px] px-6 py-3 hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="bg-gray-200 min-h-[600px] overflow-hidden relative">
            <iframe
              src="https://contradovip.com/choice-valley-homes/paseo/site/"
              width="100%"
              height="600"
              className="w-full h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[730px] mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                alt="Contact"
                className="w-[108px] h-[108px] rounded-full"
              />
            </div>
            <h2 className="text-[34px] font-bold leading-[51px] text-brand-dark-blue">
              Get in Touch
            </h2>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] leading-[22.5px] text-brand-medium-blue mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded"
                />
              </div>
              <div>
                <label className="block text-[15px] leading-[22.5px] text-brand-medium-blue mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-[15px] leading-[22.5px] text-brand-medium-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded"
                />
              </div>
              <div>
                <label className="block text-[15px] leading-[22.5px] text-brand-medium-blue mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full h-10 px-3 border-b border-gray-500 rounded"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-[15px] leading-[22.5px] text-brand-medium-blue mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-3 py-2 border-b border-gray-500 rounded resize-none"
              />
            </div>
            <div className="mt-6">
              <label className="text-[15px] leading-[22.5px] text-brand-medium-blue">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start gap-3 mt-4">
                <input type="checkbox" className="w-3 h-3 mt-1 bg-blue-600" />
                <div className="text-[15px] leading-[25px] text-brand-medium-blue">
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
              className="mt-6 bg-gray-500 text-white text-[15px] font-medium leading-[22.5px] px-12 py-3 rounded hover:bg-opacity-90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-light-gray py-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center">
            {/* Company Logo */}
            <div className="flex justify-center mb-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                alt="Choice Valley Homes Logo"
                className="w-[632px] h-[93px] object-cover"
              />
            </div>
            <h3 className="text-[30px] leading-[45px] text-brand-medium-blue mt-8 px-4">
              Building communities throughout the Central Valley
            </h3>
            <p className="text-brand-medium-blue mt-8">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="mt-8">
              <p className="text-[18px] leading-[29px] text-brand-medium-blue">
                Stephanie Stine
                <br />
                Community Sales Manager
                <br />
                209-308-9000
                <br />
                DRE# 02189834
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[18px] leading-[29px] text-brand-medium-blue">
                Hours
                <br />
                Monday – Closed
                <br />
                Tuesday – Saturday 10am – 5pm
                <br />
                Sunday – 11am – 4pm
              </p>
            </div>
            <p className="text-[18px] leading-[27px] text-brand-medium-blue mt-8">
              154 Montage Drive, Merced, CA 95348
            </p>

            {/* Contact & Message Links */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <a
                href="tel:209-308-9000"
                className="flex items-center gap-2 text-black font-bold text-[18px] leading-[27px]"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                209-308-9000
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 text-black font-bold text-[21px] leading-[31.5px]"
              >
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                Send Message
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center mt-8">
              <a
                href="https://www.instagram.com/choicevalleyhomes/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Equal Housing Logo */}
            <div className="flex justify-center mt-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-[90px] h-[96px]"
              />
            </div>

            {/* Footer Bottom */}
            <div className="flex justify-center items-center gap-2 text-black mt-8">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
