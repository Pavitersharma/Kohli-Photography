import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaTimes
} from "react-icons/fa";

// Import all your images
import image1 from "../images/portfolio/1.webp";
import image2 from "../images/portfolio/2.webp";
import image3 from "../images/portfolio/3.webp";
import image4 from "../images/portfolio/4.webp";
import image5 from "../images/portfolio/5.webp";
import image6 from "../images/portfolio/6.webp";
import image7 from "../images/portfolio/7.webp";
import image8 from "../images/portfolio/8.webp";
import image9 from "../images/portfolio/9.webp";
import image10 from "../images/portfolio/10.webp";
import image11 from "../images/portfolio/11.webp";
import image12 from "../images/portfolio/12.webp";
import image13 from "../images/portfolio/13.webp";
import image14 from "../images/portfolio/14.webp";
import image15 from "../images/portfolio/15.webp";

export default function Portfolio() {
  const [selectedMedia, setSelectedMedia] = useState(null); // for image or video
  const [isVideo, setIsVideo] = useState(false);

  // All portfolio items
  const portfolioItems = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image13, image11, image12,
    image10, image14, image15,
    "/videos/video1.mp4",
    "/videos/video2.mp4",
  ];

  const handleItemClick = (item) => {
    if (item.endsWith(".mp4")) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
    setSelectedMedia(item);
  };

  const closePopup = () => {
    setSelectedMedia(null);
    setIsVideo(false);
  };

  return (
    <div className="bg-[#0b0b0b] text-center py-16 px-4 relative">
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-20">
        Our <span className="text-orange-500">Portfolio</span>
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        Explore our collection of captured moments and creative excellence
      </p>

      {/* Gallery Grid */}
      <section className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="overflow-hidden rounded-lg group cursor-pointer"
            >
              {item.endsWith(".mp4") ? (
                <video
                  src={item}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={item}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp + Call Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/916399230526"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </a>

        <a
          href="tel:+916399230526"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Call Us"
        >
          <FaPhone className="text-black w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </a>
      </div>

      {/* Popup Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closePopup}
            className="absolute top-6 right-6 text-white text-3xl hover:text-orange-500"
          >
            <FaTimes />
          </button>

          <div className="max-w-4xl w-full px-4">
            {isVideo ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Enlarged portfolio"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
