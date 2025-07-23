import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  Instagram,
} from "lucide-react";
import Header from "../components/Header";

export default function HomeownerServiceRequest() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-brand-gold py-24 lg:py-32">
        <div className="max-w-[1290px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4 lg:mb-6">
                <p className="text-white text-[16px] font-normal leading-relaxed">
                  Homeowner Service Request
                </p>
              </div>
              <h1 className="text-white text-[40px] sm:text-[50px] lg:text-[65px] font-bold leading-tight">
                RBG Construction
              </h1>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F37e913cec20d4500a21d4f0d31b06158"
                alt="RBG Construction Logo"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1290px] mx-auto px-4">
          <div className="max-w-[1230px] mx-auto">
            {/* License Info */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-2 text-brand-medium-blue">
                <span className="text-[14px] font-normal">
                  RGB License # 1023617
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 lg:space-y-8 text-brand-medium-blue">
              <p className="text-[16px] leading-relaxed">
                A family legacy of building spanning over 32 years gives Gilbert
                George, President of RBG Construction, and his team, a wealth of
                successful custom residential, commercial and Government Housing
                success stories throughout California.
              </p>

              <p className="text-[16px] leading-relaxed">
                From creating, managing and constructing multi-family homes in
                San Mateo, to building Migrant Camp housing for the Federal
                Government in Westley, the RBG team of experts is proud to build
                single family homes in partnership with CHOICE VALLEY HOMES in
                the Merced area.
              </p>

              <p className="text-[16px] leading-relaxed">
                A family passion for quality and a tradition of paying attention
                to the smallest details assures that each and every CHOICE
                VALLEY HOME will be built with the utmost care and impeccable
                workmanship- providing decades of enjoyment and reliability for
                our homebuyers.
              </p>

              <p className="text-[16px] leading-relaxed">
                Our finished homes are a true testament to our entire team's
                effort. Each member of our team takes great pride in what we do
                and in their contribution, and together we craft a quality home
                – enriching the lives of our residents and the communities in
                which we build.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 lg:mt-12">
              <a
                href="https://rbgcorporation.com/warranty-request"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-dark-blue text-white px-6 py-3 rounded-sm text-[15px] font-normal hover:bg-opacity-90 transition-colors"
              >
                Click Here to Fill Out Our Warranty and Repair Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-brand-light-gray py-8 lg:py-12">
        <div className="max-w-[1290px] mx-auto px-4">
          <div className="text-center space-y-6 lg:space-y-8">
            {/* Choice Valley Homes Logo */}
            <div className="flex justify-center mb-6 lg:mb-8">
              <svg
                width="720"
                height="107"
                viewBox="0 0 720 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[300px] h-[44px] sm:w-[500px] sm:h-[74px] lg:w-[720px] lg:h-[107px]"
              >
                <g clipPath="url(#clip0_22_657)">
                  <mask
                    id="mask0_22_657"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="720"
                    height="107"
                  >
                    <path
                      d="M719.6 0.682861H0.410004V106.927H719.6V0.682861Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_22_657)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.9836 0.682861L78.8226 12.0671V5.92728H94.3303V24.3594L125.873 49.0337C122.504 49.0337 119.058 48.7267 115.586 48.7267H109.259L63.8679 13.052L28.9821 40.2973H33.7142V58.7679C49.1446 50.3129 79.9156 45.7465 101.184 49.2128C73.313 51.2256 46.5179 60.7455 23.6715 76.7522V50.2105H0.410004L63.9836 0.682861Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80.6871 59.4972C97.4757 53.8904 115.111 51.2075 132.817 51.5665C122.279 52.8698 111.896 55.1961 101.814 58.5122C70.1044 69.0009 45.4928 87.3565 33.8685 106.94L16.8435 101.734C29.7023 84.44 52.3079 68.7196 80.6871 59.3819V59.4972Z"
                      fill="#D29A3A"
                    />
                    <path
                      d="M179.944 42.0114L175.083 46.6291C173.694 45.024 171.979 43.7295 170.051 42.83C168.122 41.9307 166.025 41.4469 163.897 41.4102C162.259 41.3879 160.633 41.6922 159.116 42.3053C157.599 42.9183 156.221 43.8275 155.063 44.9796C153.905 46.1314 152.991 47.5024 152.374 49.0116C151.758 50.5209 151.452 52.1378 151.475 53.7666C151.442 55.9997 151.991 58.203 153.069 60.1621C154.117 62.0319 155.678 63.5667 157.57 64.5879C159.537 65.6689 161.752 66.2243 164 66.1996C165.907 66.2249 167.797 65.8411 169.541 65.0741C171.605 64.0386 173.472 62.6535 175.057 60.9807L179.776 65.8799C177.564 68.154 174.949 70.0013 172.061 71.3289C169.451 72.3874 166.651 72.9054 163.832 72.8511C161.26 72.9444 158.695 72.5162 156.295 71.5925C153.894 70.669 151.707 69.2694 149.867 67.4788C148.065 65.6698 146.655 63.5134 145.722 61.1422C144.788 58.7708 144.353 56.2349 144.441 53.6899C144.377 50.3045 145.229 46.9642 146.91 44.0196C148.607 41.1535 151.056 38.8011 153.995 37.2148C157.028 35.5165 160.454 34.6347 163.934 34.6564C166.943 34.6544 169.918 35.3002 172.653 36.5495C175.456 37.8185 177.944 39.6829 179.944 42.0114Z"
                      fill="black"
                    />
                    <path
                      d="M185.961 35.6157H193.021V49.3536H205.25V35.6157H212.283V72.0069H205.25V56.0562H193.034V72.0069H185.961V35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M237.95 34.7076C240.441 34.6808 242.911 35.1631 245.206 36.1246C247.502 37.0862 249.575 38.5064 251.298 40.2973C253.109 42.0718 254.539 44.1947 255.499 46.537C256.458 48.8791 256.927 51.3913 256.878 53.9201C256.93 56.4226 256.466 58.909 255.518 61.2274C254.57 63.5457 253.155 65.6468 251.362 67.402C247.761 70.9435 242.891 72.917 237.828 72.8883C232.764 72.8593 227.919 70.8309 224.358 67.2485C221.447 64.2335 219.591 60.3641 219.067 56.2158C218.544 52.0675 219.38 47.8618 221.451 44.2243C223.135 41.3405 225.549 38.9462 228.452 37.2808C231.357 35.6153 234.649 34.7369 238.001 34.7333L237.95 34.7076ZM237.872 41.4869C236.283 41.4497 234.702 41.7421 233.233 42.3456C231.762 42.9489 230.435 43.8501 229.335 44.9917C228.179 46.1744 227.278 47.5775 226.684 49.1164C226.089 50.6553 225.814 52.2982 225.876 53.9456C225.799 55.7652 226.154 57.5772 226.907 59.2364C227.663 60.8956 228.797 62.356 230.222 63.5007C232.39 65.2882 235.121 66.2575 237.937 66.238C239.524 66.2521 241.097 65.9361 242.553 65.3106C244.009 64.6851 245.32 63.7637 246.397 62.6053C248.655 60.2304 249.913 57.086 249.913 53.8178C249.913 50.5494 248.655 47.4051 246.397 45.0301C245.302 43.8825 243.978 42.9747 242.511 42.3647C241.043 41.7545 239.464 41.4557 237.872 41.4869Z"
                      fill="black"
                    />
                    <path
                      d="M262.947 35.6157H269.853V72.0069H262.947V35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M311.309 42.0114L306.435 46.6291C305.049 45.0232 303.336 43.7277 301.411 42.8282C299.485 41.9286 297.388 41.4454 295.262 41.4103C293.624 41.3879 291.999 41.6922 290.481 42.3053C288.964 42.9183 287.586 43.8275 286.427 44.9796C285.27 46.1314 284.356 47.5024 283.74 49.0116C283.124 50.5209 282.818 52.1378 282.839 53.7666C282.808 55.9979 283.354 58.1997 284.421 60.1622C285.472 62.0294 287.033 63.5634 288.921 64.5879C290.889 65.6672 293.104 66.2225 295.351 66.1996C297.259 66.2266 299.148 65.8426 300.894 65.0741C302.957 64.0386 304.824 62.6535 306.409 60.9807L311.13 65.8799C308.918 68.1553 306.303 70.003 303.413 71.3289C300.803 72.3864 298.003 72.9042 295.185 72.8511C292.612 72.9466 290.046 72.5195 287.645 71.5958C285.245 70.6721 283.058 69.2712 281.219 67.4788C278.316 64.3706 276.469 60.4333 275.938 56.2236C275.407 52.0139 276.221 47.7447 278.263 44.0196C279.956 41.151 282.406 38.7978 285.347 37.2148C288.375 35.5163 291.798 34.6345 295.275 34.6564C298.284 34.6517 301.259 35.2976 303.992 36.5495C306.801 37.82 309.297 39.6839 311.309 42.0114Z"
                      fill="black"
                    />
                    <path
                      d="M317.417 35.6157H337.386V42.3952H324.335V48.9827H337.386V55.634H324.335V65.1635H337.386V71.9685H317.417V35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M355.35 35.6157H362.512L371.72 61.4668L381.054 35.6157H388.204L374.985 72.0069H368.272L355.35 35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M404.933 35.6157H412.006L426.074 72.0069H418.833L415.966 64.5111H401.05L398.132 72.0069H390.904L404.933 35.6157ZM408.508 45.2731L403.609 57.7575H413.395L408.508 45.2731Z"
                      fill="black"
                    />
                    <path
                      d="M431.448 35.6157H438.418V65.3938H448.55V72.0069H431.448V35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M453.848 35.6157H460.817V65.3938H470.963V72.0069H453.848V35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M476.273 35.6157H496.244V42.3952H483.192V48.9827H496.244V55.634H483.192V65.1635H496.244V71.9685H476.273V35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M500.139 35.6157H507.611L514.438 48.714L521.228 35.6157H528.609L517.898 56.2097V71.9685H510.889V56.2097L500.139 35.6157Z"
                      fill="black"
                    />
                    <path
                      d="M548.784 35.6155H552.436V50.8755H571.056V35.6155H574.721V72.0065H571.056V54.4442H552.436V72.0065H548.784V35.6155Z"
                      fill="black"
                    />
                    <path
                      d="M601.03 34.7075C603.603 34.6412 606.163 35.0956 608.555 36.0433C610.947 36.9909 613.119 38.412 614.943 40.2204C617.621 42.9071 619.44 46.3211 620.172 50.0333C620.904 53.7455 620.517 57.59 619.059 61.084C617.601 64.5779 615.136 67.5652 611.977 69.6701C608.817 71.7752 605.102 72.904 601.3 72.9148C598.752 72.9714 596.22 72.5093 593.858 71.5569C591.496 70.6044 589.355 69.1817 587.567 67.3762C585.765 65.6401 584.343 63.5542 583.389 61.2481C582.433 58.9419 581.963 56.465 582.011 53.971C581.991 50.5617 582.879 47.2079 584.584 44.2497C586.218 41.3311 588.618 38.9086 591.527 37.2402C594.412 35.5701 597.692 34.6958 601.03 34.7075ZM601.197 38.2379C598.48 38.2338 595.814 38.9632 593.482 40.3484C591.11 41.6949 589.146 43.6524 587.797 46.015C586.424 48.4369 585.718 51.1775 585.754 53.9583C585.742 55.9803 586.135 57.9848 586.906 59.8558C587.676 61.727 588.812 63.4282 590.246 64.8617C591.679 66.2952 593.384 67.4326 595.26 68.2089C597.138 68.9849 599.15 69.3846 601.184 69.3844C603.948 69.4019 606.668 68.6915 609.065 67.3251C611.434 66.0037 613.39 64.0614 614.724 61.7097C616.082 59.2919 616.779 56.5616 616.743 53.7919C616.782 51.0462 616.086 48.3398 614.724 45.9509C613.318 43.6235 611.334 41.6953 608.964 40.351C606.592 39.007 603.913 38.2925 601.184 38.2762L601.197 38.2379Z"
                      fill="black"
                    />
                    <path
                      d="M626.207 72.0065L631.453 35.6155H632.045L646.91 65.4702L661.633 35.6155H662.225L667.483 72.0065H663.896L660.283 45.9764L647.424 71.9939H646.485L633.395 45.7717L629.808 71.9939L626.207 72.0065Z"
                      fill="black"
                    />
                    <path
                      d="M674.698 35.6155H695.657V39.1843H678.35V50.5812H695.502V54.15H678.35V68.4378H695.502V72.0065H674.698V35.6155Z"
                      fill="black"
                    />
                    <path
                      d="M698.189 65.2273L701.301 63.3725C703.488 67.3805 706.017 69.3844 708.889 69.3844C710.092 69.3923 711.277 69.0975 712.334 68.5274C713.359 68.0135 714.216 67.2193 714.804 66.2378C715.358 65.3185 715.653 64.2661 715.653 63.1935C715.61 61.8955 715.161 60.6433 714.366 59.6119C712.572 57.3782 710.463 55.4136 708.104 53.7791C706.014 52.3507 704.101 50.6804 702.408 48.8033C701.156 47.2157 700.473 45.2572 700.466 43.2391C700.45 41.7217 700.845 40.2281 701.61 38.9158C702.374 37.6119 703.487 36.5447 704.825 35.833C706.208 35.0818 707.763 34.6943 709.338 34.7074C711.035 34.7026 712.704 35.1439 714.173 35.9865C716.064 37.2163 717.688 38.8129 718.944 40.6809L715.961 42.9321C715.005 41.5401 713.812 40.3239 712.437 39.3378C711.483 38.7683 710.388 38.4718 709.275 38.4808C707.944 38.4162 706.641 38.8759 705.648 39.76C705.195 40.1791 704.837 40.6884 704.595 41.2549C704.353 41.8213 704.235 42.4321 704.247 43.0473C704.247 43.8416 704.418 44.6265 704.749 45.3497C705.197 46.2639 705.811 47.0879 706.561 47.7799C707.037 48.2405 708.619 49.4556 711.28 51.4128C713.788 53.1024 715.991 55.1995 717.8 57.6165C718.91 59.2319 719.522 61.1346 719.561 63.0912C719.567 64.3824 719.302 65.6608 718.781 66.8439C718.261 68.0269 717.498 69.0884 716.54 69.9601C715.574 70.9097 714.427 71.657 713.165 72.1579C711.905 72.6588 710.554 72.9032 709.198 72.8766C707.05 72.8999 704.946 72.2854 703.153 71.1113C701.046 69.577 699.343 67.5582 698.189 65.2273Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.5513 26.342H63.3664V33.1086H56.5513V26.342ZM66.7355 36.2937H73.5377V43.073H66.7355V36.2937ZM56.5513 36.2937H63.3664V43.073H56.5513V36.2937ZM66.7355 26.342H73.5377V33.1086H66.7355V26.342Z"
                      fill="#D29A3A"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_22_657">
                    <rect
                      width="719.19"
                      height="106.244"
                      fill="white"
                      transform="translate(0.410004 0.682861)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-[20px] sm:text-[24px] lg:text-[30px] text-brand-medium-blue font-normal">
              Building Communities Throughout The Central Valley
            </h3>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-medium-blue">
              For More Information about PASEO, Please Call or Text
            </p>

            <div className="text-center">
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-brand-medium-blue leading-relaxed">
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
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-brand-medium-blue leading-relaxed">
                Hours
                <br />
                Monday – Closed
                <br />
                Tuesday – Saturday 10am – 5pm
                <br />
                Sunday – 11am – 4pm
              </p>
            </div>

            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-brand-medium-blue">
              154 Montage Drive, Merced, CA 95348
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <a
                href="tel:209-308-9000"
                className="flex items-center gap-2 text-black font-bold text-[16px] lg:text-[18px]"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-brand-gold" />
                209-308-9000
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 text-black font-bold text-[16px] lg:text-[21px]"
              >
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 text-brand-gold" />
                Send Message
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center">
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
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-[90px] h-[96px] lg:w-[102px] lg:h-[109px]"
              />
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] text-black">
              <span>® All Rights Reserved</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
