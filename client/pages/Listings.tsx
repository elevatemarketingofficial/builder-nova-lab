import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Phone,
  MessageSquare,
  ExternalLink,
  Bed,
  Bath,
  Square,
  Car,
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Listings() {
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

  const properties = [
    {
      id: 1,
      title: "218 Montage",
      price: "$399,000",
      beds: 4,
      baths: 2.5,
      sqft: "1746 Sq. Ft.",
      garage: "2 cars",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdf77fe81a4b3421d88ec12984e9ce8d6?format=webp&width=800",
    },
    {
      id: 2,
      title: "184 Montage",
      price: "$449,000",
      beds: 4,
      baths: 2.5,
      sqft: "1824 Sq. Ft.",
      garage: "2 cars",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdf77fe81a4b3421d88ec12984e9ce8d6?format=webp&width=800",
    },
    {
      id: 3,
      title: "192 Montage",
      price: "$499,000",
      beds: 5,
      baths: 4,
      sqft: "1890 Sq. Ft.",
      garage: "2 cars",
      image:
        "https://cdn.builder.io/o/assets%2F0c5380d861a94486888626352de6a4fa%2Fdd9632c78afe47a4a4fb63fd85f31e0d?alt=media&token=502cd377-28a2-46d3-96ac-c9b3da739bab&apiKey=0c5380d861a94486888626352de6a4fa",
    },
    {
      id: 4,
      title: "110 Montage",
      price: "$369,000",
      beds: 3,
      baths: 2.5,
      sqft: "1336 Sq. Ft.",
      garage: "2 cars",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdf77fe81a4b3421d88ec12984e9ce8d6?format=webp&width=800",
    },
  ];

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
                <g clipPath="url(#clip0_34_1058)">
                  <mask
                    id="mask0_34_1058"
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
                  <g mask="url(#mask0_34_1058)">
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
                      d="M155.093 21.1168L152.662 23.4204C151.97 22.6193 151.116 21.973 150.155 21.5243C149.195 21.0755 148.148 20.3345 147.088 20.3169C146.271 20.3058 145.46 20.4576 144.703 21.2634C143.946 21.5692 143.259 22.0228 142.68 22.5975C142.103 23.1721 141.647 23.856 141.34 24.6089C141.033 25.3618 140.88 26.1684 140.891 26.9809C140.875 28.094 141.148 29.1924 141.68 30.1714C142.204 31.1029 142.983 31.3681 143.925 31.8792C144.906 32.4176 146.011 32.6946 147.132 32.6831C148.084 32.6966 149.027 32.5051 149.897 32.1217C150.926 32.1051 151.858 31.4142 152.649 30.0797L155.003 32.5237C153.9 33.6588 152.596 34.5805 151.154 35.2419C149.852 35.7695 148.455 36.0278 147.049 36.0013C145.766 36.0489 144.486 35.8358 143.288 35.3751C142.091 34.9143 141 34.2154 140.083 33.3213C138.635 31.7707 137.713 29.8066 137.448 27.7066C137.183 25.6066 137.589 23.4769 138.608 21.6186C139.452 20.1876 140.675 19.0137 142.142 18.724C143.652 17.3767 145.36 16.9368 147.094 16.9478C148.595 16.9454 150.079 17.2676 151.443 17.8921C152.844 18.5259 154.089 19.4557 155.093 21.1168Z"
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
                  <clipPath id="clip0_34_1058">
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
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* View Listings Button */}
          <Link
            to="/listings"
            className="bg-[#D29A3A] text-white px-5 py-3 rounded-sm text-[14px] font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
          >
            <Home className="w-4 h-4" />
            View Listings
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[516px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fdf77fe81a4b3421d88ec12984e9ce8d6?format=webp&width=800')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-[65px] font-bold leading-[68px] mb-4">
              Available Listings
            </h1>
            <div className="flex items-center justify-center gap-4 text-base">
              <span>Lender's Special Incentive</span>
              <div className="w-px h-6 bg-gray-300"></div>
              <span>Gated Community</span>
            </div>
          </div>
        </section>

        {/* Property Listings Section */}
        <section className="py-16 bg-[#FAFBFC]">
          <div className="max-w-[1290px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-[#EDEDED] p-2.5 rounded-sm"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-[400px] object-cover rounded-sm mb-4"
                  />

                  <div className="p-2.5">
                    <h3 className="text-[#192A3D] text-[21px] font-bold leading-[21px] mb-4">
                      {property.title}
                    </h3>

                    <p className="text-[#192A3D] text-[17px] font-normal leading-[24px] mb-6">
                      Sale Price: {property.price}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Bed className="w-5 h-5 text-[#353535]" />
                          <span className="text-[#3A4F66] text-[15px]">
                            Beds: {property.beds}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath className="w-5 h-5 text-[#353535]" />
                          <span className="text-[#3A4F66] text-[15px]">
                            {property.baths} Baths
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Square className="w-5 h-5 text-[#353535]" />
                          <span className="text-[#3A4F66] text-[15px]">
                            {property.sqft}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="w-5 h-5 text-[#353535]" />
                          <span className="text-[#3A4F66] text-[15px]">
                            {property.garage}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-[#D29A3A] text-white py-2.5 px-4 text-[14px] font-normal hover:bg-opacity-90 transition-colors">
                        Request More Information
                      </button>
                      <button className="bg-[#192A3D] text-white py-2.5 px-4 text-[14px] font-normal hover:bg-opacity-90 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-0 bg-[#FAFBFC]">
          <div className="max-w-[1270px] mx-auto">
            <div className="bg-[#EEE] h-[600px] relative overflow-hidden">
              {/* Map Header */}
              <div className="bg-white h-[85px] flex items-center justify-between px-4">
                <div className="w-[90px] h-[72px] flex items-center">
                  <svg
                    width="90"
                    height="72"
                    viewBox="0 0 90 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_251)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.0781 0.560059L53.1331 8.27411V4.11373H63.6412V16.6036L85.0142 33.3227C82.7315 33.3227 80.3963 33.1148 78.0437 33.1148H73.757L42.9998 8.94161L19.3612 27.4029H22.5677V39.9186C33.0231 34.1896 53.8737 31.0953 68.2853 33.4442C49.3996 34.808 31.2433 41.2587 15.7628 52.105V34.1201H0.000579834L43.0781 0.560059Z"
                        fill="#D19837"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M54.3964 40.4128C65.7722 36.6135 77.722 34.7955 89.7194 35.0386C82.5793 35.9219 75.5433 37.4982 68.7123 39.7453C47.2257 46.8523 30.5485 59.2901 22.6722 72.56L11.1358 69.0321C19.8489 57.3138 35.1668 46.6619 54.3964 40.3345V40.4128Z"
                        fill="#D19837"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.042 17.9465H42.6599V22.5317H38.042V17.9465ZM44.9426 24.6899H49.5521V29.2838H44.9426V24.6899ZM38.042 24.6899H42.6599V29.2838H38.042V24.6899ZM44.9426 17.9465H49.5521V22.5317H44.9426V17.9465Z"
                        fill="#D19837"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_251">
                        <rect
                          width="89.7188"
                          height="72"
                          fill="white"
                          transform="translate(0.000579834 0.560059)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#333] text-[18px] font-normal uppercase">
                  PASEO
                </span>
              </div>

              {/* Map Content Area */}
              <div className="relative h-[515px] bg-white border-t border-black">
                <div className="absolute inset-0 flex">
                  {/* Sidebar Controls */}
                  <div className="w-[46px] bg-[#D4D4D4] h-full flex flex-col items-center py-12 space-y-8">
                    <div className="w-5 h-5 bg-[#333] rounded cursor-pointer"></div>
                    <div className="w-5 h-5 bg-[#333] rounded cursor-pointer"></div>
                    <div className="w-2 h-[100px] bg-black bg-opacity-15 relative">
                      <div className="absolute top-[70px] left-[-13px] w-7 h-7 bg-[#BBB] rounded flex items-center justify-center cursor-pointer">
                        <div className="w-4 h-4 text-[#333] text-center">⋮</div>
                      </div>
                    </div>
                  </div>

                  {/* Map Display Area */}
                  <div className="flex-1 bg-white relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F1db2ee28cecf4642a00d7b44c40c245c"
                      alt="PASEO Community Map"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Legend Panel */}
                  <div className="w-[234px] bg-[#EEE] h-full">
                    <div className="bg-[#D19837] h-[42px] flex items-center justify-between px-3 border-t border-gray-200 border-opacity-25">
                      <span className="text-[#F0F0F0] text-[14px] font-normal">
                        Legend
                      </span>
                      <div className="w-5 h-5 text-white text-[14px] text-center cursor-pointer">
                        ×
                      </div>
                    </div>
                    <div className="bg-[#D4D4D4] p-3.5 space-y-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-[18px] h-[18px] bg-[#69ADE0] border border-[#555] rounded-sm"></div>
                        <span className="text-[#333] text-[14px] font-normal">
                          Available
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[18px] h-[18px] bg-[#8F8F8F] border border-[#555] rounded-sm"></div>
                        <span className="text-[#333] text-[14px] font-normal">
                          Future Available
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[18px] h-[18px] bg-[#7CD684] border border-[#555] rounded-sm"></div>
                        <span className="text-[#333] text-[14px] font-normal">
                          Quick Move-In
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[18px] h-[18px] bg-[#ED4747] border border-[#555] rounded-sm"></div>
                        <span className="text-[#333] text-[14px] font-normal">
                          Sold
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-2 left-2 bg-red-600 w-6 h-6 rounded flex items-center justify-center">
                  <span className="text-white text-[12px]">📍</span>
                </div>
                <div className="absolute bottom-4 right-[260px] w-6 h-9 bg-[#D4D4D4] flex items-center justify-center cursor-pointer">
                  <span className="text-[#333] text-[20px]">⤢</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F0aacace864474c43bced7c92bb6907ae"
                alt="Contact"
                className="w-[123px] h-[123px] rounded-full border-3 border-[rgba(210,154,58,0.34)]"
              />
            </div>

            {/* Get in Touch Heading */}
            <h2 className="text-[#192A3D] text-[34px] font-bold leading-[35px] text-center mb-12">
              Get in Touch
            </h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row - First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
              </div>

              {/* Second Row - Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
                <div className="px-[5px]">
                  <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-[40px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 focus:outline-none focus:border-[#D29A3A]"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="px-[5px]">
                <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px] mb-2">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full h-[170px] bg-white border-0 border-b border-[#69727D] rounded-[3px] px-3 py-2 resize-none focus:outline-none focus:border-[#D29A3A]"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="px-[5px] space-y-4">
                <label className="block text-[#3A4F66] text-[15px] font-normal leading-[24.75px]">
                  Accept Terms of Contacting
                </label>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="w-[13px] h-[13px] bg-[#0075FF] rounded-[2.5px] border-0 mt-1 flex-shrink-0"
                  />
                  <div className="text-[#3A4F66] text-[15px] font-normal leading-[24.75px]">
                    <p className="mb-1">
                      By pressing the Submit button, I agree to Choice Valley
                      contacting me by email and/or phone to share home
                      availability information or related opportunities. I also
                    </p>
                    <p>
                      understand that any information I've shared in this form
                      is subject to Choice Valley Homes' Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-[5px]">
                <button
                  type="submit"
                  className="w-[362px] h-[40px] bg-[#69727D] text-white rounded-[3px] text-[15px] font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#F2F4F7] py-16">
          <div className="max-w-[1270px] mx-auto px-4">
            <div className="text-center">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2F670681162c164c8fa4395680e72a5f95"
                  alt="Choice Valley Homes Logo"
                  className="w-[400px] h-[59px] sm:w-[600px] sm:h-[88px] lg:w-[719px] lg:h-[106px] object-cover object-center"
                  style={{
                    aspectRatio: "6.76",
                    minHeight: "20px",
                    minWidth: "20px",
                    overflow: "hidden",
                  }}
                />
              </div>

              <h3 className="text-[#3A4F66] text-[30px] leading-[49.5px] mt-8 px-4">
                Building communities throughout the Central Valley
              </h3>
              <p className="text-[#3A4F66] mt-8">
                For More Information about PASEO, Please Call or Text
              </p>
              <div className="mt-8">
                <p className="text-[#3A4F66] text-lg leading-[29.7px]">
                  <span>Stephanie Stine</span>
                  <br />
                  <span>Community Sales Manager</span>
                  <br />
                  <span>209-308-9000</span>
                  <br />
                  <span>DRE# 02189834</span>
                </p>
              </div>
              <div className="mt-8">
                <p className="text-[#3A4F66] text-lg leading-[29.7px]">
                  <span>Hours</span>
                  <br />
                  <span>Monday – Closed</span>
                  <br />
                  <span>Tuesday – Saturday 10am – 5pm</span>
                  <br />
                  <span>Sunday – 11am – 4pm</span>
                </p>
              </div>
              <p className="text-[#3A4F66] text-lg leading-[29.7px] mt-8">
                154 Montage Drive, Merced, CA 95348
              </p>

              <div className="flex justify-center items-center gap-4 mt-8">
                <a
                  href="tel:209-308-9000"
                  className="flex items-center gap-2 text-black text-lg font-bold"
                >
                  <Phone className="w-5 h-5 text-[#D29A3A]" />
                  <span>209-308-9000</span>
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#"
                  className="flex items-center gap-2 text-black text-xl font-bold"
                >
                  <MessageSquare className="w-5 h-5 text-[#D29A3A]" />
                  <span>Send Message</span>
                </a>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full"
                >
                  <ExternalLink className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0c5380d861a94486888626352de6a4fa%2Fc1612309158a45dda0c4fb3b85d490a6"
                alt="Equal Housing Opportunity"
                className="w-[102px] h-[109px]"
              />
            </div>

            <div className="flex justify-center items-center gap-2 mt-8 text-black">
              <span>® All Rights Reserved</span>
              <span className="text-gray-300">|</span>
              <Link
                to="/privacy"
                className="hover:text-[#D29A3A] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
