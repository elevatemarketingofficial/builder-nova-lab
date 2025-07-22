import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Header from "../components/Header";

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
                <g clipPath="url(#clip0_11_1575)">
                  <mask
                    id="mask0_11_1575"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="359"
                    height="53"
                  >
                    <path d="M358.77 0H0.000488281V53H358.77V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_11_1575)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.7143 0L39.1168 5.67902V2.61619H46.8528V11.8111L62.5879 24.1199C60.9072 24.1199 59.1881 23.9668 57.4562 23.9668H54.3002L31.6566 6.17037L14.2537 19.7617H16.6144V28.9758C24.3118 24.758 39.662 22.4801 50.2718 24.2093C36.3683 25.2133 23.0015 29.9624 11.6046 37.9473V24.707H0.000488281L31.7143 0Z" fill="#D29A3A"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.0468 29.3395C48.4217 26.5426 57.2191 25.2042 66.0517 25.3833C60.7951 26.0335 55.6152 27.1939 50.586 28.8482C34.7676 34.0805 22.49 43.2372 16.6912 53.0064L8.19824 50.4093C14.6129 41.7823 25.8897 33.9402 40.0468 29.2821V29.3395Z" fill="#D29A3A"/>
                    <path d="M89.5618 20.6169L87.1368 22.9204C86.4437 22.1197 85.5884 21.4739 84.6262 21.0252C83.6641 20.5766 82.6179 20.3353 81.5563 20.317C80.7393 20.3058 79.9285 20.4577 79.1716 20.7635C78.4147 21.0693 77.7272 21.5229 77.1495 22.0976C76.5719 22.6722 76.1158 23.3561 75.8084 24.1089C75.501 24.8619 75.3484 25.6684 75.3596 26.481C75.3433 27.595 75.6174 28.6941 76.155 29.6714C76.6779 30.6041 77.4566 31.3698 78.4001 31.8792C79.3814 32.4184 80.4864 32.6955 81.6077 32.6832C82.5592 32.6958 83.5018 32.5044 84.3718 32.1217C85.4017 31.6052 86.3328 30.9142 87.1238 30.0798L89.4778 32.5237C88.3746 33.6582 87.0699 34.5797 85.6292 35.242C84.327 35.77 82.9302 36.0284 81.524 36.0013C80.2409 36.0479 78.9616 35.8343 77.764 35.3735C76.5664 34.9128 75.4756 34.2146 74.5578 33.3213C73.6589 32.4189 72.9551 31.3432 72.4896 30.1603C72.0241 28.9774 71.8068 27.7123 71.8508 26.4427C71.8187 24.7539 72.2441 23.0876 73.0824 21.6187C73.9289 20.1889 75.1507 19.0154 76.6169 18.2241C78.13 17.3769 79.839 16.937 81.5751 16.9478C83.0762 16.9468 84.5602 17.269 85.9243 17.8922C87.3227 18.5253 88.5637 19.4553 89.5618 20.6169Z" fill="black"/>
                    <path d="M92.563 17.4263H96.0846V24.2794H102.185V17.4263H105.694V35.5801H102.185V27.6231H96.0912V35.5801H92.563V17.4263Z" fill="black"/>
                    <path d="M118.498 16.9733C119.74 16.9599 120.973 17.2006 122.117 17.6802C123.263 18.1599 124.297 18.8683 125.156 19.7618C126.06 20.6469 126.773 21.706 127.252 22.8744C127.73 24.0428 127.964 25.296 127.94 26.5575C127.966 27.8059 127.734 29.0462 127.262 30.2028C126.789 31.3592 126.083 32.4074 125.188 33.283C123.392 35.0496 120.963 36.0341 118.437 36.0198C115.911 36.0054 113.494 34.9935 111.717 33.2064C110.265 31.7023 109.339 29.7721 109.078 27.7027C108.817 25.6333 109.234 23.5353 110.267 21.7207C111.107 20.2821 112.311 19.0878 113.76 18.257C115.209 17.4261 116.851 16.9879 118.523 16.9861L118.498 16.9733ZM118.459 20.3552C117.666 20.3366 116.878 20.4825 116.145 20.7835C115.411 21.0845 114.749 21.5341 114.2 22.1035C113.623 22.6936 113.174 23.3935 112.877 24.1612C112.581 24.9289 112.444 25.7484 112.475 26.5702C112.436 27.4779 112.613 28.3818 112.989 29.2095C113.366 30.0372 113.932 30.7658 114.643 31.3368C115.724 32.2285 117.086 32.712 118.491 32.7023C119.283 32.7093 120.067 32.5517 120.794 32.2397C121.52 31.9276 122.174 31.468 122.712 30.8901C123.838 29.7054 124.466 28.1368 124.466 26.5065C124.466 24.876 123.838 23.3075 122.712 22.1227C122.165 21.5502 121.505 21.0974 120.773 20.7931C120.041 20.4887 119.253 20.3396 118.459 20.3552Z" fill="black"/>
                    <path d="M130.968 17.4263H134.413V35.5801H130.968V17.4263Z" fill="black"/>
                    <path d="M155.093 20.6168L152.662 22.9203C151.97 22.1192 151.116 21.4729 150.155 21.0242C149.195 20.5754 148.148 20.3344 147.088 20.3169C146.271 20.3057 145.46 20.4575 144.703 20.7634C143.946 21.0692 143.259 21.5228 142.68 22.0974C142.103 22.672 141.647 23.356 141.34 24.1088C141.033 24.8617 140.88 25.6683 140.891 26.4809C140.875 27.5939 141.147 28.6923 141.68 29.6713C142.204 30.6028 142.983 31.368 143.925 31.8791C144.906 32.4175 146.011 32.6945 147.132 32.6831C148.084 32.6965 149.027 32.505 149.897 32.1216C150.926 31.6051 151.858 30.9141 152.648 30.0796L155.003 32.5236C153.9 33.6587 152.595 34.5804 151.154 35.2418C149.852 35.7694 148.455 36.0277 147.049 36.0012C145.766 36.0488 144.486 35.8358 143.288 35.375C142.091 34.9142 141 34.2154 140.083 33.3212C138.634 31.7707 137.713 29.8066 137.448 27.7065C137.183 25.6065 137.589 23.4768 138.608 21.6186C139.452 20.1876 140.675 19.0136 142.141 18.2239C143.652 17.3767 145.36 16.9368 147.094 16.9477C148.595 16.9453 150.079 17.2676 151.443 17.8921C152.844 18.5259 154.089 19.4557 155.093 20.6168Z" fill="black"/>
                    <path d="M158.14 17.4263H168.102V20.8082H161.591V24.0944H168.102V27.4124H161.591V32.1662H168.102V35.5609H158.14V17.4263Z" fill="black"/>
                    <path d="M177.063 17.4263H180.636L185.229 30.3221L189.886 17.4263H193.452L186.858 35.5801H183.509L177.063 17.4263Z" fill="black"/>
                    <path d="M201.798 17.4263H205.326L212.344 35.5801H208.732L207.302 31.8408H199.86L198.405 35.5801H194.799L201.798 17.4263ZM203.581 22.2439L201.137 28.4717H206.019L203.581 22.2439Z" fill="black"/>
                    <path d="M215.025 17.4263H218.502V32.2811H223.556V35.5801H215.025V17.4263Z" fill="black"/>
                    <path d="M226.199 17.4263H229.676V32.2811H234.737V35.5801H226.199V17.4263Z" fill="black"/>
                    <path d="M237.386 17.4263H247.348V20.8082H240.837V24.0944H247.348V27.4124H240.837V32.1662H247.348V35.5609H237.386V17.4263Z" fill="black"/>
                    <path d="M249.292 17.4263H253.019L256.424 23.9604L259.812 17.4263H263.494L258.151 27.6996V35.5609H254.654V27.6996L249.292 17.4263Z" fill="black"/>
                    <path d="M273.558 17.4263H275.38V25.0388H284.669V17.4263H286.497V35.58H284.669V26.819H275.38V35.58H273.558V17.4263Z" fill="black"/>
                    <path d="M299.621 16.9733C300.904 16.9402 302.181 17.1668 303.375 17.6396C304.568 18.1124 305.651 18.8212 306.561 19.7234C307.897 21.0636 308.804 22.7667 309.17 24.6186C309.535 26.4704 309.342 28.3882 308.614 30.1312C307.887 31.8742 306.658 33.3644 305.081 34.4144C303.505 35.4646 301.652 36.0277 299.755 36.033C298.484 36.0613 297.221 35.8307 296.043 35.3556C294.865 34.8805 293.796 34.1708 292.904 33.2701C292.006 32.404 291.297 31.3635 290.82 30.2131C290.343 29.0626 290.109 27.827 290.133 26.5829C290.123 24.8822 290.566 23.2091 291.416 21.7334C292.232 20.2774 293.429 19.069 294.88 18.2367C296.319 17.4035 297.956 16.9674 299.621 16.9733ZM299.704 18.7344C298.349 18.7324 297.019 19.0962 295.855 19.7872C294.672 20.4589 293.692 21.4355 293.019 22.614C292.335 23.8222 291.982 25.1893 292 26.5765C291.995 27.5852 292.19 28.5852 292.575 29.5185C292.959 30.452 293.526 31.3006 294.241 32.0157C294.956 32.7308 295.806 33.2982 296.742 33.6855C297.679 34.0726 298.683 34.272 299.697 34.2719C301.076 34.2806 302.433 33.9263 303.629 33.2446C304.811 32.5854 305.787 31.6165 306.452 30.4433C307.13 29.2372 307.477 27.8752 307.459 26.4935C307.479 25.1238 307.131 23.7737 306.452 22.582C305.751 21.421 304.761 20.4591 303.579 19.7885C302.396 19.118 301.059 18.7616 299.697 18.7535L299.704 18.7344Z" fill="black"/>
                    <path d="M312.18 35.58L314.798 17.4263H315.093L322.508 32.3194L329.853 17.4263H330.148L332.771 35.58H330.981L329.179 22.5948L322.765 35.5737H322.296L315.766 22.4927L313.976 35.5737L312.18 35.58Z" fill="black"/>
                    <path d="M336.37 17.4263H346.826V19.2066H338.192V24.8919H346.748V26.6722H338.192V33.7998H346.748V35.58H336.37V17.4263Z" fill="black"/>
                    <path d="M348.089 32.1981L349.641 31.2728C350.732 33.2722 351.994 34.2719 353.426 34.2719C354.026 34.2758 354.618 34.1288 355.145 33.8444C355.656 33.588 356.084 33.1918 356.377 32.7022C356.654 32.2436 356.8 31.7186 356.8 31.1835C356.779 30.536 356.555 29.9114 356.159 29.3969C355.263 28.2826 354.212 27.3026 353.035 26.4872C351.992 25.7746 351.038 24.9414 350.193 24.005C349.569 23.213 349.228 22.236 349.225 21.2292C349.217 20.4723 349.414 19.7272 349.795 19.0726C350.176 18.4221 350.732 17.8898 351.399 17.5347C352.089 17.16 352.865 16.9667 353.651 16.9732C354.497 16.9708 355.329 17.191 356.063 17.6113C357.006 18.2248 357.816 19.0213 358.443 19.9531L356.955 21.0761C356.478 20.3817 355.882 19.775 355.197 19.2831C354.72 18.999 354.174 18.8511 353.619 18.8556C352.955 18.8234 352.305 19.0527 351.809 19.4937C351.584 19.7028 351.405 19.9568 351.284 20.2394C351.164 20.522 351.105 20.8267 351.111 21.1336C351.111 21.5298 351.196 21.9213 351.361 22.2822C351.584 22.7382 351.891 23.1492 352.265 23.4945C352.503 23.7242 353.292 24.3304 354.619 25.3067C355.87 26.1496 356.969 27.1957 357.872 28.4014C358.425 29.2073 358.73 30.1565 358.75 31.1325C358.753 31.7767 358.621 32.4144 358.361 33.0045C358.102 33.5947 357.721 34.1242 357.243 34.5591C356.761 35.0328 356.189 35.4056 355.559 35.6554C354.931 35.9054 354.257 36.0273 353.58 36.014C352.509 36.0256 351.46 35.719 350.565 35.1333C349.514 34.3679 348.665 33.3609 348.089 32.1981Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.0068 12.8H31.4066V16.1756H28.0068V12.8ZM33.0873 17.7644H36.4806V21.1463H33.0873V17.7644ZM28.0068 17.7644H31.4066V21.1463H28.0068V17.7644ZM33.0873 12.8H36.4806V16.1756H33.0873V12.8Z" fill="#D29A3A"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_11_1575">
                    <rect width="358.769" height="53" fill="white" transform="translate(0.000488281)"/>
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
            className="flex items-center gap-2 bg-brand-gold text-white px-5 py-3 rounded-sm text-[14px] font-medium uppercase hover:bg-brand-gold/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            View Listings
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[496px] w-full"
        style={{
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F11df0f1a4b66417c8ae95d480b3d7ec4')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1
            className="text-white font-bold mb-4 text-4xl md:text-6xl lg:text-[74.844px] leading-tight lg:leading-[80px] max-w-4xl"
            style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif"
            }}
          >
            Register Your Interest
          </h1>
          <p
            className="text-white text-sm md:text-base max-w-3xl"
            style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              lineHeight: "26.4px"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                {models.map((model) => (
                  <div key={model.id} className="flex flex-col items-start gap-3">
                    <img
                      src={model.image}
                      alt={`Model ${model.name}`}
                      className="w-full max-w-[200px] h-[200px] object-cover"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <footer className="bg-[#F9FAFB] py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                alt="Choice Valley Homes Logo"
                className="h-24"
              />
            </div>

            <h3 className="text-gray-600 text-[30px] leading-9 mb-8 px-4">
              Building communities throughout the Central Valley
            </h3>
            <p className="text-gray-600 mb-8">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-7">
                <span>Stephanie Stine</span><br />
                <span>Community Sales Manager</span><br />
                <span>209-308-9000</span><br />
                <span>DRE# 02189834</span>
              </p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-7">
                <span>Hours</span><br />
                <span>Monday – Closed</span><br />
                <span>Tuesday – Saturday 10am – 5pm</span><br />
                <span>Sunday – 11am – 4pm</span>
              </p>
            </div>
            <p className="text-gray-600 text-lg leading-7 mb-8">
              154 Montage Drive, Merced, CA 95348
            </p>
            <div className="flex justify-center items-center mb-8">
              <a href="tel:209-308-9000" className="flex items-center text-lg font-bold leading-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="ml-2">209-308-9000</span>
              </a>
              <span className="text-gray-300 ml-4">|</span>
              <a href="/contact" className="flex items-center text-xl font-bold leading-7 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="ml-2">Send Message</span>
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <a href="#" className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-20 h-24"
              />
            </div>
            <div className="flex justify-center items-center text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300 ml-2">|</span>
              <a href="#" className="ml-2 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
