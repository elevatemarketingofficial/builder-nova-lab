import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Phone, MessageSquare, Instagram, X, ZoomIn } from "lucide-react";
import Header from "../components/Header";

export default function Community() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);

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
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[690px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(https://api.builder.io/api/v1/image/assets/TEMP/6d33231cf6eb6e2d174497ac6fb6be7a67ba6b2e?width=3840)`,
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-[64px] font-bold leading-[68px] text-white">
              COMMUNITY
            </h1>
          </div>
        </section>

        {/* Community Map Section */}
        <section className="py-10 bg-white">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="relative mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ee5a4d5fe183228eb253a4eccdd29dc9ad81de57?width=2240"
                alt="Community Map"
                className="w-full h-auto cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[14px] text-brand-medium-blue">📍</span>
                <span className="text-[16px] text-brand-medium-blue">Click to enlarge</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ee5a4d5fe183228eb253a4eccdd29dc9ad81de57?width=2240"
                alt="Community Map - Enlarged"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* UC Merced Section */}
        <section className="py-[100px] bg-brand-light-gray">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex items-center gap-5">
              <div className="w-[456px] bg-white p-10">
                <h2 className="text-[35px] font-bold text-brand-dark-blue leading-[35px] mb-6">
                  UC Merced
                </h2>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  UC Merced is the first American research
                  university established in the 21st century. UC
                  Merced has upheld their legacy for
                  innovative, interdisciplinary research. From
                  Quantitative and Systems Biology to
                  Mechanical Engineering, Dynamic
                  curriculums and commitment to diversity, and
                  leadership programs are bounded by student
                  success.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/268a2ceae881cd1f24f4badd32a6094da9ca8a0a?width=1328"
                  alt="UC Merced"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor Section */}
        <section className="py-[100px] bg-brand-light-gray">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex items-center gap-5">
              <div className="flex-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1944c16512016dfb6501ca86467ac9074cde4ffc?width=1328"
                  alt="Outdoor Activities"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-[456px] bg-white p-10">
                <h2 className="text-[34px] font-bold text-brand-dark-blue leading-[35px] mb-6">
                  Outdoor
                </h2>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px] mb-6">
                  Explore the most popular biking paths, hiking
                  trails, walking paths, Parks and other attractions
                  surrounding Merced  
                </p>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  Merced is well known for the beautiful Yosemite
                  Lake & Merced River.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-[100px] bg-brand-light-gray">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex items-start gap-5">
              <div className="w-[456px] bg-white p-10">
                <h2 className="text-[35px] font-bold text-brand-dark-blue leading-[35px] mb-5">
                  Explore and enjoy
                  these must-visit
                  locations
                </h2>
                <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
                  The popular & historic majesty of Yosemite
                  National Park's landscape living within our
                  community puts numerous scenic escapes
                  within driving distance. The Merced County
                  Courthouse Museum gives an appreciation of
                  our community's rich history, while the
                  Merced National Wildlife Refuge and
                  Applegate Zoo house some wonderful and
                  exotic species.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0b50a01a9c65b9fa165ac213ebd31c17f74facd3?width=1328"
                  alt="Yosemite National Park"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="bg-white py-[130px]">
          <div className="max-w-[730px] mx-auto px-4">
            <div className="text-center mb-8">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e77a025832448c22fb3aef29e7810f44e28495f6?width=216"
                  alt="Contact"
                  className="w-[108px] h-[108px] rounded-full border-3 border-brand-gold border-opacity-34"
                />
              </div>
              <h2 className="text-[34px] font-bold text-brand-dark-blue">
                Get in Touch
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-0 mb-6">
                <div className="px-[5px]">
                  <label className="block text-[15px] text-brand-medium-blue mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-0 focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div className="px-[5px]">
                  <label className="block text-[15px] text-brand-medium-blue mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-0 focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0 mb-6">
                <div className="px-[5px]">
                  <label className="block text-[15px] text-brand-medium-blue mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-0 focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div className="px-[5px]">
                  <label className="block text-[15px] text-brand-medium-blue mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-10 bg-white border-b border-brand-text-gray rounded-sm px-0 focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="mb-6 px-[5px]">
                <label className="block text-[15px] text-brand-medium-blue mb-2">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-white border-b border-brand-text-gray rounded-sm px-0 py-2 focus:outline-none focus:border-brand-gold resize-none"
                />
              </div>

              <div className="mb-6 px-[5px]">
                <label className="block text-[15px] text-brand-medium-blue mb-4">
                  Accept Terms of Contacting
                </label>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="w-3 h-3 mt-1 bg-blue-600 rounded"
                  />
                  <div className="text-[15px] text-brand-medium-blue leading-[24.75px]">
                    <p>
                      By pressing the Submit button, I agree to Choice Valley contacting me by email and/or phone
                    </p>
                    <p>
                      to share home availability information or related opportunities. I also understand that any
                    </p>
                    <p>
                      information I've shared in this form is subject to Choice Valley Homes' Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-[5px]">
                <button
                  type="submit"
                  className="bg-brand-text-gray text-white px-12 py-3 text-[15px] font-medium rounded-sm hover:bg-opacity-90 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F2F4F7] py-16">
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
                <g clipPath="url(#clip0_34_1004)">
                  <mask
                    id="mask0_34_1004"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="634"
                    height="94"
                  >
                    <path d="M633.1 0.418945H0.910004V93.8106H633.1V0.418945Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_34_1004)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.7932 0.418945L69.8371 10.426V5.02895H83.4688V21.2314L111.196 42.9208C108.234 42.9208 105.205 42.651 102.153 42.651H96.592L56.6914 11.2918L26.0258 35.2413H30.1854V51.4775C43.7492 44.0452 70.7979 40.0313 89.4935 43.0783C64.994 44.8475 41.4403 53.2159 21.3576 67.2863V43.9553H0.910004L56.7932 0.418945Z"
                      fill="#D29A3A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M71.4761 52.1184C86.2337 47.1899 101.736 44.8316 117.299 45.1471C108.037 46.2928 98.9094 48.3376 90.0474 51.2526C62.1735 60.4725 40.5391 76.6076 30.3211 93.822L15.3555 89.2456C26.6588 74.0439 46.5298 60.2252 71.4761 52.0171V52.1184Z"
                      fill="#D29A3A"
                    />
                    {/* Logo text paths would continue here - simplified for brevity */}
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_34_1004">
                    <rect width="632.19" height="93.3917" fill="white" transform="translate(0.910004 0.418945)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-[30px] text-brand-medium-blue font-normal leading-[49.5px]">
              Building communities throughout the Central Valley
            </h3>

            <p className="text-[16px] text-brand-medium-blue leading-[26.4px]">
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

            <p className="text-[18px] text-brand-medium-blue leading-[29.7px]">
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
                src="https://api.builder.io/api/v1/image/assets/TEMP/2fa4e6a981c2976850756be421a86ccab0534b40?width=179"
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
