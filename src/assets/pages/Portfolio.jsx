import React from "react";
import image1 from "../images/portfolio/1.webp"
import image2 from "../images/portfolio/2.webp"
import image3 from "../images/portfolio/3.webp"
import image4 from "../images/portfolio/4.webp"
import image5 from "../images/portfolio/5.webp"
import image6 from "../images/portfolio/6.webp"
import image7 from "../images/portfolio/7.webp"
import image8 from "../images/portfolio/8.webp"
import image9 from "../images/portfolio/9.webp"
import image10 from "../images/portfolio/10.webp"
import image11 from "../images/portfolio/11.webp"
import image12 from "../images/portfolio/12.webp"
import image13 from "../images/portfolio/13.webp"
import image14 from "../images/portfolio/14.webp"
import image15 from "../images/portfolio/15.webp"





import { FaWhatsapp, FaPhone } from "react-icons/fa";


export default function Portfolio() {
  return (
    <div className="bg-[#0b0b0b] text-center py-16 px-4">
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-20">
        Our <span className="text-orange-500">Portfolio</span>
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        Explore our collection of captured moments and creative excellence
      </p>

      {/* Portfolio Gallery Section */}
      <section className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-12 py-10">
        {/* Filter Tabs */}
        {/* <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300">
            Photos
          </button>
          <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300">
            Videos
          </button>
        </div> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image1}
              alt="Wedding couple at sunset"
              className="w-full h-88 object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image2}
              alt="Outdoor ceremony aisle"
              className="w-full h-85 object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image3}
              alt="Wedding reception hall"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image4}
              alt="Wedding rings macro"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image5}
              alt="Bride and bridesmaids"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image6}
              alt="Couple dancing"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image7}
              alt="Bouquet close-up"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
               src={image8}
              alt="Couple walking in garden"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image9}
              alt="Wedding cake"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image13}
              alt="Wedding cake"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image11}
              alt="Wedding cake"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image12}
              alt="Wedding cake"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 object-top"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image10}
              alt="Wedding cake"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image14}
              alt="Wedding cake"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img
              src={image15}
              alt="Wedding cake"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Video 1 */}
  <div className="overflow-hidden rounded-lg group">
    <video
      src="/videos/video1.mp4" // 👉 Replace with your video path
      controls
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>

  {/* Video 2 */}
  <div className="overflow-hidden rounded-lg group">
    <video
      src="/videos/video2.mp4" // 👉 Replace with your video path
      controls
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>
        </div>
      </section>
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

    </div>
  );
}
