import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Register() {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [formData, setFormData] = useState({
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    zipCode: "",
    timeframe: "",
  });

  const models = [
    {
      id: "1691",
      name: "1691",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1c15f03cde79434616e878a1ca5ea11dcf3bf138?width=400",
    },
    {
      id: "1724",
      name: "1724", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4dd70e36ddd2d2e5f03811954d0ab82c390815d2?width=400",
    },
    {
      id: "1794",
      name: "1794",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/717885aed07a142a4d98a0b9821420926e5452cd?width=400",
    },
    {
      id: "1874", 
      name: "1874",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2f4b03399c084d7ddddcb8d1fd0163459de6b9ea?width=400",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { selectedModel, ...formData });
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* Hero Section */}
      <section 
        className="relative h-[496px] w-full"
        style={{
          background: "url('https://api.builder.io/api/v1/image/assets/TEMP/d049e63e73a48af629ef169e2bbcb6e822121891?width=3840') lightgray 0% 0% / 75px 75px repeat"
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.57) 100%)",
            opacity: 0.91
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 
            className="text-white font-bold leading-[80px] mb-4"
            style={{
              fontSize: "74.844px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              width: "796px",
              height: "80px"
            }}
          >
            Register Your Interest
          </h1>
          <p 
            className="text-white"
            style={{
              fontSize: "16px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              lineHeight: "26.4px",
              width: "786px",
              height: "20px"
            }}
          >
            Stay in the know about upcoming events, exclusive new home releases, builder incentives, and more.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-[70px]">
        <div className="max-w-[960px] mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Model Selection */}
            <div className="space-y-8">
              <div className="flex items-start gap-2">
                <label className="text-[#3A4F66] font-medium text-[15px] leading-[24.75px]">
                  What model are you interested in?
                </label>
                <span className="text-[#F56C6C] text-[15px] leading-[24.75px]"> *</span>
                <div className="flex items-center justify-center w-4 h-4 ml-2 mt-1">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5598 12.73V11.35C10.5598 11.29 10.5298 11.23 10.4998 11.17C10.4398 11.11 10.3798 11.08 10.2898 11.08H9.4798V6.69999C9.4798 6.60999 9.4498 6.54999 9.3898 6.48999C9.3298 6.45999 9.2698 6.42999 9.1798 6.42999H6.4498C6.3598 6.42999 6.2998 6.45999 6.2398 6.48999C6.2098 6.54999 6.1798 6.60999 6.1798 6.69999V8.07999C6.1798 8.13999 6.2098 8.22999 6.2398 8.25999C6.2998 8.31999 6.3598 8.34999 6.4498 8.34999H7.2598V11.08H6.4498C6.3598 11.08 6.2998 11.11 6.2398 11.17C6.2098 11.23 6.1798 11.29 6.1798 11.35V12.73C6.1798 12.82 6.2098 12.88 6.2398 12.94C6.2998 12.97 6.3598 13 6.4498 13H10.2898C10.3798 13 10.4398 12.97 10.4998 12.94C10.5298 12.88 10.5598 12.82 10.5598 12.73ZM9.4798 5.04999V3.66999C9.4798 3.60999 9.4498 3.54999 9.3898 3.48999C9.3298 3.42999 9.2698 3.39999 9.1798 3.39999H7.5598C7.4698 3.39999 7.4098 3.42999 7.3498 3.48999C7.2898 3.54999 7.2598 3.60999 7.2598 3.66999V5.04999C7.2598 5.13999 7.2898 5.19999 7.3498 5.25999C7.4098 5.28999 7.4698 5.31999 7.5598 5.31999H9.1798C9.2698 5.31999 9.3298 5.28999 9.3898 5.25999C9.4498 5.19999 9.4798 5.13999 9.4798 5.04999ZM14.9398 8.61999C14.9398 9.81999 14.6698 10.93 14.0698 11.92C13.4698 12.94 12.6898 13.72 11.6698 14.32C10.6798 14.92 9.5698 15.19 8.3698 15.19C7.1698 15.19 6.0598 14.92 5.0698 14.32C4.0498 13.72 3.2698 12.94 2.6698 11.92C2.0698 10.93 1.7998 9.81999 1.7998 8.61999C1.7998 7.41999 2.0698 6.30999 2.6698 5.31999C3.2698 4.29999 4.0498 3.51999 5.0698 2.91999C6.0598 2.31999 7.1698 2.04999 8.3698 2.04999C9.5698 2.04999 10.6798 2.31999 11.6698 2.91999C12.6898 3.51999 13.4698 4.29999 14.0698 5.31999C14.6698 6.30999 14.9398 7.41999 14.9398 8.61999Z" fill="#1A7EFB"/>
                  </svg>
                </div>
              </div>

              {/* Model Options Grid */}
              <div className="grid grid-cols-4 gap-10">
                {models.map((model) => (
                  <div key={model.id} className="flex flex-col items-start gap-3">
                    <img
                      src={model.image}
                      alt={`Model ${model.name}`}
                      className="w-[200px] h-[200px] object-cover"
                    />
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="model"
                        value={model.id}
                        checked={selectedModel === model.id}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-[13px] h-[13px] border border-[#767676] rounded-sm"
                      />
                      <span className="text-[#3A4F66] text-[15px] leading-[24.75px]">
                        {model.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Textarea */}
            <div className="space-y-2">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="What are you looking for in your new home?"
                className="w-full h-[168px] p-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96] resize-none"
                style={{
                  fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                }}
              />
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#3A4F66] text-[14px] font-medium leading-[24.75px]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full h-[38px] px-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96]"
                  style={{
                    fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#3A4F66] text-[15px] font-medium leading-[24.75px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full h-[38px] px-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96]"
                  style={{
                    fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full h-[38px] px-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96]"
                style={{
                  fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                }}
              />
            </div>

            <div className="space-y-2">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="w-full h-[38px] px-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96]"
                style={{
                  fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                }}
              />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className="w-full h-[38px] px-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96]"
                style={{
                  fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                }}
              />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                placeholder="When are you looking to buy?"
                className="w-full h-[38px] px-4 border border-[#DADBDD] rounded-[7px] bg-white text-[16px] text-[#868E96]"
                style={{
                  fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif"
                }}
              />
            </div>

            {/* reCAPTCHA */}
            <div className="w-[302px] h-[76px] border border-[#D3D3D3] bg-[#F9F9F9] rounded-[3px] p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-[28px] h-[28px] border-2 border-[#444746] bg-white rounded-sm"></div>
                </div>
                <span className="text-black text-[14px] leading-[17px]" style={{ fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif" }}>
                  I'm not a robot
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/44dd76a5d6a9d594e04cf51924f938e06bda08a3?width=64"
                  alt="reCAPTCHA logo"
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[#555] text-[10px] leading-[10px] text-center mt-1" style={{ fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif" }}>
                  reCAPTCHA
                </span>
              </div>
              <div className="absolute bottom-2 right-4 flex items-center gap-1 text-[8px] text-[#555]" style={{ fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif" }}>
                <span>Privacy</span>
                <span> - </span>
                <span>Terms</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[129px] h-[40px] bg-[#1A7EFB] text-white text-[15px] font-medium rounded-[3px] leading-[24.75px]"
              style={{
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif"
              }}
            >
              Submit Form
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#F2F4F7] py-[60px]">
        <div className="max-w-[1270px] mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <svg width="720" height="107" viewBox="0 0 720 107" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_11_1521)">
                <mask id="mask0_11_1521" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="720" height="107">
                  <path d="M719.6 0.602997H0.410156V106.847H719.6V0.602997Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_11_1521)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M63.9838 0.602997L78.8228 11.9872V5.84741H94.3305V24.2795L125.873 48.9538C122.504 48.9538 119.058 48.6469 115.586 48.6469H109.26L63.868 12.9721L28.9823 40.2175H33.7144V58.6881C49.1448 50.233 79.9158 45.6666 101.184 49.133C73.3131 51.1457 46.5181 60.6657 23.6717 76.6724V50.1307H0.410156L63.9838 0.602997Z" fill="#D29A3A"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M80.6874 59.4172C97.4759 53.8105 115.111 51.1276 132.817 51.4865C122.28 52.7899 111.896 55.1161 101.814 58.4322C70.1047 68.921 45.493 87.2765 33.8688 106.86L16.8438 101.654C29.7025 84.36 52.3082 68.6397 80.6874 59.302V59.4172Z" fill="#D29A3A"/>
                  <path d="M179.944 41.9316L175.083 46.5493C173.694 44.9442 171.979 43.6496 170.051 42.7502C168.122 41.8508 166.025 41.367 163.897 41.3304C162.259 41.308 160.633 41.6124 159.116 42.2255C157.599 42.8384 156.221 43.7477 155.063 44.8997C153.905 46.0516 152.991 47.4226 152.374 48.9318C151.758 50.4411 151.452 52.058 151.475 53.6868C151.442 55.9198 151.991 58.1232 153.069 60.0823C154.117 61.952 155.678 63.4869 157.57 64.5081C159.537 65.589 161.752 66.1444 164 66.1197C165.907 66.1451 167.797 65.7613 169.541 64.9942C171.605 63.9587 173.472 62.5737 175.057 60.9009L179.776 65.8C177.564 68.0741 174.949 69.9215 172.061 71.249C169.451 72.3076 166.651 72.8255 163.832 72.7713C161.26 72.8646 158.695 72.4364 156.295 71.5127C153.894 70.5892 151.707 69.1895 149.867 67.3989C148.065 65.59 146.655 63.4336 145.722 61.0624C144.788 58.691 144.353 56.155 144.441 53.6101C144.377 50.2247 145.229 46.8844 146.91 43.9398C148.607 41.0736 151.056 38.7212 153.995 37.1349C157.028 35.4367 160.454 34.5548 163.934 34.5766C166.943 34.5746 169.918 35.2204 172.653 36.4697C175.456 37.7387 177.944 39.603 179.944 41.9316Z" fill="black"/>
                  <path d="M185.961 35.5359H193.02V49.2737H205.25V35.5359H212.283V71.927H205.25V55.9764H193.034V71.927H185.961V35.5359Z" fill="black"/>
                  <path d="M237.95 34.6277C240.441 34.6009 242.911 35.0833 245.206 36.0447C247.503 37.0063 249.575 38.4265 251.298 40.2174C253.109 41.9919 254.539 44.1148 255.499 46.4571C256.458 48.7992 256.927 51.3114 256.878 53.8402C256.931 56.3427 256.466 58.8291 255.518 61.1475C254.57 63.4658 253.155 65.5669 251.362 67.3221C247.761 70.8636 242.892 72.8371 237.828 72.8084C232.764 72.7794 227.919 70.751 224.358 67.1686C221.447 64.1536 219.592 60.2842 219.067 56.1359C218.544 51.9876 219.381 47.7819 221.452 44.1444C223.135 41.2606 225.549 38.8664 228.452 37.2009C231.357 35.5354 234.649 34.657 238.001 34.6534L237.95 34.6277ZM237.872 41.4071C236.283 41.3698 234.703 41.6622 233.233 42.2657C231.762 42.869 230.435 43.7702 229.335 44.9118C228.179 46.0945 227.279 47.4976 226.684 49.0365C226.089 50.5754 225.814 52.2183 225.876 53.8657C225.799 55.6853 226.154 57.4973 226.908 59.1565C227.663 60.8157 228.797 62.2762 230.222 63.4208C232.39 65.2083 235.121 66.1776 237.937 66.1581C239.525 66.1722 241.097 65.8562 242.553 65.2307C244.01 64.6052 245.321 63.6838 246.398 62.5254C248.655 60.1505 249.914 57.0061 249.914 53.7379C249.914 50.4695 248.655 47.3252 246.398 44.9502C245.303 43.8026 243.979 42.8948 242.511 42.2848C241.043 41.6746 239.464 41.3758 237.872 41.4071Z" fill="black"/>
                  <path d="M262.947 35.5359H269.853V71.927H262.947V35.5359Z" fill="black"/>
                  <path d="M311.31 41.9316L306.435 46.5493C305.049 44.9433 303.336 43.6478 301.411 42.7483C299.485 41.8487 297.388 41.3655 295.262 41.3304C293.624 41.308 291.999 41.6123 290.481 42.2255C288.964 42.8384 287.586 43.7477 286.427 44.8997C285.27 46.0515 284.356 47.4226 283.74 48.9317C283.124 50.4411 282.818 52.0579 282.839 53.6867C282.808 55.918 283.354 58.1199 284.422 60.0823C285.473 61.9496 287.034 63.4836 288.922 64.5081C290.89 65.5874 293.104 66.1426 295.352 66.1197C297.259 66.1467 299.149 65.7627 300.894 64.9942C302.957 63.9587 304.824 62.5736 306.409 60.9009L311.13 65.8C308.918 68.0754 306.303 69.9231 303.413 71.249C300.803 72.3066 298.003 72.8244 295.185 72.7712C292.612 72.8667 290.046 72.4396 287.645 71.5159C285.245 70.5923 283.059 69.1913 281.22 67.3989C278.317 64.2907 276.47 60.3535 275.939 56.1437C275.407 51.934 276.221 47.6648 278.263 43.9397C279.956 41.0712 282.406 38.7179 285.347 37.1349C288.376 35.4365 291.798 34.5546 295.275 34.5765C298.284 34.5718 301.259 35.2178 303.992 36.4696C306.802 37.7402 309.297 39.604 311.31 41.9316Z" fill="black"/>
                  <path d="M317.417 35.5359H337.386V42.3154H324.335V48.9028H337.386V55.5542H324.335V65.0836H337.386V71.8886H317.417V35.5359Z" fill="black"/>
                  <path d="M355.35 35.5359H362.513L371.72 61.387L381.055 35.5359H388.204L374.986 71.927H368.273L355.35 35.5359Z" fill="black"/>
                  <path d="M404.933 35.5359H412.006L426.074 71.927H418.833L415.966 64.4313H401.05L398.132 71.927H390.904L404.933 35.5359ZM408.508 45.1933L403.609 57.6776H413.395L408.508 45.1933Z" fill="black"/>
                  <path d="M431.449 35.5359H438.418V65.3139H448.551V71.927H431.449V35.5359Z" fill="black"/>
                  <path d="M453.848 35.5359H460.818V65.3139H470.963V71.927H453.848V35.5359Z" fill="black"/>
                  <path d="M476.273 35.5359H496.244V42.3154H483.192V48.9028H496.244V55.5542H483.192V65.0836H496.244V71.8886H476.273V35.5359Z" fill="black"/>
                  <path d="M500.139 35.5359H507.611L514.438 48.6341L521.228 35.5359H528.609L517.898 56.1299V71.8886H510.889V56.1299L500.139 35.5359Z" fill="black"/>
                  <path d="M548.784 35.5357H552.436V50.7958H571.056V35.5357H574.721V71.9267H571.056V54.3644H552.436V71.9267H548.784V35.5357Z" fill="black"/>
                  <path d="M601.03 34.6277C603.603 34.5614 606.163 35.0158 608.556 35.9634C610.947 36.9111 613.119 38.3322 614.943 40.1406C617.621 42.8273 619.44 46.2413 620.172 49.9535C620.905 53.6657 620.517 57.5102 619.059 61.0042C617.601 64.4981 615.136 67.4854 611.977 69.5903C608.817 71.6954 605.102 72.8242 601.3 72.835C598.752 72.8916 596.22 72.4295 593.858 71.4771C591.496 70.5246 589.355 69.1019 587.567 67.2964C585.766 65.5602 584.344 63.4744 583.389 61.1683C582.433 58.8621 581.964 56.3852 582.011 53.8912C581.991 50.4819 582.879 47.1281 584.584 44.1699C586.218 41.2513 588.618 38.8288 591.527 37.1604C594.412 35.4903 597.693 34.6159 601.03 34.6277ZM601.197 38.1581C598.481 38.154 595.815 38.8834 593.482 40.2686C591.11 41.6151 589.146 43.5726 587.797 45.9352C586.424 48.3571 585.718 51.0977 585.754 53.8785C585.743 55.9005 586.135 57.905 586.906 59.776C587.676 61.6472 588.812 63.3484 590.246 64.7819C591.679 66.2154 593.384 67.3528 595.26 68.1291C597.139 68.9051 599.151 69.3048 601.184 69.3046C603.948 69.3221 606.668 68.6117 609.066 67.2453C611.434 65.9239 613.391 63.9816 614.724 61.6299C616.083 59.2121 616.779 56.4818 616.743 53.7121C616.782 50.9664 616.086 48.26 614.724 45.8711C613.319 43.5437 611.334 41.6155 608.964 40.2712C606.593 38.9272 603.914 38.2127 601.184 38.1964L601.197 38.1581Z" fill="black"/>
                  <path d="M626.207 71.9267L631.454 35.5357H632.046L646.91 65.3904L661.634 35.5357H662.225L667.484 71.9267H663.896L660.284 45.8966L647.425 71.9141H646.485L633.396 45.692L629.808 71.9141L626.207 71.9267Z" fill="black"/>
                  <path d="M674.698 35.5357H695.658V39.1045H678.35V50.5014H695.502V54.0702H678.35V68.3581H695.502V71.9267H674.698V35.5357Z" fill="black"/>
                  <path d="M698.189 65.1475L701.302 63.2927C703.489 67.3007 706.017 69.3046 708.889 69.3046C710.092 69.3124 711.277 69.0177 712.335 68.4476C713.359 67.9337 714.216 67.1395 714.804 66.158C715.358 65.2387 715.653 64.1863 715.653 63.1137C715.61 61.8157 715.161 60.5635 714.366 59.5321C712.572 57.2984 710.463 55.3338 708.104 53.6993C706.014 52.2709 704.102 50.6006 702.408 48.7235C701.156 47.1359 700.473 45.1774 700.466 43.1593C700.45 41.6419 700.846 40.1483 701.61 38.836C702.374 37.5321 703.487 36.4649 704.826 35.7532C706.208 35.002 707.763 34.6145 709.339 34.6275C711.035 34.6228 712.704 35.0641 714.173 35.9067C716.065 37.1365 717.688 38.7331 718.945 40.6011L715.962 42.8523C715.005 41.4603 713.812 40.2441 712.438 39.258C711.483 38.6885 710.388 38.392 709.275 38.401C707.944 38.3364 706.642 38.7961 705.648 39.6802C705.195 40.0993 704.837 40.6086 704.595 41.1751C704.353 41.7415 704.236 42.3523 704.247 42.9675C704.247 43.7618 704.419 44.5466 704.749 45.2699C705.197 46.1841 705.811 47.0081 706.561 47.7001C707.037 48.1607 708.619 49.3758 711.28 51.333C713.788 53.0226 715.991 55.1197 717.8 57.5367C718.91 59.1521 719.522 61.0548 719.561 63.0114C719.567 64.3026 719.303 65.581 718.781 66.7641C718.261 67.9471 717.498 69.0086 716.54 69.8803C715.574 70.8299 714.427 71.5772 713.165 72.0781C711.905 72.579 710.555 72.8234 709.198 72.7968C707.05 72.8201 704.947 72.2056 703.153 71.0315C701.047 69.4971 699.343 67.4783 698.189 65.1475Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M56.5513 26.2621H63.3664V33.0286H56.5513V26.2621ZM66.7355 36.2137H73.5377V42.993H66.7355V36.2137ZM56.5513 36.2137H63.3664V42.993H56.5513V36.2137ZM66.7355 26.2621H73.5377V33.0286H66.7355V26.2621Z" fill="#D29A3A"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_11_1521">
                  <rect width="719.19" height="106.244" fill="white" transform="translate(0.410156 0.602997)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Main Text */}
          <div className="text-center mb-8">
            <h2 className="text-[#3A4F66] text-[30px] leading-[49.5px] font-normal capitalize mb-4">
              Building communities throughout the Central Valley
            </h2>
            <p className="text-[#3A4F66] text-[16px] leading-[26.4px] mb-6">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="text-[#3A4F66] text-[18px] leading-[29.7px] text-center mb-8">
              <p>Stephanie Stine</p>
              <p>Community Sales Manager</p>
              <p>209-308-9000</p>
              <p>DRE# 02189834</p>
            </div>
            <div className="text-[#3A4F66] text-[18px] leading-[29.7px] text-center mb-8">
              <p>Hours</p>
              <p>Monday – Closed</p>
              <p>Tuesday – Saturday 10am – 5pm</p>
              <p>Sunday – 11am – 4pm</p>
            </div>
            <p className="text-[#3A4F66] text-[18px] leading-[29.7px] text-center mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#D29A3A] text-[21px]">📞</span>
              <span className="text-black text-[18px] font-bold">209-308-9000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D29A3A] text-[21px]">✉️</span>
              <span className="text-black text-[21px] font-bold">Send Message</span>
            </div>
          </div>

          {/* Social Link */}
          <div className="flex justify-center mb-8">
            <div className="w-[50px] h-[50px] bg-[#262626] rounded-full flex items-center justify-center">
              <span className="text-white text-[25px]">📘</span>
            </div>
          </div>

          {/* Equal Housing Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3e6ac3f800323adc39b4a8948c4932c2680106f2?width=203"
              alt="Equal Housing Opportunity"
              className="w-[102px] h-[109px]"
            />
          </div>

          {/* Bottom Links */}
          <div className="flex justify-center items-center gap-2 text-[16px]">
            <span className="text-black font-medium">® All Rights Reserved</span>
            <span className="text-[#DDD]">|</span>
            <span className="text-black font-medium">Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
