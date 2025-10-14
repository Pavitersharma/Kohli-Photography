import React from 'react'
import service1 from "../images/service/1.webp";
import service2 from "../images/service/2.webp";
import service3 from "../images/service/3.webp";
import service4 from "../images/service/4.webp";
import service5 from "../images/service/5.webp";
import service6 from "../images/service/6.webp";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Service() {


   // 🎯 Services Section Data
    const services = [
      {
        icon: <img src={service1} alt="Wedding Photography" />,
        title: "Wedding Photography",
        description:
          "Capturing the emotions, elegance, and joy of your big day through timeless and artistic wedding portraits.",
      },
      {
        icon: <img src={service2} alt="Video Production" />,
        title: "Maternity shoot",
        description:
          "Capturing the glow of motherhood — timeless moments of love and new beginnings.",
      },
      {
        icon: <img src={service3} alt="Pre-Wedding Shoots" />,
        title: "Pre-Wedding Shoots",
        description:
          "Celebrate your love story with stunning pre-wedding shoots that blend romance, style, and natural beauty.",
      },
      {
        icon: <img src={service4} alt="Fashion Photography" />,
        title: "Fashion Photography",
        description:
          "Showcasing style and confidence through bold, high-end fashion photography designed for brands and portfolios.",
      },
      {
        icon: <img src={service5} alt="Model Shoot" />,
        title: "Model Shoot",
        description:
          "Professional model photoshoots that highlight your best angles, expressions, and individuality for a standout portfolio.",
      },
      {
        icon: <img src={service6} alt="Birthday Photography" />,
        title: "Birthday Photography",
        description:
          "Capturing the laughter, joy, and excitement of your special day with vibrant and lively birthday photography.",
      },
    ];
  return (
    <>

   {/* ===================== 📷 SERVICES SECTION ===================== */}
      <div className="bg-[#0b0b0b] text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We offer comprehensive photography and production services tailored to
          your unique needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#151515] p-8 rounded-xl border border-transparent hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-orange-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/916399230526"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    title="Chat on WhatsApp"
  >
    <FaWhatsapp className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
  </a>

  {/* Call Button */}
  <a
    href="tel:+916399230526"
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    title="Call Us"
  >
    <FaPhone className="text-black w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
  </a>
</div>

    </>
  )
}
