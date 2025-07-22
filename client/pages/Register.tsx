import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
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
