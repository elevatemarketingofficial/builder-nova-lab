import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  ExternalLink,
} from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg relative z-50">
        <div className="max-w-[1290px] mx-auto px-4 h-[87px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[200px] sm:w-[300px] lg:w-[359px] h-[30px] sm:h-[40px] lg:h-[53px] flex items-center justify-center">
              <svg
                width="359"
                height="53"
                viewBox="0 0 359 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_176)">
                  <mask
                    id="mask0_1_176"
                    style={{ maskType: "luminance" }}
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
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-black text-[15px] font-normal uppercase">
                About
              </span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-black text-[15px] font-normal uppercase">
                Floor Plans
              </span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link
              to="/community"
              className="text-black text-[16px] font-normal uppercase"
            >
              Community
            </Link>
            <Link
              to="/contact"
              className="text-black text-[16px] font-normal uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* View Listings Button */}
          <Link
            to="/listings"
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-3 sm:px-5 py-2 sm:py-3 rounded-sm text-[12px] sm:text-[14px] font-medium hover:bg-opacity-90 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">View Listings</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[600px] lg:h-[799px] bg-gray-800 flex items-center justify-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          {/* Warning Icon and Text */}
          <div className="mb-4 sm:mb-8 flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-4 flex items-center justify-center">
              <svg
                width="96"
                height="96"
                viewBox="0 0 97 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.14 60.5H52.14V68.5H44.14V60.5ZM44.14 28.5H52.14V52.5H44.14V28.5ZM48.12 8.5C26.02 8.5 8.14001 26.4 8.14001 48.5C8.14001 70.6 26.02 88.5 48.12 88.5C70.22 88.5 88.14 70.6 88.14 48.5C88.14 26.4 70.22 8.5 48.12 8.5ZM48.14 80.5C30.46 80.5 16.14 66.18 16.14 48.5C16.14 30.82 30.46 16.5 48.14 16.5C65.82 16.5 80.14 30.82 80.14 48.5C80.14 66.18 65.82 80.5 48.14 80.5Z"
                  fill="white"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-medium mb-2">
                Sign in to confirm you're not a bot
              </p>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal opacity-90">
                This helps protect our community.{" "}
                <span className="underline cursor-pointer">Learn more</span>
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-8">
            <h1 className="text-[32px] sm:text-[50px] lg:text-[78px] font-bold leading-tight text-white drop-shadow-lg">
              CHOICE VALLEY
            </h1>
            <h1 className="text-[36px] sm:text-[54px] lg:text-[84px] font-normal leading-tight text-white drop-shadow-lg">
              HOMES
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center">
            <p
              className="text-[20px] sm:text-[28px] lg:text-[35px] font-normal mb-2 sm:mb-4"
              style={{ fontFamily: "Aguafina Script, cursive" }}
            >
              Presents
            </p>
            <h2 className="text-[28px] sm:text-[40px] lg:text-[53px] font-bold leading-tight">
              PASEO
            </h2>
          </div>
        </div>
      </section>

      {/* Home Models Section */}
      <section className="bg-brand-light-gray py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Oceanside II */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4642c054912f9a7f09342bfc76961525f4b27daa?width=500"
                  alt="Oceanside II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[28px] font-bold text-black mb-4">
                  Oceanside II
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,746 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <button className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Skyview II */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4898324b6323ae37b8037f34315c18075fe13ab8?width=500"
                  alt="Skyview II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[27px] font-bold text-black mb-4">
                  Skyview II
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,824 Sq. Ft. | 4 Bed, 2 1/2 Bath
                </p>
                <button className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Mountain Top II */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/49ae639d40dd2a8774e5322b77d2bec889de1049?width=500"
                  alt="Mountain Top II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[27px] font-bold text-black mb-4">
                  Mountain Top II
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,890 Sq. Ft. | 5 Bed, 3 Bath
                  <br />
                  Main Floor Bedroom
                </p>
                <button className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Windridge */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/706b4410a60f73ecb19ddda8e058ab9fb073124a?width=500"
                  alt="Windridge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[27px] font-bold text-black mb-4">
                  Windridge
                </h3>
                <p className="text-[14px] text-brand-medium-blue mb-6">
                  1,791 Sq. Ft. | 5 Bed, 2 1/2 Bath
                  <br />
                  Main Floor Bedroom
                </p>
                <button className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal border-2 border-brand-gold hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Place You Will Call Home Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <div className="lg:w-1/2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a7541dcdebc1ed25b10290c963079e8b0f8f0eba?width=1328"
                alt="Choice Valley Homes"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                A place you will call
                <br />
                home
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed">
                Choice Valley Homes presents the Paseo Collection in Bellevue
                Ranch, located in North Merced. Paseo is adjacent to the highly
                acclaimed El Captain high school with charming rural
                surroundings which is across from the highly coveted custom acre
                homes, almond orchards and unparalleled Sierra Mountain views.
                <br />
                <br />
                Our mission is to provide you with a new home where Beauty,
                Luxury, Quality and Comfort meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Modern Living Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-6">
            <div className="lg:w-1/2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/28538dc69d3d297d5e20c8094586798176f1f575?width=1100"
                alt="Modern Interior"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-brand-dark-blue leading-tight mb-4 lg:mb-6">
                Designed for Modern
                <br />
                Living
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue leading-relaxed mb-6 lg:mb-8">
                Paseo is a{" "}
                <span className="font-bold">private gated community</span> built
                mindfully and artfully to deliver the necessities and importance
                of the new living trends. Our home designs allow you to express
                your personal style by allowing you to choose your custom
                touches to upgrade your home to perfection.
              </p>
              <button className="bg-brand-gold text-white px-6 py-3 text-[15px] font-normal rounded-sm hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-brand-light-gray py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[33px] font-bold text-brand-dark-blue text-center mb-8 lg:mb-12">
              How it Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8bfe020aa38228019eb7854c07896b8148aa49f6?width=200"
                    alt="Step 1"
                    className="w-[100px] h-[107px]"
                  />
                </div>
                <h3 className="text-[30px] font-bold text-brand-dark-blue mb-4">
                  Step 1
                </h3>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  Explore our homes and floor plans to see which home is right
                  for you.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/780205b694c49acdc61b80f20d9581a784f08c9b?width=200"
                    alt="Step 2"
                    className="w-[100px] h-[107px]"
                  />
                </div>
                <h3 className="text-[28px] font-bold text-brand-dark-blue mb-4">
                  Step 2
                </h3>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  Contact us to ask questions and get more information on price
                  and availability.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/49cf472aa919a21b988b83253795aeee780221db?width=200"
                    alt="Step 3"
                    className="w-[100px] h-[107px]"
                  />
                </div>
                <h3 className="text-[28px] font-bold text-brand-dark-blue mb-4">
                  Step 3
                </h3>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  It's time to move in! Once you've moved in, we're here to help
                  with any concerns or questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[730px] mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <div className="mb-4 lg:mb-6 flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6bc541956d87e433b12bb5413b6748e772883a6a?width=216"
                alt="Contact"
                className="w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full border-3 border-brand-gold border-opacity-34"
              />
            </div>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-brand-dark-blue">
              Get in Touch
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-3 focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[15px] text-brand-medium-blue mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-white border-b border-brand-text-gray rounded-sm px-3 py-2 focus:outline-none focus:border-brand-gold resize-none"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-[15px] text-brand-medium-blue">
                Accept Terms of Contacting
              </label>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  className="w-3 h-3 mt-1 bg-blue-600 rounded"
                />
                <div className="text-[15px] text-brand-medium-blue leading-[24.75px]">
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
              className="bg-brand-text-gray text-white px-12 py-3 text-[15px] font-medium rounded-sm hover:bg-opacity-90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-medium-gray py-16">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <svg
                width="632"
                height="93"
                viewBox="0 0 634 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[632px] h-[93px]"
              >
                <g clipPath="url(#clip0_1_122)">
                  <mask
                    id="mask0_1_122"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="634"
                    height="94"
                  >
                    <path
                      d="M633.1 0.199219H0.910004V93.5909H633.1V0.199219Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_122)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.7932 0.199219L69.8371 10.2063V4.80922H83.4688V21.0116L111.196 42.7011C108.234 42.7011 105.205 42.4312 102.153 42.4312H96.592L56.6914 11.0721L26.0258 35.0215H30.1854V51.2578C43.7492 43.8255 70.7979 39.8115 89.4935 42.8585C64.994 44.6278 41.4403 52.9961 21.3576 67.0665V43.7356H0.910004L56.7932 0.199219Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M71.4761 51.8987C86.2337 46.9702 101.736 44.6118 117.299 44.9274C108.037 46.0731 98.9094 48.1179 90.0474 51.0329C62.1735 60.2528 40.5391 76.3879 30.3211 93.6022L15.3555 89.0259C26.6588 73.8242 46.5298 60.0055 71.4761 51.7974V51.8987Z"
                      fill="#D29A3A"
                    />
                    <path
                      d="M158.726 36.5284L154.453 40.5875C153.232 39.1765 151.725 38.0386 150.029 37.2479C148.334 36.4574 146.49 36.0321 144.62 35.9999C143.18 35.9802 141.751 36.2478 140.418 36.7867C139.084 37.3255 137.872 38.1248 136.854 39.1375C135.837 40.15 135.033 41.3552 134.491 42.6817C133.95 44.0085 133.681 45.4298 133.7 46.8615C133.672 48.8245 134.155 50.7613 135.102 52.4834C136.024 54.127 137.396 55.4761 139.058 56.3738C140.787 57.324 142.735 57.8122 144.71 57.7905C146.387 57.8128 148.048 57.4754 149.581 56.8011C151.396 55.8909 153.036 54.6734 154.43 53.203L158.578 57.5095C156.634 59.5085 154.335 61.1324 151.797 62.2993C149.502 63.2298 147.041 63.6851 144.563 63.6374C142.302 63.7194 140.048 63.343 137.937 62.5311C135.827 61.7193 133.905 60.489 132.288 58.9149C130.704 57.3248 129.464 55.4293 128.643 53.3449C127.823 51.2604 127.44 49.0312 127.518 46.7941C127.461 43.8182 128.211 40.882 129.688 38.2936C131.179 35.7742 133.332 33.7064 135.916 32.312C138.582 30.8191 141.594 30.044 144.653 30.0631C147.298 30.0614 149.913 30.629 152.317 31.7272C154.781 32.8427 156.968 34.4815 158.726 36.5284Z"
                      fill="black"
                    />
                    <path
                      d="M164.015 30.9062H170.221V42.9822H180.971V30.9062H187.153V62.8952H180.971V48.8741H170.232V62.8952H164.015V30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M209.715 30.1079C211.905 30.0843 214.076 30.5083 216.093 31.3534C218.112 32.1987 219.934 33.4471 221.448 35.0214C223.04 36.5812 224.297 38.4473 225.141 40.5062C225.984 42.565 226.396 44.7734 226.353 46.9962C226.399 49.196 225.991 51.3816 225.158 53.4196C224.325 55.4574 223.08 57.3044 221.504 58.8472C218.339 61.9603 214.059 63.6951 209.607 63.6698C205.156 63.6444 200.898 61.8613 197.767 58.7123C195.208 56.062 193.577 52.6607 193.116 49.0142C192.656 45.3678 193.392 41.6708 195.212 38.4733C196.692 35.9384 198.814 33.8338 201.366 32.3698C203.919 30.9057 206.813 30.1336 209.76 30.1304L209.715 30.1079ZM209.646 36.0671C208.25 36.0344 206.86 36.2914 205.569 36.8219C204.275 37.3522 203.109 38.1444 202.142 39.1479C201.126 40.1876 200.334 41.4209 199.811 42.7736C199.288 44.1264 199.047 45.5705 199.102 47.0187C199.034 48.6181 199.346 50.2109 200.008 51.6694C200.672 53.1279 201.669 54.4117 202.922 55.4179C204.827 56.9892 207.228 57.8412 209.704 57.8241C211.099 57.8364 212.481 57.5587 213.761 57.0088C215.041 56.459 216.194 55.6491 217.141 54.6308C219.125 52.5431 220.231 49.7792 220.231 46.9063C220.231 44.0333 219.125 41.2693 217.141 39.1817C216.178 38.1729 215.014 37.3749 213.724 36.8387C212.434 36.3023 211.046 36.0397 209.646 36.0671Z"
                      fill="black"
                    />
                    <path
                      d="M231.688 30.9062H237.759V62.8952H231.688V30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M274.2 36.5284L269.915 40.5875C268.697 39.1758 267.191 38.037 265.499 37.2464C263.806 36.4555 261.963 36.0308 260.094 35.9999C258.654 35.9802 257.226 36.2478 255.891 36.7867C254.558 37.3255 253.346 38.1248 252.328 39.1375C251.31 40.15 250.507 41.3552 249.966 42.6818C249.424 44.0085 249.155 45.4298 249.174 46.8615C249.147 48.8229 249.626 50.7584 250.565 52.4834C251.489 54.1248 252.861 55.4733 254.52 56.3738C256.25 57.3226 258.197 57.8106 260.173 57.7905C261.849 57.8142 263.51 57.4767 265.045 56.8011C266.858 55.8909 268.499 54.6734 269.892 53.203L274.042 57.5095C272.098 59.5096 269.799 61.1338 267.259 62.2993C264.964 63.2289 262.503 63.6841 260.026 63.6374C257.764 63.7213 255.509 63.3459 253.398 62.534C251.289 61.722 249.366 60.4905 247.75 58.915C245.198 56.1827 243.575 52.7218 243.108 49.0213C242.641 45.3209 243.356 41.5681 245.151 38.2936C246.639 35.7721 248.793 33.7035 251.378 32.312C254.04 30.819 257.049 30.0438 260.105 30.0631C262.75 30.0589 265.365 30.6267 267.767 31.7272C270.237 32.844 272.431 34.4824 274.2 36.5284Z"
                      fill="black"
                    />
                    <path
                      d="M279.569 30.9062H297.123V36.8656H285.65V42.6562H297.123V48.503H285.65V56.8796H297.123V62.8614H279.569V30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M312.913 30.9062H319.209L327.303 53.6302L335.508 30.9062H341.793L330.173 62.8952H324.272L312.913 30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M356.498 30.9062H362.715L375.082 62.8952H368.717L366.197 56.3062H353.084L350.52 62.8952H344.166L356.498 30.9062ZM359.64 39.3954L355.334 50.3695H363.936L359.64 39.3954Z"
                      fill="black"
                    />
                    <path
                      d="M379.806 30.9062H385.932V57.0821H394.839V62.8952H379.806V30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M399.496 30.9062H405.622V57.0821H414.54V62.8952H399.496V30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M419.209 30.9062H436.763V36.8656H425.291V42.6562H436.763V48.503H425.291V56.8796H436.763V62.8614H419.209V30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M440.187 30.9062H446.755L452.756 42.42L458.725 30.9062H465.213L455.798 49.009V62.8614H449.637V49.009L440.187 30.9062Z"
                      fill="black"
                    />
                    <path
                      d="M482.948 30.906H486.158V44.3201H502.525V30.906H505.747V62.8948H502.525V47.457H486.158V62.8948H482.948V30.906Z"
                      fill="black"
                    />
                    <path
                      d="M528.873 30.1079C531.135 30.0495 533.385 30.449 535.488 31.282C537.59 32.1151 539.5 33.3642 541.103 34.9539C543.457 37.3156 545.056 40.3166 545.7 43.5797C546.343 46.8428 546.003 50.2223 544.721 53.2936C543.44 56.3649 541.273 58.9908 538.496 60.8411C535.718 62.6915 532.452 63.6838 529.11 63.6933C526.871 63.743 524.645 63.3368 522.569 62.4996C520.493 61.6623 518.61 60.4118 517.039 58.8247C515.455 57.2985 514.205 55.465 513.366 53.4378C512.526 51.4107 512.113 49.2333 512.155 47.0411C512.138 44.0442 512.918 41.0961 514.416 38.4957C515.853 35.9302 517.962 33.8007 520.52 32.3342C523.056 30.8661 525.94 30.0975 528.873 30.1079ZM529.02 33.2112C526.632 33.2076 524.289 33.8487 522.238 35.0664C520.154 36.25 518.427 37.9707 517.241 40.0475C516.034 42.1764 515.414 44.5855 515.445 47.0299C515.435 48.8073 515.78 50.5693 516.458 52.214C517.135 53.8588 518.133 55.3542 519.393 56.6143C520.654 57.8744 522.152 58.8742 523.802 59.5566C525.452 60.2388 527.221 60.5901 529.009 60.5899C531.438 60.6053 533.829 59.9809 535.937 58.7797C538.019 57.6182 539.738 55.9109 540.911 53.8436C542.105 51.7183 542.717 49.3183 542.685 46.8836C542.72 44.4701 542.108 42.091 540.911 39.9912C539.675 37.9453 537.931 36.2503 535.848 35.0687C533.763 33.8872 531.408 33.2592 529.009 33.2448L529.02 33.2112Z"
                      fill="black"
                    />
                    <path
                      d="M551.004 62.8948L555.616 30.906H556.137L569.203 57.1492L582.145 30.906H582.666L587.288 62.8948H584.134L580.959 40.0136L569.655 62.8838H568.829L557.323 39.8337L554.17 62.8838L551.004 62.8948Z"
                      fill="black"
                    />
                    <path
                      d="M593.63 30.906H612.054V34.0431H596.84V44.0613H611.917V47.1984H596.84V59.7579H611.917V62.8948H593.63V30.906Z"
                      fill="black"
                    />
                    <path
                      d="M614.279 56.9359L617.015 55.3055C618.938 58.8286 621.16 60.5901 623.685 60.5901C624.742 60.597 625.784 60.338 626.713 59.8368C627.614 59.3851 628.367 58.687 628.884 57.8242C629.372 57.0161 629.63 56.091 629.63 55.1481C629.593 54.0072 629.198 52.9064 628.499 51.9998C626.922 50.0363 625.068 48.3094 622.995 46.8726C621.157 45.617 619.476 44.1487 617.988 42.4987C616.887 41.1032 616.287 39.3816 616.281 37.6076C616.267 36.2738 616.614 34.9609 617.287 33.8073C617.958 32.6611 618.936 31.723 620.113 31.0975C621.328 30.4371 622.695 30.0965 624.08 30.1079C625.571 30.1038 627.038 30.4917 628.33 31.2324C629.992 32.3134 631.419 33.7169 632.524 35.3589L629.902 37.3378C629.061 36.1142 628.012 35.0451 626.804 34.1782C625.965 33.6777 625.002 33.417 624.024 33.4249C622.854 33.3682 621.709 33.7722 620.836 34.5494C620.438 34.9178 620.123 35.3655 619.91 35.8635C619.698 36.3613 619.594 36.8982 619.604 37.4391C619.604 38.1372 619.755 38.8271 620.045 39.4629C620.439 40.2665 620.979 40.9908 621.639 41.5991C622.057 42.004 623.448 43.0722 625.787 44.7926C627.991 46.2778 629.928 48.1212 631.518 50.2458C632.494 51.6658 633.031 53.3383 633.066 55.0582C633.071 56.1933 632.839 57.317 632.38 58.3569C631.923 59.3969 631.252 60.3299 630.41 61.0962C629.561 61.931 628.553 62.5879 627.443 63.0281C626.336 63.4685 625.149 63.6833 623.956 63.6599C622.068 63.6804 620.219 63.1402 618.643 62.1081C616.791 60.7594 615.294 58.9848 614.279 56.9359Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.2599 22.7544H56.2506V28.7024H50.2599V22.7544ZM59.2121 31.5022H65.1915V37.4614H59.2121V31.5022ZM50.2599 31.5022H56.2506V37.4614H50.2599V31.5022ZM59.2121 22.7544H65.1915V28.7024H59.2121V22.7544Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_122">
                    <rect
                      width="632.19"
                      height="93.3917"
                      fill="white"
                      transform="translate(0.910004 0.199219)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-[30px] text-brand-medium-blue font-normal">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-[16px] text-brand-medium-blue">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="text-center">
              <p className="text-[18px] text-brand-medium-blue leading-[29.7px]">
                Stephanie Stine
                <br />
                Community Sales Manager
                <br />
                209-308-9000
                <br />
                DRE# 02189834
              </p>
            </div>

            <div className="text-center">
              <p className="text-[18px] text-brand-medium-blue leading-[29.7px]">
                Hours
                <br />
                Monday – Closed
                <br />
                Tuesday – Saturday 10am – 5pm
                <br />
                Sunday – 11am – 4pm
              </p>
            </div>

            <p className="text-[18px] text-brand-medium-blue">
              154 Montage Drive, Merced, CA 95348
            </p>

            {/* Contact Links */}
            <div className="flex justify-center items-center gap-4">
              <a
                href="tel:209-308-9000"
                className="flex items-center gap-2 text-black font-bold text-[18px]"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                209-308-9000
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 text-black font-bold text-[21px]"
              >
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                Send Message
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Equal Housing Logo */}
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7378886e04730af56dfabd13d67eeb0798f02c02?width=179"
                alt="Equal Housing Opportunity"
                className="w-[90px] h-[96px]"
              />
            </div>

            {/* Footer Bottom */}
            <div className="flex justify-center items-center gap-2 text-[16px] text-black">
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
